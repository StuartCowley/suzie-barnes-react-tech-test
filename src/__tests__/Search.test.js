import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

const validProps = {
    search: "some search text",
    setSearchResults: jest.fn(),
    onSubmit: jest.fn(),
}

describe("Search", () => {
    const { asFragment } = render(<Search />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot()
    });

    it("renders the search button correctly", () => {
        const { getByText } = render(
            <Search
                search=""
                setSearchResults={validProps.setSearchResults}
                onSubmit={validProps.onSubmit}
            />
        );
        const button = screen.getAllByRole("button");

        expect(button).toHaveLength(1);

        // expect(screen.getByText(/submit/i).toBeInstanceOf(HTMLButtonElement))
    });
})