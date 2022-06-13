import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { getFormmatedData } from "../../util/date";
import { stylesExpenseItemComponent } from "./expense-item.component.styled";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppParamList } from "../../App";

type ExpenseItemComponentPropsType = {
    id: string,
    description: string,
    amount: number,
    date: Date
}

export type manageExpenseProp = NativeStackNavigationProp<AppParamList, 'ManageExpense'>

const ExpenseItemComponent = ({
    id,
    description,
    amount,
    date
}: ExpenseItemComponentPropsType) => {

    const navigation = useNavigation<manageExpenseProp>() 

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {
            expenseId: id
        });
    }

    return (
        <>
            <Pressable 
                onPress={expensePressHandler} 
                style={({ pressed }) => pressed && stylesExpenseItemComponent.pressed}
            >
                <View style={stylesExpenseItemComponent.expenseItem}>
                    <View>
                        <Text style={[stylesExpenseItemComponent.textBase, stylesExpenseItemComponent.description]}>{description}</Text>
                        <Text style={stylesExpenseItemComponent.textBase}>{getFormmatedData(date)}</Text>
                    </View>
                    <View style={stylesExpenseItemComponent.amountContainer}>
                        <Text style={stylesExpenseItemComponent.amount}>{amount.toFixed(2)}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
}

export default ExpenseItemComponent;