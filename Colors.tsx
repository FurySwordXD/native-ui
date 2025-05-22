import { updateTheme } from "./Theme";

const Colors = {
    primary: '#4199DA',
    secondary: '#581C87',
    tertiary: '#F59E0B',

    background: '#EAEFF6',
    foreground: '#FFFFFF',

    white: '#FFFFFF',
    light: '#F3F4F6',
    grey: '#A1A1AA',
    dark: '#3F3F46',
    black: '#18181B',

    greyScale: ['#18181B', '#3F3F46', '#A1A1AA', '#F3F4F6', '#FFFFFF'],

    error: '#EF4444',
    success: '#16A34A',
    warning: '#F97316',
}

declare global {
    type Color = keyof typeof Colors;
}

export function updateColors(colors: Partial<typeof Colors>, flipGrayScale?: boolean) {
    Object.assign(Colors, colors);
    if (flipGrayScale) {
        Colors.greyScale = Colors.greyScale.toReversed();
    }
    updateTheme({});
}

export default Colors;