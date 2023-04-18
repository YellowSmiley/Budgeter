import { Transaction } from "../../protos/transaction";
import { BankAmount, PersonAmount } from "../types/dashboard";

/**
 * @param transactions An array of transactions.
 * @returns Returns an array of bank amounts from an array of transactions.
 */
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

/**
 * @param transactions An array of transactions.
 * @returns Returns the total expenditure from an array of transactions.
 */
export const totalExpenditure = (transactions: Transaction[]) =>
  transactions.reduce(
    (total, transaction) =>
      transaction.amount < 0 ? total + transaction.amount : total,
    0
  );

/**
 *
 * @param transactions An array of transactions.
 * @returns Returns the total income from an array of transactions.
 */
export const totalIncome = (transactions: Transaction[]) =>
  transactions.reduce(
    (total, transaction) =>
      transaction.amount > 0 ? total + transaction.amount : total,
    0
  );

/**
 * @param transactions An array of transactions.
 * @returns Returns an array of person amounts from an array of transactions.
 */
export const discretionaryIncomeByPerson = (transactions: Transaction[]) => {
  const personAmounts: PersonAmount[] = [];
  transactions.forEach((transaction) => {
    const personAmount = personAmounts.find(
      (personAmount) => personAmount.personId === transaction.personId
    );
    if (personAmount) {
      personAmount.amount += transaction.amount;
    } else {
      personAmounts.push({
        personId: transaction.personId,
        amount: transaction.amount,
      });
    }
  });
  return personAmounts;
};
