import './home.styles.scss';
import Hero from '../../component/hero/hero.component';
import HomeProducts from '../../component/homeProducts/homeProducts.component';
import Banner from '../../component/banner/banner.component';

const Home = () => {
    return (
        <main>
            <Hero />
            <HomeProducts />
            <Banner />
        </main>
    );
};

export default Home;
