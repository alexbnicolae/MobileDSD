import { useContext } from "react";
import ExpensesOutputComponent from "../../components/expenses-output/expenses-output.component";
import { ExpensesContext } from "../../store/expenses-context";


const AllExpenses = () => {
    const expensesCtx = useContext(ExpensesContext)
    return (
       <ExpensesOutputComponent 
        expenses={expensesCtx.expenses} 
        expensesPeriod="Total"  
        fallbackText="No registered expenses found!"
    />
    )
}

export default AllExpenses;