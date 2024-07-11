import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts, selectPostsStatus, selectPostsError } from "./searchResultsSlice";
import Post from "./Post";

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
    }, [subreddit, dispatch]);
    if (status ==='loading') {
        return <div>Loading...</div>
    }
    if (status === 'failed') {
        return <div>Error: {error}</div>
    }
    return (
        <div>
            {console.log(posts)}
            {posts.map(post => {
                const videoUrl = post.secure_media?.reddit_video?.fallback_url;
                const imgUrl = post.thumbnail || post.url_overridden_by_dest;
                console.log(`Rendering post with id: ${post.id}`);
                console.log(`Video Url: ${videoUrl}`);
                console.log(`Img Url: ${imgUrl}`);
                //<Post key={post.id} post={post}/>
                return (
                    <Post post={post} video={videoUrl} image={imgUrl} />
                );
            })}
        </div>
    );
}