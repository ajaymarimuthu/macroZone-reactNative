import { Expense, deleteExpense } from '@/storage/expenses';
import { colors } from '@/styles/global';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

type RecentExpensesProps = {
  expenses: Expense[];
  onDelete: () => void;
};

export default function RecentExpenses({ expenses, onDelete }: RecentExpensesProps) {
  const recent = expenses.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Expenses</Text>
      {recent.length === 0 ? (
        <Text style={styles.empty}>No expenses logged yet.</Text>
      ) : (
        recent.map((expense) => (
          <View key={expense.id} style={styles.itemContainer}>
            <ExpenseItem {...expense} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={async () => {
                await deleteExpense(expense.id);
                onDelete();
              }}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  itemContainer: {
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 12,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
