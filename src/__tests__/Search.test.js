import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

// const validProps = {
//     searchText: "search text",
//     setSearchText: jest.fn(),
//     onSubmit: jest.fn(),
// }
describe("Search", () => {
    const { asFragment } = render(<Search />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot()
    });
})