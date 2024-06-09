import React, { Suspense } from 'react';
import { SearchPage } from '../pages/SearchPage';

function App() {
    return (
        <div className="App">
            <Suspense fallback={''}>
                <SearchPage />
            </Suspense>
        </div>
    );
}

export default App;
