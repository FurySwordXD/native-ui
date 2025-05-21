import { hookstate, useHookstate } from "@hookstate/core";
import { useEffect } from "react";
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
        [component: string]: ComponentTheme
    }

}

// const Theme: ThemeType = {};

const ThemeState = hookstate<ThemeType>({});

const shadowConfig = {
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
};

function updateBaseTheme() {
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
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 20,
            }
        },
        VStack: {},
        HStack: {
            style: {
                alignItems: 'center'
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
                    color: Colors.black,
                    fontWeight: '600',
                    fontSize: 20,
                },
                'key': {
                    color: Colors.dark,
                    fontWeight: '600',
                    fontSize: 14,
                },
                'subtitle': {
                    color: Colors.grey,
                },
                'error': {
                    color: Colors.error,
                },
                'default': {
                    color: Colors.dark,
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
        Divider: {
            style: {
                height: 1,
                backgroundColor: `${Colors.grey}75`,
                marginTop: 5, marginBottom: 5,
            }
        }
    };
    return theme;
}

export function useTheme() {
    const themeState = useHookstate(ThemeState);

    useEffect(() => {
        themeState.merge(updateBaseTheme());
    }, [Colors]);

    return { theme: themeState.get() as ThemeType, updateTheme: themeState.merge };
}

export function useComponentTheme(component: string) {
    const themeState = useHookstate(ThemeState[component]);

    useEffect(() => {
        themeState.merge(updateBaseTheme());
    }, [Colors]);

    return { theme: themeState.get() as ComponentTheme, updateTheme: themeState.merge };
}