import { atom } from "recoil";

const pageViewsState = atom({
  key: "pageViewsState",
  default: "10K",
});

export default pageViewsState;
