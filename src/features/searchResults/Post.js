import React, { useState } from "react";
import styles from './Post.module.css';

export default function Post({ post, image }) {
    const [isImageSupported, setIsImageSupported] = useState(true);
    const handleImageError = () => {
        setIsImageSupported(false);
    };
    const hasCrosspost = post.crosspost_parent_list;
    const crosspostSubreddit = hasCrosspost && post.crosspost_parent_list[0].subreddit;
    const crosspostSelftext = hasCrosspost && post.crosspost_parent_list[0].selftext;
    const crosspostTitle = hasCrosspost && post.crosspost_parent_list[0].title;
    console.log("crosspost: " + crosspostTitle);

    return (
        <div>
            {(image && isImageSupported) && (
                <div className={styles.post} key={post.id}>
                    <h1 className={styles.title}>{post.title}</h1>
                    {hasCrosspost ? (
                        <div className={styles.crosspost}> 
                            <p className={styles.subreddit}>r/{crosspostSubreddit}</p>
                            <h2 className={styles.crosspostTitle}>{crosspostTitle}</h2>
                            <p>{crosspostSelftext}</p>
                            <img className={styles.postImage} src={image} alt={post.id + 'image'} onError={handleImageError} loading="lazy" />
                        </div>
                    ) :
                    <img className={styles.postImage} src={image} alt={post.id + 'image'} onError={handleImageError} loading="lazy" />
                    }
                    {post.selftext && (<p className={styles.body}>{post.selftext}</p>)}
                </div>
            )}
        </div>
    );
}