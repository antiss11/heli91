import { createContext, useMemo, useState } from 'react';

const mapping = {
    'index': '',
    'form': 'form',
    'result': 'result',
};

const RouteContext = createContext({currentPage: mapping.index});

function Router({children}) {
    const url = window.location.pathname.slice(1).toLowerCase();
    const [page, setPage] = useState(url);
    const value = useMemo(
        () => ({ page, setPage }),
        [page, setPage]
    )

    return (
        <RouteContext.Provider value={value}>
            {children}
        </RouteContext.Provider>
    )
}

export { RouteContext, Router, mapping };