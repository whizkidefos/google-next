import PaginationButton from '../components/PaginationButton';

function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] lg:pl-52">

            <p className="text-gray-500 text-sm mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results (in {results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items?.map((result) => (
                <article className="max-w-xl mb-8 border-l-4 border-blue-500 pl-5" key={result.link}>
                    <div className="group">
                        <a href={result.link} className="text-sm">{result.formattedUrl}</a>
                        <a href={result.link}><h2 className="truncate text-xl text-blue-500 font-medium group-hover:underline">{result.title}</h2></a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </article>
            ))}

            <PaginationButton />
        </div>
    )
}

export default SearchResults
