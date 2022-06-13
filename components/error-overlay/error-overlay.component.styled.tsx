import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";


export const stylesErrorOverlayComponent = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: theme.colors.primary700
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    message: {
        fontSize: 14
    }
})