import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheros')
}

const addSuperHero = async (data) => {
    await axios.post('http://localhost:4000/superheros', data);
}

export default function HomePage() {

    const [refetchInterval, setRefetchInterval] = useState(3000);

    const onSuccess = (data) => {
        console.log('success', data);

        if(data.data.length === 10){
            setRefetchInterval(false);
            return;
        }

        addSuperHero({
            id: Date.now(),
            name: `New_${Date.now()}`,
            alterEgo: `New_${Date.now()}`,
        })
    }

    const onError = (error) => {
        console.log('error', error);
    }

    // way 1
    // const { isLoading, data } = useQuery('super-heros', () => {
    //     return axios.get('http://localhost:4000/superheros')
    // });



    // way 2
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heros', fetchSuperHeros, {
        // meaning
        // the query res will be cached for 5sec. (default is 5min) 
        // if query is then not active i.eif it goes into inactive state (meaning we have switched the page) then the query will be removed   
        // cacheTime: 5000, // 5 sec

        // meaning
        // the requery res will be fresh for 30sec. (default is 0sec)
        // let the query be active or inactive if staletime passes the query response will become stale from fresh and a refetch will occur once the query will become active
        // staleTime: 1000 * 30, // 30sec

        // refetchOnMount: false, // default is true ==> there is one more value 'always' (whether the data is stale or not refetch will occur on mount)

        // meaning refetch will occur on window focus
        // refetchOnWindowFocus: true, // default is true ==> there is one more value 'always' (whether the data is stale or not refetch will occur on mount)

        // polling 
        // meaning
        // query will refetch afte every 2sec 
        // refetchInterval: 2000, // (default is false)

        // this will refetch even if browser is not in foucus and query will be fired in background
        // refetchIntervalInBackground: true


        // meaning
        // query will not fire on mount
        // enabled: false,

        // onSuccess,
        // onError,

        // refetchInterval: refetchInterval

        select: (data) => {
            const superHeroNames = data.data.map(hero => hero.name)
            return superHeroNames
        }
    });

    // console.log('isLoading, data, isError, error, isFetching', isLoading, data, isError, error, isFetching);
    console.log('isLoading, isFetching', isLoading, isFetching, data);

    if(isLoading){
        return <h1>loading...</h1>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }

    return (
        <>
            <div>HomePage</div>

            {/* <button onClick={refetch}>Fetch Superheros</button> */}

            {
                data?.map(superHero => {
                    return <h2 key={superHero}>{superHero}</h2>
                })
            }
        </>
    )
}