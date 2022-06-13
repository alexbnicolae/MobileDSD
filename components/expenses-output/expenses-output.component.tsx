import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ExpensesListComponent from "../expenses-list/expenses-list.component";
import ExpensesSummaryComponent, { ExpensesType } from "../expenses-summary/expenses-summary.component";
import { stylesExpensesOutputComponent } from "./expenses-output.component.styled";

type ExpensesOutputComponentPropsType = {
    expenses: ExpensesType[],
    expensesPeriod: string,
    fallbackText?:string
}

const ExpensesOutputComponent =  ({
    expenses,
    expensesPeriod,
    fallbackText
}: ExpensesOutputComponentPropsType) => {
    const [content, setContent] = useState(<Text style={stylesExpensesOutputComponent.infoText}>{fallbackText}</Text>)
    
    useEffect(
        () => {
            if(expenses.length > 0) {
                setContent( () => <ExpensesListComponent expenses={expenses}/>)
            } else {
                setContent( () => <Text style={stylesExpensesOutputComponent.infoText}>{fallbackText}</Text>)
            }
        },
        [expenses]
    )
    return (
        <View style={stylesExpensesOutputComponent.container}>
            <ExpensesSummaryComponent expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    )
}

export default ExpensesOutputComponent;

