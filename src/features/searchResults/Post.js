import React, { useState } from "react";

export default function Post({ post, image }) {
    const [isImageSupported, setIsImageSupported] = useState(true);
    const handleImageError = () => {
        setIsImageSupported(false);
    };

    return (
        <div key={post.id}>
            {(image && isImageSupported) && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.selftext}</p>
                    <img src={image} alt={post.id + 'image'} onError={handleImageError} />
                </div>
            )}
        </div>
    );
}