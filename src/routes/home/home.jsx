<<<<<<< HEAD
import './home.styles.scss';
import Hero from '../../component/hero/hero.component';
=======
import React from 'react';
import Directory from '../../component/directory/directory.component';
>>>>>>> ee4a3fd790f10781d2aacd65e9c92401a7845c81

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
            id: 5,
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];
    return (
<<<<<<< HEAD
        <main>
            <Hero />
        </main>
=======
        <>
            <Directory categories={categories} />
        </>
>>>>>>> ee4a3fd790f10781d2aacd65e9c92401a7845c81
    );
};

export default Home;
