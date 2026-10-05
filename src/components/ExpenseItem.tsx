import { Expense } from '@/storage/expenses';
import { colors } from '@/styles/global';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpenseItem(expense: Expense) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{expense.name}</Text>
        <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{expense.category}</Text>
        <Text style={styles.date}>
          {new Date(expense.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  date: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
