// import axios from 'axios';
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { request } from '../utils/axios-utils';

const fetchSuperHeros = () => {
    // return axios.get('http://localhost:4000/superheros')
    return request({ url: '/superheros'})
}

const creatSuperHero = (heroData) => {
    // return axios.post('http://localhost:4000/superheros', heroData)
    return request({ url: '/superheros', method: 'POST', data: heroData })
}

export default function useSuperHeroData(onSuccess, onError, options) {
    return useQuery('super-heros', fetchSuperHeros, {
        enabled: options.enabled,
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map(hero => hero.name)
        //     return superHeroNames
        // }
    });
}

export function useCreateSuperHero(){
    const queryClient = useQueryClient();
    return useMutation(creatSuperHero, {
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries('super-heros');
        //     queryClient.setQueryData('super-heros', (oldData) => {
        //         return {
        //             ...oldData,
        //             data: [...oldData.data, data.data]
        //         }
        //     })
        // }
        onMutate: (heroData) => {
            queryClient.cancelQueries('super-heros');
            const previousSuperHerosData = queryClient.getQueryData('super-heros');
            queryClient.setQueryData('super-heros', (oldData) => {
                return {
                    ...oldData.data,
                    data: [
                        ...oldData.data,
                        {
                            id: oldData.data.length + 1,
                            ...heroData
                        }
                    ]
                }
            });

            return {
                previousSuperHerosData
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueriesData('super-heros', context.previousSuperHerosData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heros');
        }
    })
}
