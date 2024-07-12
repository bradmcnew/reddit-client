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
    const getImageUrl = (post) => {
        return post.url_overridden_by_dest || post.thumbnail;
    }
    return (
        <div>
            {console.log(posts)}
            {posts.map(post => {
                const imgUrl = getImageUrl(post);
                console.log(`Rendering post with id: ${post.id}`);
                console.log(`Img Url: ${imgUrl}`);
                return (
                    <Post post={post} image={imgUrl} />
                );
            })}
        </div>
    );
}