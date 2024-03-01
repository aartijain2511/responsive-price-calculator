import { render, screen } from "@testing-library/react";
import StartTrial from "../components/StartTrial";

describe("StartTrial Component", () => {
  test("renders StartTrial component correctly", () => {
    render(<StartTrial />);

    const items = [
      "Unlimited websites",
      "100% data ownership",
      "Email reports",
    ];
    items.forEach((itemText) => {
      const itemElement = screen.getByText(itemText);
      expect(itemElement).toBeInTheDocument();
    });

    const startTrialButton = screen.getByText("Start my trial");
    expect(startTrialButton).toBeInTheDocument();
    expect(startTrialButton.tagName).toBe("BUTTON");
  });
});
