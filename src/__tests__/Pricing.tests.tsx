import { render, screen } from "@testing-library/react";
import Pricing from "../components/Pricing";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

const mockMonthlyPrice = "$8.00";

describe("Pricing Component", () => {
  test("renders Pricing component correctly", () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Pricing />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    const pageViews = screen.getByText("10K PAGEVIEWS");
    expect(pageViews).toBeInTheDocument();

    const monthlyPrice = screen.getByText(`${mockMonthlyPrice}`);
    expect(monthlyPrice).toBeInTheDocument();

    const monthlyPriceDuration = screen.getByText("/ month");
    expect(monthlyPriceDuration).toBeInTheDocument();

    const sliderComponent = screen.getByRole("slider");
    expect(sliderComponent).toBeInTheDocument();

    const monthlyBillingText = screen.getByText("Monthly Billing");
    expect(monthlyBillingText).toBeInTheDocument();

    const startTrialComponent = screen.getByRole("button", {
      name: /start my trial/i,
    });
    expect(startTrialComponent).toBeInTheDocument();
  });
});
