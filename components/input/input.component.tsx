import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { stylesInput } from "./input.component.styled";

type InputPropsType = {
    label: string,
    textInputConfig?: any,
    style?: any
}

const Input = ({
    label,
    textInputConfig,
    style
}: InputPropsType) => {

    const [ inputStyle, setInputStyle] = useState<any[]>([stylesInput.input])

    useEffect (
        () => {
            if(textInputConfig && textInputConfig.multiline){
                setInputStyle( () => [...inputStyle, stylesInput.inputMultiline])
            }
        },
        [textInputConfig]
    )

    return <View style={[stylesInput.inputContainer, style]}>
        <Text style={stylesInput.label}>{label}</Text>
        <TextInput style={inputStyle} {...textInputConfig} />
    </View>
}


export default Input;