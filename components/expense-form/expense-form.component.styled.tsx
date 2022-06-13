import { StyleSheet } from "react-native";

export const stylesExpenseForm = StyleSheet.create({
    form: {
        marginTop: 80
    },

    inputRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    }
})