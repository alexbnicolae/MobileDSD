import { useMemo } from "react";
import { Text, View } from "react-native";
import { stylesExpensesSummaryComponent } from "./expenses-summary.component.styled";


export type ExpensesType = {
    id: string,
    description: string,
    amount: number | string,
    date: Date | string
}

type ExpensesSummaryComponentPropsType = {
    expenses: ExpensesType[],
    periodName: string
}

const ExpensesSummaryComponent = ({
    expenses, 
    periodName
}: ExpensesSummaryComponentPropsType) => {

    const expenesesSum: number = useMemo(
       () => expenses.reduce(
            (sum, expense) => sum + (expense.amount as number),
            0 
        ),
        [expenses]
    )

    return (
        <>
            <View style={stylesExpensesSummaryComponent.container}>
                <Text style={stylesExpensesSummaryComponent.period}>{periodName}</Text>
                <Text style={stylesExpensesSummaryComponent.sum}>${expenesesSum.toFixed(2)}</Text>
            </View>
        </>
    )
}

export default ExpensesSummaryComponent;

