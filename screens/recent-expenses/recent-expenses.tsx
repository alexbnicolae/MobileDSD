import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import ErrorOverlayComponent from "../../components/error-overlay/error-overlay.component";
import ExpensesOutputComponent from "../../components/expenses-output/expenses-output.component";
import LoadingOverlayComponent from "../../components/loading-overlay/loading-overlay.component";
import { ExpensesContext } from "../../store/expenses-context";
import { getDateMinusDays } from "../../util/date";
import { getExpenses } from "../../util/http";

const RecentExpenses = () => {

    const expenseCtx = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState<any>()

    useEffect(
        () => {
            async function fetchExp() {
                setIsLoading(true)
                try {
                    const expenses = await getExpenses();
                    expenseCtx.setExpenses(expenses)
                } catch (error: any) {
                    setIsError(error)
                }
                setIsLoading(false)
            }
            fetchExp()
        },
        []
    )

    const recentExpenses = useMemo (
        () => expenseCtx.expenses.filter((expense) => {
            const today = new Date()
            const date7DaysAgo = getDateMinusDays(today, 7)

            return (expense.date >= date7DaysAgo) && (expense.date <= today)
        }),
        [expenseCtx]
    )

    const errorHandler = useCallback(
        () => {
            setIsError(null)
        },
        []
    )
    return (
        <>
            {
                isError && !isLoading ? 
                    <ErrorOverlayComponent message={isError} onConfirm={errorHandler} />
                    :
                    <>
                        {
                            isLoading ?  
                                <LoadingOverlayComponent /> 
                                :
                                <ExpensesOutputComponent 
                                    expenses={recentExpenses} 
                                    expensesPeriod="Last 7 days" 
                                    fallbackText="No expenses registered in the last 7 days!"  
                                />
                        }
                    </>
            }       
        </>
    )
}

export default RecentExpenses;