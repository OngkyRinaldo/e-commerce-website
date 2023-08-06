import { useParams } from 'react-router-dom';
import { Products } from '../../data/ProductsData';
import { useContext, useState } from 'react';
import './detailProduct.styles.scss';
import Trending from '../trending/trending.component';
import { CartContext } from '../../context/cartContext';

const DetailProduct = () => {
    const { title } = useParams();

    const product = Products.find((user) => user.title === title);

    const [image, setImage] = useState(product.img);

    const changeImage = (e) => {
        setImage(e.target.src);
    };

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <>
            {product ? (
                <div className='container-productDetail'>
                    <div className='product-container'>
                        <h3 className='product-big-name'>{product.title}</h3>
                        <div className='product-left'>
                            <div className='big-img'>
                                <img src={image} alt='product' />
                            </div>
                            <div className='small-imgs'>
                                <img
                                    onMouseOver={changeImage}
                                    src={product.img}
                                    alt='product'
                                />
                                <img
                                    onMouseOver={changeImage}
                                    src={product.otherImgs[0]}
                                    alt='product'
                                />
                                <img
                                    onMouseOver={changeImage}
                                    src={product.otherImgs[1]}
                                    alt='product'
                                />
                            </div>
                        </div>
                        <div className='product-right'>
                            <p className='product-spec'>{product.specs}</p>
                            <p className='product-price'> $ {product.price} </p>
                            <div className='atc-buy'>
                                <button
                                    className='atc-btn'
                                    onClick={addProductToCart}
                                >
                                    add to cart
                                </button>
                                <button className='buy-btn'>buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className='specifications'>
                        <div className='spec'>
                            <p className='spec-title'>Texture:</p>
                            <p className='title-desc'>{product.texture}</p>
                        </div>
                        <div className='spec'>
                            <p className='spec-title'>Weight:</p>
                            <p className='title-desc'>{product.weight}</p>
                        </div>
                        <div className='spec'>
                            <p className='spec-title'>Size:</p>
                            <p className='title-desc'>{product.size}</p>
                        </div>
                    </div>

                    <Trending />
                </div>
            ) : (
                <h3 className='product-big-name'>Product not found</h3>
            )}
        </>
    );
};

export default DetailProduct;
