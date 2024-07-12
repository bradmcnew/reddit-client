import React, { useState } from "react";

export default function Post({ post, image }) {
    const [isImageSupported, setIsImageSupported] = useState(true);
    const handleImageError = () => {
        setIsImageSupported(false);
    };
    const hasCrosspost = post.crosspost_parent_list;
    const crosspostTitle = hasCrosspost && post.crosspost_parent_list[0].title;
    console.log("crosspost: " + crosspostTitle);

    return (
        <div key={post.id}>
            {(image && isImageSupported) && (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.selftext}</p>
                    <h2>{crosspostTitle}</h2>
                    <img src={image} alt={post.id + 'image'} onError={handleImageError} />
                </div>
            )}
        </div>
    );
}