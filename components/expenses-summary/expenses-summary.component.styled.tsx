import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";


export const stylesExpensesSummaryComponent = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: theme.colors.primary50,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    period: {
        fontSize: 12,
        color: theme.colors.primary400
    },

    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.primary500
    }
})