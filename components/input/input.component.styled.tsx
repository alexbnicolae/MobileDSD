import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";

export const stylesInput = StyleSheet.create({

    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: theme.colors.primary100,
        marginBottom: 4
    }, 
    input: {
        backgroundColor: theme.colors.primary100,
        color: theme.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }

})