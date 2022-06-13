import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";

export const stylesManageExpense = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
        backgroundColor: theme.colors.primary800
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: theme.colors.primary200,
        alignItems: 'center'
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    }

})