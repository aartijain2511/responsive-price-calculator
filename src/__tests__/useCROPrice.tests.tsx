import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useCROPrice from "../hooks/useCROPrice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

describe("Test useCROPrice hook", () => {
  test("returns 0 when no price", async () => {
    const { result } = renderHook(() => useCROPrice(0), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    const [convertedPrice, status] = result.current;

    expect(convertedPrice).toBe(0);
    expect(status).toBe("pending");
  });

  it("fetches the converted price correctly", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ "crypto-com-chain": { usd: 0.2 } }),
    } as Response);

    const { result } = renderHook(() => useCROPrice(100), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    expect(result.current[1]).toBe("pending");

    await waitFor(() => expect(result.current[0]).toBe(500));
    await waitFor(() => expect(result.current[1]).toBe("success"));

    jest.restoreAllMocks();
  });

  it("handles API errors correctly", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("Network error"));

    const { result } = renderHook(() => useCROPrice(300), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    await waitFor(() => expect(result.current[0]).toBe(0));
    await waitFor(() => expect(result.current[1]).toBe("error"));

    jest.restoreAllMocks();
  });
});
