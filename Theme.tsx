import { TextStyle, ViewStyle } from "react-native";

type Style = TextStyle | ViewStyle;
type FunctionalStyle = (props?: any) => Style;

function evaluateStyle(style: FunctionalStyle | Style) {
    return typeof style === 'function' ? style : () => style;
};

declare global
{
    var evaluateStyle: (style: FunctionalStyle | Style) => FunctionalStyle;
}
globalThis.evaluateStyle = evaluateStyle;


interface ThemeType {
    [component: string]: {
        style?: FunctionalStyle | Style;
        variants?: {
            [variant: string]: FunctionalStyle | Style;
        }
    }
}

const Theme: ThemeType = {};

export default Theme;