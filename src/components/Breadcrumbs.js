import Link from 'next/link'

export const Breadcrumbs = ({ crumbs }) => {
  const renderCrumbs = crumbs.map((crumb) => (
    <>
      <span className="mx-1">/</span>
      {crumb.isLink ? (
        <Link href={crumb.path}>
          <a>
            <span className="mx-1 text-blue-500">{crumb.name}</span>
          </a>
        </Link>
      ) : (
        <span className="mx-1">{crumb.name}</span>
      )}
    </>
  ))

  return (
    <div className="flex items-center mb-4 text-sm font-medium text-gray-700">
      <Link href="/">
        <a>
          <svg
            className="w-4 h-4 mr-1 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </a>
      </Link>
      {renderCrumbs}
    </div>
  )
}
