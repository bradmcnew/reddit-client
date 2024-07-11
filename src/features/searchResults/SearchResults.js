import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts, selectPostsStatus, selectPostsError } from "./searchResultsSlice";

export function SearchResults ({subreddit}) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const status = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);
    
    /* iterate through posts array created by postsSlice and pass props to <Post /> */
    useEffect(() => {
        if (subreddit) {
            dispatch(fetchPosts(subreddit));
        }
    }, [subreddit]);
    if (status ==='loading') {
        return <div>Loading...</div>
    }
    if (status === 'failed') {
        return <div>Error: {error}</div>
    }
    const handleImgError = (event) => {
        event.target.alt = 'Image not supported';
    }
    return (
        <div>
            {console.log(posts)}
            {posts.map(post => {
                const videoUrl = post.secure_media?.reddit_video?.fallback_url;
                const imgUrl = post.thumbnail;
                console.log(`Rendering post with id: ${post.id}`);
                console.log(`Video Url: ${videoUrl}`);
                console.log(`Img Url: ${imgUrl}`);
                //<Post key={post.id} post={post}/>
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.selftext}</p>
                        {videoUrl ? (
                            <video src={videoUrl} controls>
                                Video not supported.
                            </video>
                        ) : (
                            <p>No video Available</p>
                        )}
                        {imgUrl ? (
                            <img src={imgUrl} alt={post.id + 'image'} onError={handleImgError}/>
                        ) : (
                            <p>No image Available</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}