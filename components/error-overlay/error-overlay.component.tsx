import { Text, View } from "react-native";
import Button from "../button/button.component";
import { stylesErrorOverlayComponent } from "./error-overlay.component.styled";

type ErrorOverlayComponentPropsType = {
    message: string,
    onConfirm: () => void
}

const ErrorOverlayComponent = ({
    message,
    onConfirm
}: ErrorOverlayComponentPropsType) => {

    return(
        <View style={stylesErrorOverlayComponent.container}>
            <Text style={[stylesErrorOverlayComponent.text, stylesErrorOverlayComponent.title]}>An error occured!</Text>
            <Text style={stylesErrorOverlayComponent.text}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    )
}

export default ErrorOverlayComponent;