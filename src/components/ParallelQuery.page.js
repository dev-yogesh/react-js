import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheros')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export default function ParallelQueryPage() {

    // meaning 
    // both query will execute in parallel (if multiple useQuery)
    const { data: superheros } = useQuery('super-heros', fetchSuperHeros);
    const { data: friends } = useQuery('friends', fetchFriends);

    console.log('superheros friends', superheros, friends);

    return (
        <div>ParallelQuery</div>
    )
}