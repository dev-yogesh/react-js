import useSuperHeroDetailData from "../hooks/useSuperHeroDetailData"

export default function SuperHeroDetailsPage({ heroId }) {
    const { isLoading, data, isError, error } = useSuperHeroDetailData(heroId);

    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            <h3>Id: {data?.data.id}</h3>
            <h3>Name: {data?.data.name}</h3>
            <h3>AlterEgo: {data?.data.alterEgo}</h3>
        </div>
    )
}