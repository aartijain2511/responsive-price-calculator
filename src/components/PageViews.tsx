import styled from "styled-components";
import { useRecoilValue } from "recoil";
import pageViewsState from "../state/atoms/pageViewsState";

const PageViews = () => {
  const pageViews = useRecoilValue<string>(pageViewsState);
  return <PageViewHeader>{pageViews} PAGEVIEWS</PageViewHeader>;
};

export default PageViews;

const PageViewHeader = styled.div`
  grid-area: pageview;
  padding-top: 24px;
`;
