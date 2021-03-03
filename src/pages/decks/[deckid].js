import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import axios from 'axios'
import useSWR from 'swr'

import { Container } from '@/components/Container'
import { Cards } from '@/components/Cards'
import { CardsFlip } from '@/components/CardsFlip'
import { BreadCrumbs } from '@/components/BreadCrumbs'
import { PencilIcon } from '@/components/icons/pencil'
import { TrashCanIcon } from '@/components/icons/trash-can'

import { getDeck, getDeckList } from '@/lib/data'

import { fetcher } from '@/utils/fetcher'

const DeckPage = ({ deck }) => {
  const [isEditable, setIsEditable] = useState(false)
  const router = useRouter()
  const [session] = useSession()
  const { data } = useSWR(
    () => session?.user && `/api/users/${session.user.id}`,
    fetcher
  )
  const { topic, subTopic } = deck
  const crumbs =
    topic && subTopic
      ? [
          {
            name: topic.name,
            path: `/browse/${topic.slug}`,
            isLink: true,
          },
          {
            name: subTopic.name,
            path: `/browse/${topic.slug}/${subTopic.slug}`,
            isLink: true,
          },
          {
            name: deck.name,
            path: '',
            isLink: false,
          },
        ]
      : []
  const handleDelete = async () => {
    await axios.delete(`/api/decks/${deck.id}`)
    router.back()
  }

  useEffect(() => {
    const createdDecks = data?.user?.decks?.created || []
    if (!!createdDecks.find((createdDeck) => createdDeck.id === deck.id)) {
      setIsEditable(true)
    }
  }, [data])

  if (router.isFallback) {
    return <Skeleton />
  }

  return (
    <>
      <Head>
        <title>MemoWise - {deck.name}</title>
      </Head>
      <Container>
        <BreadCrumbs crumbs={crumbs} />
        <div className="mb-4">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900">
            {deck.name}
          </h1>
          {isEditable && (
            <div className="flex items-center space-x-2">
              <Link href={`/decks/${deck.id}/edit`}>
                <a>
                  <PencilIcon className="w-6 h-6" />
                </a>
              </Link>
              <button onClick={handleDelete}>
                <TrashCanIcon className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        <p className="mb-4 text-xl font-normal tracking-tight text-gray-500">
          {deck.description}
        </p>
      </Container>
      <Container>
        <CardsFlip cards={deck.cards} />
      </Container>
      <Container>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 ">Cards</h2>
          <Link href={`/decks/${deck.id}/quiz`}>
            <a className="inline-flex items-center px-3 py-1.5 font-semibold text-white bg-gray-900 text-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Take Quiz
            </a>
          </Link>
        </div>
        <Cards cards={deck.cards} />
      </Container>
    </>
  )
}

export default DeckPage

export async function getStaticPaths() {
  const decks = await getDeckList()

  return {
    paths: decks.map((deck) => ({
      params: { deckid: deck.id },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const deck = await getDeck({ id: params.deckid })
  delete deck.topic?.subTopics

  return { props: { deck }, revalidate: 1 }
}

const Skeleton = () => {
  return (
    <>
      <div className="animate-pulse">
        <Container>
          <div className="space-y-4">
            <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-10 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="w-full h-6 bg-gray-300 rounded"></div>
              <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="w-full bg-gray-300 rounded-xl h-52"></div>
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </Container>
        <Container>
          <div className="flex justify-between">
            <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
            <div className="w-24 h-10 bg-gray-300 rounded"></div>
          </div>
          <div className="mt-4 space-y-8">
            <div className="w-full h-32 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-32 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-32 bg-gray-300 rounded-xl"></div>
          </div>
        </Container>
      </div>
    </>
  )
}
