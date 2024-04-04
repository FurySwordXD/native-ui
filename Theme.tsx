import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type Style = TextStyle | ViewStyle | ImageStyle;
type FunctionalStyle = (props?: any) => Style;

declare global {

    interface ThemeType {
        [component: string]: {
            style?: Style;
            styleWithProps?: FunctionalStyle;
            variants?: {
                [variant: string]: Style;
            }
            variantsWithProps?: {
                [variant: string]: FunctionalStyle;
            }
        }
    }

}

const Theme: ThemeType = {};

export default Theme;