import { QueryStatus, useQuery } from "@tanstack/react-query";

const useCROPrice = (price: number, crypto: string, currency: string) => {
  let convertedPrice = 0;

  const fetchConvertedPrice = async (): Promise<number> => {
    // Get the current price of 1 CRO to USD
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`,
    );

    if (!res.ok) {
      throw new Error("Unable to get conversion!");
    }

    let result = await res.json();
    return result["crypto-com-chain"].usd;
  };

  const results = useQuery({
    queryKey: ["convertedPrice"],
    queryFn: () => fetchConvertedPrice(),
  });

  // calculate total from unit price
  if (results?.data) {
    convertedPrice = Math.round(price / results.data);
  }

  return [convertedPrice ?? 0, results.status] as [number, QueryStatus];
};

export default useCROPrice;
