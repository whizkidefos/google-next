import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function PaginationButton() {
    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex justify-between max-w-lg text-blue-500 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex flex-grow items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

                <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                    <div className="flex flex-grow items-center cursor-pointer hover:underline">
                        <p>Next</p>
                        <ChevronRightIcon className="h-5" />
                    </div>
                </Link>
        </div>
    )
}

export default PaginationButton;
