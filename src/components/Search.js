import React, { useState } from "react";
import "../styles/search.css";
import PropTypes from "prop-types"
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="search-button"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
Search.defaultProps = {
    search: ""
}
Search.propTypes = {
    search: PropTypes.string.isRequired
}
export default Search;