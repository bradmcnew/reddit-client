import React from "react";

export default function Post({ post, video, image, handleImgError }) {
    return (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.selftext}</p>
            {video ? (
                <video src={video} controls>
                    Video not supported.
                </video>
            ) : (
                <p>No video Available</p>
            )}
            {image ? (
                <img src={image} alt={post.id + 'image'} onError={handleImgError} />
            ) : (
                <p>No image Available</p>
            )}
        </div>
    );
}