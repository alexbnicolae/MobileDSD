import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";

export const stylesButton = StyleSheet.create({

    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: theme.colors.primary500
    },

    flat: {
        backgroundColor: 'transparent',
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },

    flatText: {
        color: theme.colors.primary200
    },

    pressed: {
        opacity: 0.75,
        backgroundColor: theme.colors.primary100,
        borderRadius: 4
    }

})