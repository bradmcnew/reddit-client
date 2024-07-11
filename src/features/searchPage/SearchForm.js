import React, { useState } from "react";

export function SearchForm ({ searchQuery, handleChange }) {
    return (
        <form>
            <label htmlFor="search">Search for a subreddit</label>
            <input type="search" id="search" name="seach" value={searchQuery} onChange={handleChange}></input>
        </form>
    )
}