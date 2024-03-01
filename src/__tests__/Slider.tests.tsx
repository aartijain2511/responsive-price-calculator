import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "../components/Slider";
import { RecoilRoot, RecoilValueReadOnly, snapshot_UNSTABLE } from "recoil";
import pageViewsState from "../state/atoms/pageViewsState";

describe("Slider Component", () => {
  test("renders slider component correctly", () => {
    render(
      <RecoilRoot>
        <Slider />
      </RecoilRoot>,
    );
    const sliderElement = screen.getByRole("slider") as HTMLInputElement;
    expect(sliderElement).toBeInTheDocument();
  });

  it("sets initial value to 0 and pageViewsState to 10k", () => {
    render(
      <RecoilRoot>
        <Slider />
      </RecoilRoot>,
    );
    const slider = screen.getByRole("slider") as HTMLInputElement;
    expect(slider).toHaveAttribute("value", "0");

    const initialSnapshot = snapshot_UNSTABLE();
    const initialPageViewsStateValue: string = initialSnapshot.getLoadable(
      pageViewsState as RecoilValueReadOnly<string>,
    ).contents as string;
    expect(initialPageViewsStateValue).toBe("10K");
  });

  test("slider value and pageViewsState changes on user interaction", () => {
    render(
      <RecoilRoot>
        <Slider />
      </RecoilRoot>,
    );
    const sliderElement = screen.getByRole("slider") as HTMLInputElement;
    expect(sliderElement.value).toBe("0");

    fireEvent.change(sliderElement, { target: { value: "3" } });
    expect(sliderElement.value).toBe("3");

    setTimeout(() => {
      const currentSnapshot = snapshot_UNSTABLE();
      const pageViewsStateValue: string = currentSnapshot.getLoadable(
        pageViewsState as RecoilValueReadOnly<string>,
      ).contents as string;
      expect(pageViewsStateValue).toBe("500K");
    });
  });
});
