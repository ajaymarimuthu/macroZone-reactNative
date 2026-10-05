import ExpenseItem from '@/components/ExpenseItem';
import { getExpenses, Expense } from '@/storage/expenses';
import { globalStyles } from '@/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, { marginBottom: 16 }]}>All Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem {...item} />}
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
