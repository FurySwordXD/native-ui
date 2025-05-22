import { hookstate, useHookstate } from "@hookstate/core";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import Colors from "./Colors";

type Style = TextStyle | ViewStyle | ImageStyle;
type FunctionalStyle = (props?: any) => Style;

declare global {

    interface ComponentTheme {
        style?: Style;
        styleWithProps?: FunctionalStyle;
        variants?: {
            [variant: string]: Style;
        }
        variantsWithProps?: {
            [variant: string]: FunctionalStyle;
        }
    }

    interface ThemeType {
        [component: string]: ComponentTheme;
    }

}

const shadowConfig = {
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
};

function getBaseTheme() {
    const theme: ThemeType = {
        Box: {},
        View: {
            style: {
                width: '100%',
                gap: 5,
            }
        },
        Card: {
            style: {
                backgroundColor: Colors.foreground,
                borderRadius: 10,
                padding: 20,
            }
        },
        VStack: {},
        HStack: {
            style: {
                alignItems: 'center',
                width: '100%',
            }
        },
        ScrollView: {
            style: {
                alignItems: 'center',
                minHeight: '100%',
                flexGrow: 1
            }
        },
        Image: {},
        Text: {
            style: {
                fontSize: 13,
                fontWeight: '500',
            },
            variants: {
                'heading': {
                    color: Colors.greyScale[0],
                    fontWeight: '600',
                    fontSize: 20,
                },
                'key': {
                    color: Colors.greyScale[1],
                    fontWeight: '600',
                    fontSize: 14,
                },
                'subtitle': {
                    color: Colors.greyScale[2],
                },
                'error': {
                    color: Colors.error,
                },
                'default': {
                    color: Colors.greyScale[1],
                },
            }
        },
        Button: {
            style: {

            },
            variantsWithProps: {
                'solid': ({ color, disableShadow }: { color: string, disableShadow?: boolean }) => ({
                    backgroundColor: color,
                    ...(!disableShadow && shadowConfig)
                }),
                'outline': ({ color }: { color: string, disableShadow?: boolean }) => ({
                    borderWidth: 1,
                    borderColor: color,
                }),
                'ghost': () => ({}),
                'link': () => ({
                    paddingVertical: undefined as any,
                    paddingHorizontal: undefined as any,
                })
            }
        },
        Input: {},
        Divider: {
            style: {
                height: 1,
                backgroundColor: `${Colors.greyScale[2]}75`,
                marginTop: 5, marginBottom: 5,
            }
        }
    };
    return theme;
}

const ThemeState = hookstate<ThemeType>(getBaseTheme());

export function updateTheme(theme: ThemeType) {
    ThemeState.merge({ ...getBaseTheme(), ...theme });
}

export function useTheme() {
    const themeState = useHookstate(ThemeState);
    const theme = themeState.get({ noproxy: true }) as ThemeType;

    return { theme, updateTheme };
}

export function useComponentTheme(component: string) {
    const themeState = useHookstate(ThemeState[component]);
    const theme = themeState.get({ noproxy: true }) as ComponentTheme;

    return { theme };
}