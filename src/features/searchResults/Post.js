import React, { useState } from "react";

export default function Post({ post, video, image }) {
    const [isVideoSupported, setIsVideoSupported] = useState(true);
    const [isImageSupported, setIsImageSupported] = useState(true);
    const handleVideoError = () => {
        setIsVideoSupported(false);
    };
    const handleImageError = () => {
        setIsImageSupported(false);
    };

    return (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.selftext}</p>
            {(video && isVideoSupported) && (
                <video src={video} onError={handleVideoError} controls>
                    Video not supported.
                </video>
            )}
            {(image && isImageSupported) && (
                <img src={image} alt={post.id + 'image'} onError={handleImageError} />
            )}
        </div>
    );
}