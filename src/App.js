import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HomePage from './components/Home.page';
import AboutPage from './components/About.page';
import SuperHeroPage from './components/SuperHero.page';
import ParallelQueryPage from './components/ParallelQuery.page';
import DynamicParallelQueryPage from './components/DynamicParallelQuery.page';
import DependentQueryPage from './components/DependentQuery.page';
import PaginatedQueryPage from './components/PaginatedQuery.page';
import InfiniteQueryPage from './components/InfiniteQuery,page';

const queryClient = new  QueryClient();

export default function App() {
  const [page, setPage] = useState('');
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      <button onClick={() => setPage('superhero')}>SuperHero</button>
      <button onClick={() => setPage('parallel')}>ParallelQuery</button>
      <button onClick={() => setPage('dynamicParallel')}>DynamicParallelQuery</button>
      <button onClick={() => setPage('dependentQuery')}>DependentQuery</button>
      <button onClick={() => setPage('paginatedQuery')}>PaginatedQuery</button>
      <button onClick={() => setPage('infiniteQuery')}>InfiniteQuery</button>
      <button onClick={() => {queryClient.clear()}}>Clear Query Cache</button>

      <hr />

      {
        page === 'home' && (
          <HomePage />
        )
      }

      {
        page === 'about' && (
          <AboutPage />
        )
      }

      {
        page === 'superhero' && (
          <SuperHeroPage />
        )
      }

      {
        page === 'parallel' && (
          <ParallelQueryPage />
        )
      }

      {
        page === 'dynamicParallel' && (
          <DynamicParallelQueryPage />
        )
      }

      {
        page === 'dependentQuery' && (
          <DependentQueryPage />
        )
      }

      {
        page === 'paginatedQuery' && (
          <PaginatedQueryPage />
        )
      }

      {
        page === 'infiniteQuery' && (
          <InfiniteQueryPage />
        )
      }

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}