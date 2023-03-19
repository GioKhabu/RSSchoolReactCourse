import React from "react";
import ReactDOM from "react-dom";
import { ReactStrictMode, rootElement } from "./main";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("main.tsx", () => {
  it("renders without crashing", () => {
    ReactDOM.render(ReactStrictMode, rootElement);
    expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode, rootElement);
  });
});
