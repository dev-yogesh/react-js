import axios from "axios"
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query"

const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export default function InfiniteQueryPage() {
    const { isLoading, data, isError, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['colors'], fetchColors, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1;
            } else {
                return undefined
            }
        }
    });

    console.log('data', data, hasNextPage);

    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }



    return (
        <div>
            {
                data?.pages.map((group, i) => {
                    return (
                        <Fragment key={i}>
                            {
                                group.data.map(color => <h3 key={color.id}>{color.label}</h3>)
                            }
                        </Fragment>
                    )
                })
            }

            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
            </div>

            <div>
                {
                    (isFetching && !isFetchingNextPage) && 'Fetching...'
                }
            </div>
        </div>
    )
}
