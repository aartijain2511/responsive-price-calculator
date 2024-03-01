import { render, screen } from "@testing-library/react";
import PricePlan from "../components/PricePlan";
import { RecoilRoot } from "recoil";

describe("PricePlan Component", () => {
  test("renders PricePlan component correctly", () => {
    render(
      <RecoilRoot>
        <PricePlan />
      </RecoilRoot>,
    );

    const monthlyBillingText = screen.getByText("Monthly Billing");
    expect(monthlyBillingText).toBeInTheDocument();

    const yearlyBillingText = screen.getByText("Yearly Billing");
    expect(yearlyBillingText).toBeInTheDocument();

    const discountText = screen.getByText("25% discount");
    expect(discountText).toBeInTheDocument();

    const toggleButton = screen.getByRole("checkbox");
    expect(toggleButton).toBeInTheDocument();
  });
});
