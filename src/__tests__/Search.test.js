import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";

const validProps = {
    search: "some search text",
    setSearchResults: jest.fn(),
    onSubmit: jest.fn(),
}

describe("Search", () => {
    const { asFragment } = render(<Search
        search=""
        setSearchResults={validProps.setSearchResults}
        onSubmit={validProps.onSubmit} />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot()
    });

    it("renders the search button correctly", () => {
        render(
            <Search
                search=""
                setSearchResults={validProps.setSearchResults}
                onSubmit={validProps.onSubmit}
            />
        );
        const button = screen.getAllByRole("button");

        expect(button).toHaveLength(1);

        const submitButton = screen.getByText(/submit/i)
        expect(submitButton).toBeInstanceOf(HTMLButtonElement)
    });

    it("search button works", () => {
        render(
            <Search
                search=""
                setSearchResults={validProps.setSearchResults}
                onSubmit={validProps.onSubmit}
            />
        );
        const submitButton = screen.getByText(/submit/i)
        fireEvent.click(submitButton);
        expect(validProps.onSubmit).toHaveBeenCalledTimes(1);
    })
})