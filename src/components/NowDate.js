import React, { useState, useEffect } from 'react';

const NowDate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='now-date'>
            {currentTime.toLocaleTimeString()}   
        </div>
    );
};

export default NowDate;