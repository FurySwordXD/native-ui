import Theme from "./Theme";

function extendTheme(theme: ThemeType)
{
    Object.entries(theme).forEach(([component, value]) => {

        const currentComponent = Theme[component] || {
            style: {}, variants: {}, variantsWithProps: {}
        };

        const styleWithProps = value.styleWithProps || currentComponent.styleWithProps;

        const variants = currentComponent.variants;
        if (value.variants)
        {
            Object.entries(value.variants).forEach(([variantName, style]) => {
                variants[variantName] = {
                    ...currentComponent.variants[variantName],
                    ...style
                };
            });
        }


        const variantsWithProps = currentComponent.variantsWithProps;
        if (value.variantsWithProps)
        {
            Object.entries(value.variantsWithProps).forEach(([variantName, functionalStyle]) => {
                variantsWithProps[variantName] = functionalStyle;
            });
        }


        Theme[component] = {
            style: {
                ...currentComponent.style,
                ...value.style
            },
            styleWithProps,
            variants,
            variantsWithProps,
        }

    });
}

export default extendTheme;