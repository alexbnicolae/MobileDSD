import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/button/button.component";
import ExpenseForm, { InputValuesPropsType } from "../../components/expense-form/expense-form.component";
import IconButton from "../../components/icon-button/icon-button.component";
import LoadingOverlayComponent from "../../components/loading-overlay/loading-overlay.component";
import { ExpensesContext } from "../../store/expenses-context";
import { theme } from "../../theme/colors";
import { deleteExpense, storeExpense, updateExpense } from "../../util/http";
import { stylesManageExpense } from "./manage-expense.styled";

type ManageExpensePropsType = {
    route: RouteProp<{ params: { expenseId: string } }, 'params'>
    navigation: NavigationProp<{ setOptions: () => void }>
}

const ManageExpense = ({
    route, 
    navigation
}: ManageExpensePropsType) => {
    const expenesesCtx = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(false)
    const editedExpenseId = useMemo(
        () => {
            return route.params?.expenseId
        },
        [route]
    )
    const isEditing = useMemo(
        () => {
            return !!editedExpenseId;
        },
        [editedExpenseId]
    )

    const selectedExpense = useMemo(
        () => expenesesCtx.expenses.find(expense => expense.id === editedExpenseId)
        ,
        [expenesesCtx, editedExpenseId]
    )

    useLayoutEffect (
        () => {
            
            navigation.setOptions({
                title: isEditing ? 'Edit Expense' : 'Add Expense'
            })

        },
        [isEditing, navigation]
    )

    const deleteExpenseHandler = useCallback (
        async () => {
            setIsLoading(true)
            await deleteExpense(editedExpenseId) 
            expenesesCtx.deleteExpense(editedExpenseId)
            navigation.goBack();
        },
        [expenesesCtx, editedExpenseId]
    )

    const cancelHandler = useCallback(
        () => {
            navigation.goBack();
        },
        []
    )
    
    const confirmHandler = useCallback(
        async (expenseData: InputValuesPropsType) => {
            setIsLoading(true)
            if(isEditing){
                expenesesCtx.updateExpense(editedExpenseId, expenseData);
                await updateExpense(editedExpenseId, expenseData)
            } else {
                const id = await storeExpense(expenseData)
                expenesesCtx.addExpense({...expenseData, id: id})
            }
            navigation.goBack();
        },  
        [expenesesCtx, isEditing, editedExpenseId]
    )


    return (
        <>
            {
                isLoading ?
                    <LoadingOverlayComponent />
                    :
                    <View style={stylesManageExpense.container}>
                            <ExpenseForm 
                                submitButtonLabel={isEditing ? 'Update' : 'Add'} 
                                onCancel={cancelHandler} 
                                onSubmit={confirmHandler} 
                                defaultValues={selectedExpense}
                            />
                            

                            {
                                isEditing && 
                                    (
                                        <View style={stylesManageExpense.deleteContainer}>
                                            <IconButton 
                                                icon='trash' 
                                                color={theme.colors.error50} 
                                                size={36} 
                                                onPress={deleteExpenseHandler} 
                                            />
                                        </View>
                                    )
                            }
                    </View>
            }
        </>
    )
}

export default ManageExpense;