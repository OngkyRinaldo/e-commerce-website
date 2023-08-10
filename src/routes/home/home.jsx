import './home.styles.scss';
import Hero from '../../component/hero/hero.component';
import HomeProducts from '../../component/homeProducts/homeProducts.component';
import Banner from '../../component/banner/banner.component';
import Trending from '../../component/trending/trending.component';
import SecondBanner from '../../component/banner/secondbanner.component';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Furniture Ecommerce ';
    }, []);
    return (
        <main>
            <Hero />
            <HomeProducts />
            <Banner />
            <Trending />
            <SecondBanner />
        </main>
    );
};

export default Home;
