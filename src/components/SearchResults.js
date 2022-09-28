import React from "react";
import "../styles/searchresults.css";
import PropTypes from "prop-types"

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>
    } else {
        return (
            <div className="search-results">
                <p>Search Results:</p>
                {
                    results.map((image) => (
                        <img
                            className="search-results__images"
                            src={image}
                            alt="search-results__image"
                            data-testid="search-results-test"
                        />
                    ))
                }
            </div>
        )
    }
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
}


export default SearchResults;
