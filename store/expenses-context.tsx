import { createContext, useCallback, useMemo, useReducer } from "react";
import { ExpensesType } from "../components/expenses-summary/expenses-summary.component";
import { DUMMY_EXPENSES } from "../dummy-data/dummy-data";

type AddExpensePropsType = {
    description: string,
    amount: string | number,
    date: Date | string,
}


type ExpensesContextProviderPropsType = {
    children: any,
}

type ExpensesContextPropsType = {
    expenses: ExpensesType[],
    addExpense: ({description, amount, date}: ExpensesType) => void,
    setExpenses: (expenses: ExpensesType[]) => any
    deleteExpense: (id:string) => void,
    updateExpense: (id:string, {description, amount, date}: AddExpensePropsType) => void
}

export const ExpensesContext = createContext<ExpensesContextPropsType>({
    expenses : [],
    addExpense: ({description, amount, date}: ExpensesType) => [],
    setExpenses: (expenses: ExpensesType[]) => {},
    deleteExpense: (id:string) => [],
    updateExpense: (id:string, {description, amount, date}: AddExpensePropsType) => []
});


const expenesesReducer = (
    state: any, 
    action: {
        type: string,
        payload: any
    }) => {
    const {type, payload} = action;
    switch (type) {
        case 'Add':
            return [payload, ...state]
        case 'Set':
            const inverted = (payload as ExpensesType[]).reverse()
            return inverted;
        case 'Update':
            const updateableExpenseIndex = state.findIndex(
                (expense: any) => expense.id === payload.id
            )
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = { ...updateableExpense, ...payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updateableExpenseIndex] = updatedItem
            return updatedExpenses;
        case 'Delete':
            return state.filter((expense: any) => expense.id !== payload)
        default:
            return state;

    }
}

const ExpensesContextProvider = ({
    children,
}: ExpensesContextProviderPropsType) => {

    const [expenesesState, dispatch] =  useReducer(expenesesReducer, [])

    const addExpense = useCallback (  
        (expensesData: AddExpensePropsType) => dispatch({ type: 'Add', payload: expensesData})
        ,
        [expenesesState]
    )

    const setExpenses = useCallback (  
        (expensesData: ExpensesType[]) => dispatch({ type: 'Set', payload: expensesData})
        ,
        [expenesesState]
    )

    const deleteExpense = useCallback (  
        (id: string) => dispatch({ type: 'Delete', payload: id})
        ,
        [expenesesState]
    )

    const updateExpense = useCallback (  
        (id: string, expensesData: AddExpensePropsType) => {
            return dispatch({ type: 'Update', payload: {id: id, data: expensesData}})
        }
        ,
        [expenesesState]
    )

    const value = useMemo (
        () => {
            return {
                expenses: expenesesState,
                addExpense: addExpense,
                setExpenses: setExpenses,
                updateExpense: updateExpense,
                deleteExpense: deleteExpense
            }
        },
        [expenesesState, addExpense, updateExpense, deleteExpense, setExpenses]
    )


    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;