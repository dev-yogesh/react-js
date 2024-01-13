import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

// way 1
// const fetchSuperHero = (heroId) => {
//     return axios.get(`http://localhost:4000/superheros/${heroId}`)
// }

// way 2
const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

// way 1
// export default function useSuperHeroDetailData(heroId) {
//     return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId));
// }

// wsay 2
export default function useSuperHeroDetailData(heroId) {
    
    const queryClient = useQueryClient(); 

    return useQuery(['super-hero', heroId], fetchSuperHero, {
        initialData: () => {
            const heroData = queryClient.getQueryData('super-heros')?.data?.find(hero => hero.id === parseInt(heroId));

            if(heroData){
                return {
                    data: heroData
                }
            }else{
                return undefined;
            }
            
        }
    });
}
