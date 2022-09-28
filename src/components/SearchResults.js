import React from "react";
import "../styles/searchresults.css";
import PropTypes from "prop-types"

const SearchResults = ({ results }) => {

    if (!results.length) {
        return <p>No results</p>
    } else {
        return (
            <div className="search-results">
                {
                    results.map((image, index) => (
                        <img
                            key={index}
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
SearchResults.defaultProps = {
    results: ""
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
}


export default SearchResults;
