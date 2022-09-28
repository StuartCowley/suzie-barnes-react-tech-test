import { render } from '@testing-library/react';
import App from '../components/App'
import React from "react";

describe("App", () => {
    const { asFragment } = render(<App />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});