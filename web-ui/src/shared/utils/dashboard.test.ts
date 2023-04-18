import { Transaction } from "../../protos/transaction";
import {
  bankAmountsFromTransactions,
  totalExpenditure,
  totalIncome,
  discretionaryIncomeByPerson,
} from "./dashboard";

describe("bankAmountsFromTransactions", () => {
  it("should return an empty array if no transactions are passed", () => {
    const transactions: Transaction[] = [];
    const result = bankAmountsFromTransactions(transactions);
    expect(result).toEqual([]);
  });

  it("should return an array of bank amounts", () => {
    const transactions: Transaction[] = [
      {
        id: "1",
        bank: "bank1",
        amount: 100,
        name: "name1",
        personId: "person1",
        date: "2021-01-01",
      },
      {
        id: "2",
        bank: "bank1",
        amount: 200,
        name: "name2",
        personId: "person2",
        date: "2021-01-01",
      },
      {
        id: "3",
        bank: "bank2",
        amount: 300,
        name: "name3",
        personId: "person3",
        date: "2021-01-01",
      },
    ];
    const result = bankAmountsFromTransactions(transactions);
    expect(result).toEqual([
      {
        bank: "bank1",
        amount: 300,
      },
      {
        bank: "bank2",
        amount: 300,
      },
    ]);
  });
});

describe("totalExpenditure", () => {
  it("should return 0 if no transactions are passed", () => {
    const transactions: Transaction[] = [];
    const result = totalExpenditure(transactions);
    expect(result).toEqual(0);
  });

  it("should return the total expenditure", () => {
    const transactions: Transaction[] = [
      {
        id: "1",
        bank: "bank1",
        amount: 100,
        name: "name1",
        personId: "person1",
        date: "2021-01-01",
      },
      {
        id: "2",
        bank: "bank1",
        amount: -200,
        name: "name2",
        personId: "person2",
        date: "2021-01-01",
      },
      {
        id: "3",
        bank: "bank2",
        amount: -300,
        name: "name3",
        personId: "person3",
        date: "2021-01-01",
      },
    ];
    const result = totalExpenditure(transactions);
    expect(result).toEqual(-500);
  });
});

describe("totalIncome", () => {
  it("should return 0 if no transactions are passed", () => {
    const transactions: Transaction[] = [];
    const result = totalIncome(transactions);
    expect(result).toEqual(0);
  });

  it("should return the total income", () => {
    const transactions: Transaction[] = [
      {
        id: "1",
        bank: "bank1",
        amount: 100,
        name: "name1",
        personId: "person1",
        date: "2021-01-01",
      },
      {
        id: "2",
        bank: "bank1",
        amount: -200,
        name: "name2",
        personId: "person2",
        date: "2021-01-01",
      },
      {
        id: "3",
        bank: "bank2",
        amount: -300,
        name: "name3",
        personId: "person3",
        date: "2021-01-01",
      },
    ];
    const result = totalIncome(transactions);
    expect(result).toEqual(100);
  });
});

describe("discretionaryIncomeByPerson", () => {
  it("should return an empty array if no transactions are passed", () => {
    const transactions: Transaction[] = [];
    const result = discretionaryIncomeByPerson(transactions);
    expect(result).toEqual([]);
  });

  it("should return an array of person amounts", () => {
    const transactions: Transaction[] = [
      {
        id: "1",
        bank: "bank1",
        amount: 100,
        name: "name1",
        personId: "person1",
        date: "2021-01-01",
      },
      {
        id: "2",
        bank: "bank1",
        amount: 300,
        name: "name2",
        personId: "person2",
        date: "2021-01-01",
      },
      {
        id: "3",
        bank: "bank2",
        amount: -200,
        name: "name3",
        personId: "person2",
        date: "2021-01-01",
      },
    ];
    const result = discretionaryIncomeByPerson(transactions);
    expect(result).toEqual([
      {
        personId: "person1",
        amount: 100,
      },
      {
        personId: "person2",
        amount: 100,
      },
    ]);
  });
});
