import Image from "next/image";
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from "./HeaderOptions";

function HeaderInner() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) { return; }

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
           <section className="flex items-center w-full p-6">
            <Image src="/images/google-logo.png" height={40} width={120} onClick={() => router.push('/')} className="cursor-pointer" />

                <form action="" className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">

                    <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />

                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

                    <button hidden type="submit" onClick={search}>search</button>

                </form>

                <Avatar url='https://imgr.search.brave.com/Yt-nn6e3MmDqh0I6vDfPNcqH9V3S6x5DlB1QS9EpCjI/fit/1000/675/no/1/aHR0cHM6Ly9pZWZv/c2EubWUvd3AtY29u/dGVudC90aGVtZXMv/d2hpemtpZGVmb3Mv/aW1hZ2VzL2Vmb3Nh/X2lnYmluZWhpLmpw/Zw' className="ml-auto" />
           </section>
           
           <HeaderOptions />

        </header>
    )
}

export default HeaderInner
