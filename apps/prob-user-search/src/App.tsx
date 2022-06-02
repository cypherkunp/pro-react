import { lazy, Suspense } from 'react';
import './App.css';

const SearchResults = lazy(() => import('components/SearchResults/SearchResults'));

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="app-main">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
