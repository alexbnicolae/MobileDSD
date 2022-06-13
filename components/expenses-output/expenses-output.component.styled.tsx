import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";


export const stylesExpensesOutputComponent = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        backgroundColor: theme.colors.primary700
    },

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
})