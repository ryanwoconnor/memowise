import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="py-12 mt-8 border-t bg-gray-50">
      <div className="max-w-3xl px-4 mx-auto antialiased sm:px-8 md:px-12 lg:px-0 divide-y divide-gray-200">
        {/*
        <ul className="pb-12 grid gap-5 grid-cols-1 sm:grid-cols-3 gap-y-10">
          <li className="space-y-5">
            <h4 className="font-semibold text-gray-500 uppercase">Topics</h4>
            <ul className="text-gray-500 space-y-4">
              <li>
                <Link href="/browse/math">
                  <a className="hover:text-blue-500"> Math </a>
                </Link>
              </li>
              <li>
                <Link href="/browse/languages">
                  <a className="hover:text-blue-500"> Languages </a>
                </Link>
              </li>
              <li>
                <Link href="/browse/science">
                  <a className="hover:text-blue-500"> Science </a>
                </Link>
              </li>
              <li>
                <Link href="/browse/all-the-things">
                  <a className="hover:text-blue-500"> All The Things </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h4 className="font-semibold text-gray-500 uppercase">Features</h4>
            <ul className="text-gray-500 space-y-4">
              <li>
                <Link href="/features#browse">
                  <a className="hover:text-blue-500">
                    Browse Topics & Flashcards
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/features#quiz">
                  <a className="hover:text-blue-500">Flashcard Quiz</a>
                </Link>
              </li>
              <li>
                <Link href="/features#create">
                  <a className="hover:text-blue-500">Create Flashcards</a>
                </Link>
              </li>
              <li>
                <Link href="/features#personalize">
                  <a className="hover:text-blue-500">Personalized Collection</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h4 className="font-semibold text-gray-500 uppercase">About</h4>
            <ul className="text-gray-500 space-y-4">
              <li>
                <Link href="/about#how">
                  <a className="hover:text-blue-500">How I Built MemoWise</a>
                </Link>
              </li>
              <li>
                <Link href="/about#algorithm">
                  <a className="hover:text-blue-500">Study Algorithm</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        */}
        <div className="text-center">
          <p className="text-base font-medium text-gray-500">
            Made with ☕️☕️☕️ by{' '}
            <a
              href="https://dtjv.io"
              className="font-semibold text-gray-900 hover:text-blue-500"
            >
              David Valles
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}