import HomeItem from './homeItem.component';

import './homeProducts.styles.scss';

const HomeProducts = () => {
    return (
        <div className='popular-container'>
            <h2 className='popular-h2'>Our Products</h2>
            <div className='container'>
                <div className='products-grid'>
                    <HomeItem />
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;
