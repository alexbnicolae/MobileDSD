import { StyleSheet } from "react-native";
import { theme } from "../../theme/colors";


export const stylesLoadingOverlayComponent = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: theme.colors.primary700
    }
})