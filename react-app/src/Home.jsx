import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    let link = '/item-list'
    return <div>
        <Link to={link}>Go to Items list</Link>
    </div>
}

export default Home;