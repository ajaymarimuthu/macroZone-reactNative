import AsyncStorage from '@react-native-async-storage/async-storage';

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  createdAt: string;
};

const EXPENSES_KEY = 'expenses';

export const getExpenses = async (): Promise<Expense[]> => {
  const data = await AsyncStorage.getItem(EXPENSES_KEY);
  return data ? JSON.parse(data) : [];
};

export const addExpense = async (
  expense: Omit<Expense, 'id' | 'createdAt'>,
): Promise<Expense> => {
  const expenses = await getExpenses();
  const newExpense: Expense = {
    ...expense,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify([newExpense, ...expenses]));
  return newExpense;
};


export const deleteExpense = async (id: string): Promise<void> => {
  const expenses = await getExpenses();
  const filtered = expenses.filter((expense) => expense.id !== id);
  await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(filtered));
};

export const clearAllExpenses = async (): Promise<void> => {
  await AsyncStorage.removeItem(EXPENSES_KEY);
};
