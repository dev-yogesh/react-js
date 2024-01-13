import React, { useState } from 'react'
import useSuperHeroData, { useCreateSuperHero } from '../hooks/useSuperHeroData'
import SuperHeroDetailsPage from './SuperHeroDetails.page';

export default function SuperHeroPage() {

    const [selectedSuperHero, setSelectedSuperHero] = useState('');
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const onSuccess = (data) => {
        console.log('success', data);
    }

    const onError = (error) => {
        console.log('error', error);
    }

    const {isLoading, data, isError, error, refetch} = useSuperHeroData(onSuccess, onError, {
        enabled: true
    });

    const { mutate: addSuperHero } = useCreateSuperHero();

    const handleAdd = () => {
        const heroData = {
            name,
            alterEgo
        }

        addSuperHero(heroData);
    }

    if(isLoading){
        return <h1>loading...</h1>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }

  return (
    <>
    <div>SuperHero</div>

    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}  />
        <input type='text' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)}  />
        <button onClick={handleAdd}>Add</button>
    </div>

    <button onClick={refetch}>Fetch Superheros</button>

    {
        data?.data.map(superHero => {
            return <h2 key={superHero.id} onClick={() => setSelectedSuperHero(superHero.id)}>{superHero.name}</h2>
        })
    }

    {/* {
        data?.map(superHero => {
            return <h2 key={superHero}>{superHero}</h2>
        })
    } */}

    {
        selectedSuperHero && <SuperHeroDetailsPage heroId={selectedSuperHero} /> 
    }
    </>
  )
}