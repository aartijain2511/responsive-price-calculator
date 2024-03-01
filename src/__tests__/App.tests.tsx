import { render, screen } from "@testing-library/react";
import App from "../App";
import { RecoilRoot } from "recoil";

describe("App Component", () => {
  test("renders App component correctly", () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>,
    );

    const titleElement = screen.getByText(/simple, traffic-based pricing/i);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      /sign-up for our 30-day trial. no credit card required./i,
    );
    expect(descriptionElement).toBeInTheDocument();

    const sliderComponent = screen.getByRole("slider");
    expect(sliderComponent).toBeInTheDocument();
  });
});
