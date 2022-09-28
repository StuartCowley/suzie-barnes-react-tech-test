import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
    const validProps = {
        results: [
            {
                key: [123],
                className: "search-results__images",
                src: "StubImage1",
                alt: "search-results__image",
            },

            {
                key: [124],
                className: "search-results__images",
                src: "StubImage2",
                alt: "search-results__image",
            },

            {
                key: [125],
                className: "search-results__images",
                src: "StubImage3",
                alt: "search-results__image",
            }
        ]
    };
    const { asFragment } = render(
        <SearchResults
            results={validProps.results}
        />);

    render(
        <SearchResults
            results={validProps.results}
        />
    );
    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders the correct number of images", () => {
        render(
            <SearchResults
                results={validProps.results}
            />
        );
        expect(screen.getAllByTestId("search-results-test")).toHaveLength(3)
    })

    it("loads the heading Image Results", () => {
        render(
            <SearchResults
                results={validProps.results}
            />
        );
        expect(screen.getByText("Image Results:")).toBeInstanceOf(HTMLHeadingElement)
    })

    it("loads No results if no results found", () => {
        render(
            <SearchResults
                results={[]}
            />
        );
        expect(screen.getByText("No results")).toBeInstanceOf(HTMLParagraphElement);
    })
})