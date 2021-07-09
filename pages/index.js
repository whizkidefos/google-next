import { SearchIcon, MicrophoneIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRef } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
    console.log(term)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="The full build of Google's search page with Next JS" />
        <link rel="icon" href="/images/google-icon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        {/* <img src="/images/google-logo.png" alt="google logo" /> */}
        <Image src="/images/google-logo.png" width={300} height={100} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
