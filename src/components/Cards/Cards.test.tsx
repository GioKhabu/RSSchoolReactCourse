import { render, screen } from "@testing-library/react";
import Cards from "./Cards";
test("renders searchbar and cards", () => {
  render(<Cards />);
});
