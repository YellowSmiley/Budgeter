import { Transaction } from "../../protos/transaction";
import { BankAmount } from "../types/dashboard";

export const bankAmountsFromTransactions = (transactions: Transaction[]) => {
  const bankAmounts: BankAmount[] = [];
  transactions.forEach((transaction) => {
    const bankAmount = bankAmounts.find(
      (bankAmount) => bankAmount.bank === transaction.bank
    );
    if (bankAmount) {
      bankAmount.amount += transaction.amount;
    } else {
      bankAmounts.push({
        bank: transaction.bank,
        amount: transaction.amount,
      });
    }
  });
  return bankAmounts;
};
