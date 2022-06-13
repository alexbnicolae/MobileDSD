import { useCallback } from "react";
import { FlatList, Text } from "react-native";
import ExpenseItemComponent from "../expense-item/expense-item.component";
import { ExpensesType } from "../expenses-summary/expenses-summary.component";

type ExpensesListComponentPropsType = {
    expenses: ExpensesType[]
}

const ExpensesListComponent = ({
    expenses
}: ExpensesListComponentPropsType) => {

    const renderExpenseItem = useCallback(
        (itemData: {item: ExpensesType}) => {
            return <ExpenseItemComponent {...itemData.item} />
        },
        []
    )

    return (
        <>
            <FlatList 
                data={expenses} 
                renderItem={renderExpenseItem} 
                keyExtractor={(item) => item.id} 
            />
        </>
    )
}

export default ExpensesListComponent;