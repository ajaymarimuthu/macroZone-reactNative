import StatsGrid from '@/components/StatsGrid';
import RecentExpenses from '@/components/RecentExpenses';
import { getExpenses, Expense } from '@/storage/expenses';
import { globalStyles } from '@/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
    console.log('Loaded expenses:', data);
  };

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>ExpenseTracker</Text>

      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>ExpenseTracker</Text>
      </View>
      
      <StatsGrid expenses={expenses} />
      
      <RecentExpenses expenses={expenses} onDelete={loadExpenses} />
    </ScrollView>
  );
}