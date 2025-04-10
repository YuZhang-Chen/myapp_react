import { useState, useEffect } from 'react';
import products from '../data/products';
import { NumbersWithLimitByHTML } from './Number';

const ProductList = () => {
    const [cart, setCart] = useState({});
    useEffect(() => {
        const initialCart = products.reduce((acc, product) => {
            acc[product.id] = 0;
            return acc;
        }, {});
        setCart(initialCart);
    }, []);

    return (
        <div className="product-list">
            <h2>好市多賣場</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img 
                                src={product.image} 
                                alt={product.name}
                            />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">${product.price}</p>
                            <div className="product-quantity">
                                <NumbersWithLimitByHTML />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="cart-button">確認購物車</button>
        </div>
    );
}

export { ProductList };