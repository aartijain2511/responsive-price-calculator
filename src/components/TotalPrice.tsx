import { priceDictionary } from "../constants";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { FC } from "react";
import pageViewsState from "../state/atoms/pageViewsState";
import yearlyPriceState from "../state/atoms/yearlyPriceState";
import yearlyPriceCalculator from "../utilities/yearlyPriceCalculator";
import useCROPrice from "../hooks/useCROPrice";
import Loader from "./Loader";

const TotalPrice: FC = () => {
  const pageViews = useRecoilValue(pageViewsState);
  const isYearly = useRecoilValue(yearlyPriceState);
  const basePrice = priceDictionary[pageViews];
  const totalPrice = isYearly ? yearlyPriceCalculator(basePrice) : basePrice;
  const [convertedPrice, status] = useCROPrice(
    totalPrice,
    "crypto-com-chain",
    "usd",
  );

  const suffix = isYearly ? " / year" : " / month";

  return (
    <Container>
      <WrapperText>
        <PriceTextWrapper>
          <PriceText>${totalPrice}.00</PriceText>
          {suffix}
        </PriceTextWrapper>
        {status === "pending" ? (
          <Loader />
        ) : (
          <CROTextWrapper>
            {status === "success" ? (
              convertedPrice !== 0 && (
                <>
                  or ~{convertedPrice}CRO {suffix}
                </>
              )
            ) : (
              <>Error fetching data...</>
            )}
          </CROTextWrapper>
        )}
      </WrapperText>
    </Container>
  );
};

export default TotalPrice;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  align-items: center;
  grid-area: price;
`;

const PriceText = styled.span`
  font-weight: 800;
  color: black;
  font-size: 2rem;
  padding-right: 0.5rem;
`;

const CROTextWrapper = styled.span`
  font-size: 11.5px;
  text-align: right;
`;

const PriceTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const WrapperText = styled.div`
  display: flex;
  align-items: right;
  flex-direction: column;
  justify-content: flex-end;
`;
