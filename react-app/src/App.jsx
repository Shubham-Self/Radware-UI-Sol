import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Item from './Item'
import ItemList from './ItemList';
import { ItemDataProvider } from './ItemContext';
import Home from './Home';

const App = () => {
    return (
        <ItemDataProvider>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="item-list" element={<ItemList />} />
                        <Route exact path="/item-page/:id" element={<Item />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ItemDataProvider>
    )
}

export default App;