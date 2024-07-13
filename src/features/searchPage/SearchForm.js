import React from "react";
import styles from './SearchForm.module.css';

export function SearchForm ({ searchQuery, handleChange }) {
    return (
        <form>
            <label htmlFor="search">Search for a subreddit: <span className={styles.navy}>r/</span></label>
            <input type="search" id="search" name="seach" value={searchQuery} onChange={handleChange}></input>
        </form>
    )
}