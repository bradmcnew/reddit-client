export const rootApi = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${rootApi}/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}