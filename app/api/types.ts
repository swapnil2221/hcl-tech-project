export type Transaction = {
  type: "buy" | "sell";
  security: string;
  transactionRef: string;
  date: string;
  quantity: number;
  totalAmount: number;
};

export type Security = {
  name: string;
  currentTickNumber: number;
  previousTickNumber: number;
};

export type Profile = {
  email: string;
  password: string;
  balance: number;
};
