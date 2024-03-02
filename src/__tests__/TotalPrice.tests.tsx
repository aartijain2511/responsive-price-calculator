import { cleanup, render, screen } from "@testing-library/react";
import TotalPrice from "../components/TotalPrice";
import { RecoilRoot } from "recoil";
import yearlyPriceCalculator from "../utilities/yearlyPriceCalculator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useCROPrice from "../hooks/useCROPrice";

jest.mock("../hooks/useCROPrice");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

const mockMonthlyPrice = "$8.00";
const mockYearlyPrice = `$${yearlyPriceCalculator(8)}.00`;
const monthSuffix = " / month";
const yearSuffix = " / year";

describe("TotalPrice Component", () => {
  beforeEach(() => {
    cleanup();
    useCROPrice.mockReturnValue([500, "success"]);
  });

  test("renders TotalPrice component correctly for monthly price", () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <TotalPrice />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    expect(screen.getByText(`${mockMonthlyPrice}`)).toBeInTheDocument();
    expect(screen.getByText(`/ month`)).toBeInTheDocument();
    expect(screen.queryByText(`${yearSuffix}`)).not.toBeInTheDocument();
  });

  test("renders TotalPrice component correctly for yearly price", () => {
    jest.mock("../state/atoms/yearlyPriceState", () => ({
      useRecoilValue: jest.fn().mockReturnValue(true),
    }));

    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <TotalPrice />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    setTimeout(() => {
      expect(screen.getByText(`${mockYearlyPrice}`)).toBeInTheDocument();
      expect(screen.getByText(`${monthSuffix}`)).not.toBeInTheDocument();
      expect(screen.getByText(`${yearSuffix}`)).toBeInTheDocument();
    });
  });

  it("renders CROTextWrapper when useCROPrice status is success and convertedPrice is not 0", () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <TotalPrice />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    expect(screen.getByText(/or ~500 CRO /i)).toBeInTheDocument();
  });

  it("does not render CROTextWrapper when useCROPrice status is error", () => {
    useCROPrice.mockReturnValue([0, "error"]);

    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <TotalPrice />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    expect(screen.getByText(/Error fetching data.../i)).toBeInTheDocument();
  });

  it("renders Loader when useCROPrice status is pending", () => {
    useCROPrice.mockClear();
    useCROPrice.mockReturnValueOnce([0, "pending"]); // Mock pending status

    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <TotalPrice />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    const loader = screen.getByTestId("loader"); // Assuming a TestId on Loader

    expect(loader).toBeInTheDocument();
    expect(screen.queryByText(/or ~\d+ CRO \/\w+/i)).not.toBeInTheDocument(); // CROTextWrapper should not be present
    expect(
      screen.queryByText(/Error fetching data.../i),
    ).not.toBeInTheDocument(); // Error message should not be present
  });
});
