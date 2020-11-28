import Link from "next/link";
import Image from "next/image";

const Section = ({ children }) => (
  <section className="py-8 sm:py-10">{children}</section>
);

const Math = () => {
  return (
    <div className="max-w-3xl px-4 mx-auto antialiased sm:px-8 md:px-12 lg:px-0">
      <nav>
        <div className="flex items-center justify-between py-6 border-b border-gray-200">
          <div>memowise</div>
          <div>menu</div>
        </div>
      </nav>
      <main>
        <header className="pb-6 mt-10 mb-6 border-b border-gray-200">
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
            <span className="mx-1">/</span>
            <Link href="/">
              <a>
                <span className="mx-1 text-blue-500">Math</span>
              </a>
            </Link>
            <span className="mx-1">/</span>
            <Link href="/">
              <a>
                <span className="mx-1 text-blue-500">Algebra</span>
              </a>
            </Link>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
            Expression and Equations
          </h1>
          <p className="mb-4 text-xl font-normal tracking-tight text-gray-500">
            A few basic questions about pre-algebra. You should know this inside
            and out. These terms cover all you need to get into high school
            calculus.
          </p>
          <div className="flex items-center">
            <Image
              src="/me.jpg"
              alt="a pic of me"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="ml-3 font-semibold">David Valles</p>
          </div>
        </header>
        <Section>
          <ul className="space-y-8">
            <li className="relative p-6 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl">
              <p className="text-xs text-gray-500 uppercase">term</p>
              <div className="flex justify-center py-8">
                <p>Algebraic Expression</p>
              </div>
              <span className="absolute bottom-2 right-2 uppercase text-xs rounded-full bg-pink-100 text-pink-600 py-0.5 px-2">
                tap
              </span>
            </li>
            <li className="relative p-6 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl">
              <p className="text-xs text-gray-500 uppercase">definition</p>
              <div className="flex justify-center py-8">
                <p>
                  A combination of variables, numbers, and at least one
                  operation.
                </p>
              </div>
              <span className="absolute bottom-2 right-2 uppercase text-xs rounded-full bg-pink-100 text-pink-600 py-0.5 px-2">
                tap
              </span>
            </li>
          </ul>
        </Section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Math;
