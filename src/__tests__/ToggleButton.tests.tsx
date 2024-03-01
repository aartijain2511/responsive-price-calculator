import { render, fireEvent, screen } from "@testing-library/react";
import ToggleButton from "../components/ToggleButton";
import { RecoilRoot, snapshot_UNSTABLE } from "recoil";
import yearlyPriceState from "../state/atoms/yearlyPriceState";

describe("ToggleButton Component", () => {
  test("renders toggle button correctly", () => {
    render(
      <RecoilRoot>
        <ToggleButton />
      </RecoilRoot>,
    );
    const toggleButton = screen.getByRole("checkbox");
    expect(toggleButton).toBeInTheDocument();
  });

  test("toggle button toggles state and sets yearlyPriceState correctly", () => {
    render(
      <RecoilRoot>
        <ToggleButton />
      </RecoilRoot>,
    );
    const toggleButton = screen.getByRole("checkbox") as HTMLInputElement;

    expect(toggleButton.checked).toBe(false);
    const initialSnapshot = snapshot_UNSTABLE();
    const initialYearlyPriceState =
      initialSnapshot.getLoadable(yearlyPriceState).contents;
    expect(initialYearlyPriceState).toBe(false);

    fireEvent.click(toggleButton);

    expect(toggleButton.checked).toBe(true);
    setTimeout(() => {
      const updatedSnapshot = snapshot_UNSTABLE();
      const updatedYearlyPriceState =
        updatedSnapshot.getLoadable(yearlyPriceState).contents;
      expect(updatedYearlyPriceState).toBe(true);
    });
  });
});
