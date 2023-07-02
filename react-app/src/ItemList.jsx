import React, { useState, useContext } from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom'
import { ItemContext } from './ItemContext';
import { useEffect } from 'react';

const ItemList = () => {
    const [isDataLoading, setIsDataLoading] = useState(false);
    const { itemData: items, setItemData } = useContext(ItemContext);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setIsDataLoading(true);
                setItemData(data)
            })
    }, [])
    if (!isDataLoading) {
        return <div>
            <h3>Pleses wait some time....</h3>
        </div>;
    }
    return (
        <div>
            {items.map((item) => {
                let link = "../item-page/" + item.id;
                return <Card key={item.id}>
                    <Link to={link}>{item.name}</Link>
                </Card>
            })}
        </div>
    )
}


export default ItemList;