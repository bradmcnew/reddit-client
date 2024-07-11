import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { SearchResults } from "../searchResults/SearchResults";
import { getSubredditPosts } from "../../api/redditApi";

export function SearchPage () {
    const [searchQuery, setSearchQuery] = useState('MadeMeSmile');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div>
            <SearchForm 
                searchQuery={searchQuery}
                handleChange={handleChange}
            />
            <SearchResults subreddit={searchQuery} />
        </div>
    )
}