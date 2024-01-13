import axios from "axios";
import { useQueries } from "react-query";

const heroIds = [1, 3];

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
}

export default function DynamicParallelQueryPage() {

  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
  
      }
    }) 
  )

  console.log(queryResults);

  return (
    <div>DynamicParallelQuery</div>
  )
}