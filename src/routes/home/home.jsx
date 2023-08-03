import './home.styles.scss';
import Hero from '../../component/hero/hero.component';
import HomeProducts from '../../component/homeProducts/homeProducts.component';

const Home = () => {
    return (
        <main>
            <Hero />
            <HomeProducts />
        </main>
    );
};

export default Home;
