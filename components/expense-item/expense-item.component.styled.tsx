import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";

export const stylesExpenseItemComponent = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },

    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: theme.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3
    },

    textBase: {
        color: theme.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: theme.colors.primary500,
        fontWeight: 'bold'
    }
})