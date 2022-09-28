import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
    const validProps = {
        results: [
            { url: "url1" },
            { url: "url2" },
            { url: "url3" }
        ]
    };
    const { asFragment } = render(
        <SearchResults
            results={validProps.results}
        />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders the correct number of images", () => {
        const { getAllByTestId } = render(
            <SearchResults
                results={validProps.results}
            />
        );
        expect(screen.getAllByTestId("search-results-test")).toHaveLength(3)
    })

})