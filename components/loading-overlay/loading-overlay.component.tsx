import { ActivityIndicator, View } from "react-native";
import { stylesLoadingOverlayComponent } from "./loading-overlay.components.styled";

const LoadingOverlayComponent = () => {

    return(
        <View style={stylesLoadingOverlayComponent.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}

export default LoadingOverlayComponent;