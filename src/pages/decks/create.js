import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'

import { DeckForm } from '@/components/DeckForm'
import { Container } from '@/components/Container'
import { NotAuthorized } from '@/components/NotAuthorized'

const CreateDeckPage = () => {
  const router = useRouter()
  const { data: session, status } = useSession()

  if (!session) {
    return <NotAuthorized />
  }

  const handleCreateDeck = async (newDeck, session) => {
    console.log(newDeck)
    console.log({ newDeck, user: session.user })
    await axios.post(`/api/decks`, { newDeck, user: session.user })
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>Memowise - Create New Flashcard Set</title>
      </Head>
      <Container>
        <h1 className="text-3xl font-extrabold text-gray-900">Create a Set</h1>
      </Container>
      <DeckForm
        submitLabel={'Create'}
        onSubmit={(data) => handleCreateDeck(data, session)}
      />
    </>
  )
}

export default CreateDeckPage
