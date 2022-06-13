import { useCallback, useState } from "react"
import { Alert, Text, View } from "react-native"
import { stylesManageExpense } from "../../screens/manage-expense/manage-expense.styled"
import { getFormmatedData } from "../../util/date"
import Button from "../button/button.component"
import Input from "../input/input.component"
import { stylesExpenseForm } from "./expense-form.component.styled"

export type InputValuesPropsType = {
    amount: string | number,
    date: string | Date,
    description: string
}

type ExpenseFormPropsType = {
    onCancel: () => void,
    onSubmit: (expenseData: InputValuesPropsType) => void,
    submitButtonLabel: string,
    defaultValues?: InputValuesPropsType
}

const ExpenseForm = ({
    onCancel, 
    onSubmit,
    submitButtonLabel,
    defaultValues
}: ExpenseFormPropsType) => {

    const [inputValues, setInputValues] = useState<InputValuesPropsType>({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormmatedData(defaultValues.date as Date) : '',
        description: defaultValues ? defaultValues.description : ''
    })

    const inputChangeHandler = useCallback (
        (inputIndentifer: string, enteredValue: string) => {
            setInputValues( (curInputValuse: InputValuesPropsType) => {
                return {
                    ...curInputValuse,
                    [inputIndentifer]: enteredValue
                }
            })
        },
        []
    )

    const submitHandler = useCallback (
        () => {
            const expenseData: InputValuesPropsType = {
                amount: +inputValues.amount,
                date: new Date(inputValues.date),
                description: inputValues.description
            }

            const amountIsValid = !isNaN(expenseData.amount as number) && expenseData.amount > 0
            const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
            const descriptionIsValid = expenseData.description.trim().length > 0;

            if(!amountIsValid || !dateIsValid || !descriptionIsValid){
                Alert.alert('Invalid input', 'Please check your input values')
                return;
            }
            onSubmit(expenseData);
        },
        [inputValues]
    )

    return  <View style={stylesExpenseForm.form}>
                <Text style={stylesExpenseForm.title}>Your Expense</Text>
                <View style={stylesExpenseForm.inputRow}>
                    <Input 
                        style={stylesExpenseForm.rowInput}
                        label="Amount" 
                        textInputConfig={{
                            keyboardType: 'decimal-pad',
                            onChangeText: inputChangeHandler.bind(this, 'amount'),
                            value: inputValues.amount
                        }} 
                    />
                    <Input 
                        style={stylesExpenseForm.rowInput}
                        label="Date"  
                        textInputConfig={{
                            placeholder: 'YYYY-MM-DD',
                            maxLenght: 10,
                            onChangeText: inputChangeHandler.bind(this, 'date'),
                            value: inputValues.date
                        }} 
                    />
                </View>
                <Input label="Description"  textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValues.description
                }} />
                <View style={stylesManageExpense.buttons}>
                    <Button mode="flat" onPress={onCancel} style={stylesManageExpense.button}>Cancel</Button>
                    <Button onPress={submitHandler} style={stylesManageExpense.button}>{submitButtonLabel}</Button>
                </View>
            </View>
}

export default ExpenseForm