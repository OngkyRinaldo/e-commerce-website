import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesHeader = () => {
    const [btnName, setBtnName] = useState('All');
    const handleBtnName = (e) => {
        setBtnName(e);
    };
    return (
        <div className='categories-header-container'>
            <div className='categories-header'>
                <Link to='/'>
                    <i className='fa-solid fa-angle-left'></i> Home
                </Link>
                <h3 className='categories-title'>{btnName} </h3>
            </div>
            <div className='categories-filter'>
                <Link to='all' onClick={() => handleBtnName('All')}>
                    <button>All</button>
                </Link>
                <Link to='furnitures'>
                    <button onClick={() => handleBtnName('Furnitures')}>
                        Furnitures
                    </button>
                </Link>

                <Link to='electronics'>
                    <button onClick={() => handleBtnName('Electronics')}>
                        Electronics
                    </button>
                </Link>
                <Link to='lamps'>
                    <button onClick={() => handleBtnName('Lamps')}>
                        Lamps
                    </button>
                </Link>
                <Link to='kitchen'>
                    <button onClick={() => handleBtnName('Kitchen')}>
                        Kitchen
                    </button>
                </Link>
                <Link to='chairs'>
                    <button onClick={() => handleBtnName('Chairs')}>
                        Chairs
                    </button>
                </Link>
                <Link to='skin-care'>
                    <button onClick={() => handleBtnName('Skin Care')}>
                        Skin Care
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoriesHeader;
