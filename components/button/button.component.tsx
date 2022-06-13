import { Pressable, Text, View } from "react-native";
import { stylesButton } from "./button.component.styled";

type ButtonPropsType = {
    children?: any,
    onPress: () => void,
    mode?: string,
    style?: any
}

const Button = ({
    children,
    onPress,
    mode,
    style
}: ButtonPropsType) => {

    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && stylesButton.pressed}>
                <View style={[stylesButton.button, mode === 'flat' && stylesButton.flat]}>
                    <Text style={[stylesButton.buttonText, mode === 'flat' && stylesButton.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )

}

export default Button;