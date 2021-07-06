import Avatar from "./Avatar";
import { ViewGridIcon, Microphone } from '@heroicons/react/solid';

function Header() {
    return (
        <header className="header flex w-full p-5 justify-between text-sm text-gray-700">
            <div className="flex space-x-4 items-center left">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="flex space-x-4 items-center right">
                <p>Gmail</p>
                <p>Images</p>

                {/* Icon */}
                <ViewGridIcon className="w-8 h-8 p-1 rounded-full hover:bg-gray-100 cursor-pointer" />

                <Avatar url='https://imgr.search.brave.com/Yt-nn6e3MmDqh0I6vDfPNcqH9V3S6x5DlB1QS9EpCjI/fit/1000/675/no/1/aHR0cHM6Ly9pZWZv/c2EubWUvd3AtY29u/dGVudC90aGVtZXMv/d2hpemtpZGVmb3Mv/aW1hZ2VzL2Vmb3Nh/X2lnYmluZWhpLmpw/Zw' />
            </div>
        </header>
    )
}

export default Header
