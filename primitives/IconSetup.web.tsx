import AntDesignTTF from "react-native-vector-icons/Fonts/AntDesign.ttf";
import FA5IconBrandsTTF from "react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf";
import FA5IconSolidTTF from "react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf";
import FA5IconRegularTTF from "react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf";
import FeatherTTF from "react-native-vector-icons/Fonts/Feather.ttf";
import FontistoTTF from "react-native-vector-icons/Fonts/Fontisto.ttf";
import EntypoTTF from "react-native-vector-icons/Fonts/Entypo.ttf";
import MaterialTTF from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import MaterialCommunityTTF from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";

function setupForWeb()
{
    // Generate required css
    const iconFontStyles = `
    @font-face {
        src: url(${AntDesignTTF});
        font-family: 'AntDesign';
    }
    @font-face {
        src: url(${EntypoTTF});
        font-family: 'Entypo';
    }
    @font-face {
        src: url(${FeatherTTF});
        font-family: 'Feather';
    }
    @font-face {
        src: url(${FA5IconRegularTTF});
        font-family: 'FontAwesome5_Regular';
    }
    @font-face {
        src: url(${FA5IconSolidTTF});
        font-family: 'FontAwesome5_Solid';
    }
    @font-face {
        src: url(${FA5IconBrandsTTF});
        font-family: 'FontAwesome5_Brands';
    }
    @font-face {
        src: url(${FontistoTTF});
        font-family: 'Fontisto';
    }
    @font-face {
        src: url(${MaterialCommunityTTF});
        font-family: MaterialCommunityIcons;
    }
    @font-face {
        src: url(${MaterialTTF});
        font-family: MaterialIcons;
    }
    `;

    // Create stylesheet
    const style: any = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = iconFontStyles;
    } else {
        style.appendChild(document.createTextNode(iconFontStyles));
    }

    // Inject stylesheet
    document.head.appendChild(style);
}

setupForWeb();
