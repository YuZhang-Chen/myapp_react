import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating-container">
            <h2>餐廳評價</h2>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    
                    return (
                        <label key={index}>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
                                onClick={() => setRating(ratingValue)}
                                style={{ display: 'none' }}

                            />
                            <FaStar 
                                className="star" 
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={50}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                    );
                })}
            </div>
            <p>您的評分: {rating} 星</p>
        </div>
    );
};

export default StarRating;
