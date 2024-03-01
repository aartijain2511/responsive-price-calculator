import { atom } from "recoil";

const yearlyPriceState = atom({
  key: "yearlyPriceState",
  default: false,
});

export default yearlyPriceState;
