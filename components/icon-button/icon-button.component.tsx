import { Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { stylesIconButton } from "./icon-button.component.styled";

type IconButtonPropsType = {
    icon: keyof typeof Ionicons.glyphMap,
    size: number,
    color?: string,
    onPress: () => void
}

const IconButton = ({
    icon,
    color,
    size,
    onPress
}: IconButtonPropsType) => {

    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && stylesIconButton.pressed}>
            <View style={stylesIconButton.buttonContainer}>
                <Ionicons name={icon} color={color} size={size} />
           </View>
        </Pressable>
    )

}

export default IconButton;
