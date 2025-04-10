import React from 'react';
import '../App.css';

const Blog = () => {
    const posts = [
        { id: 1, title: '今早晚涼、白天舒適「明起天氣更溫暖」 228連假天氣曝', content: '中央氣象署觀測，今清晨本島縣市平地最低溫出現在新北市石碇區的攝氏12.9度。氣象署表示，今天（27日）早晚天氣較涼，白天較為舒適，228連假天氣如何？氣象署指出，明天到周日（2月28到3月2日）天氣更為溫暖，各地大多為多雲到晴，下周一（3日）天氣持續溫暖甚至有點熱，下周二（4日）鋒面通過及東北季風增強，各地氣溫下降，天氣明顯轉涼。' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
        { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
    ];

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="blog-post">
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-content">{post.content}</p> 
                </div>
            ))}
        </div>
    );
};

export default Blog;