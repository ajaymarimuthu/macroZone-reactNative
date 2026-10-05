import { Expense } from '@/storage/expenses';
import { colors } from '@/styles/global';
import { StyleSheet, Text, View } from 'react-native';

export default function StatsGrid({ expenses }: { expenses: Expense[] }) {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const highestExpense = expenses.reduce((max, exp) => Math.max(max, exp.amount), 0);
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Total Spent</Text>
        <Text style={styles.value}>${totalSpent.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Highest Expense</Text>
        <Text style={styles.value}>${highestExpense.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
  value: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
