import { createContext } from "react";

export const initialIncomeContext = {
  income: {
    income1: "",
    income2: "",
    income3: "",
  },
};

const IncomeContext = createContext();

export default IncomeContext;
