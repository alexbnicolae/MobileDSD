import axios from "axios"
import { InputValuesPropsType } from "../components/expense-form/expense-form.component"

const URL = `https://mobile-project-38369-default-rtdb.firebaseio.com`

export const storeExpense = async (expenseData: InputValuesPropsType) => {
    const response = await axios.post(
        `${URL}/expenses.json`,
        expenseData
        )
    
    const id = response.data.name

    return id
}

export const getExpenses = async () => {
    const response = await axios.get(
        `${URL}/expenses.json`
    )

    const expenses = []

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj)
    }
    
    return expenses
}

export const updateExpense = async(id:string, expenseData: InputValuesPropsType) => {
   return axios.put(`${URL}/expenses/${id}.json`, expenseData)
}

export const deleteExpense = async(id: string) => {
    return axios.delete(`${URL}/expenses/${id}.json`)
}