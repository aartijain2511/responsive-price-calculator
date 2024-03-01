import { QueryStatus, useQuery } from "@tanstack/react-query";

const useCROPrice = (price: number, crypto: string, currency: string) => {
  const fetchConvertedPrice = async (): Promise<number> => {
    // Get the current price of 1 CRO to USD
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`,
    );

    if (!res.ok) {
      throw new Error(`Unable to get conversion!`);
    }

    let result = await res.json();
    let unitPrice = result["crypto-com-chain"].usd;

    // calculate total from unit price
    let convertedPrice = Math.round(price / unitPrice);

    return convertedPrice;
  };

  const results = useQuery({
    queryKey: ["convertedPrice", price],
    queryFn: () => fetchConvertedPrice(),
  });

  return [results?.data ?? 0, results.status] as [number, QueryStatus];
};

export default useCROPrice;
