import AntDesignTTF from "react-native-vector-icons/Fonts/AntDesign.ttf";
import EntypoTTF from "react-native-vector-icons/Fonts/Entypo.ttf";
import EvilIconsTTF from "react-native-vector-icons/Fonts/EvilIcons.ttf";
import FeatherTTF from "react-native-vector-icons/Fonts/Feather.ttf";
import FontAwesomeTTF from "react-native-vector-icons/Fonts/FontAwesome.ttf";
import FA5IconBrandsTTF from "react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf";
import FA5IconSolidTTF from "react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf";
import FA5IconRegularTTF from "react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf";
import FontistoTTF from "react-native-vector-icons/Fonts/Fontisto.ttf";
import FoundationTTF from "react-native-vector-icons/Fonts/Foundation.ttf";
import IoniconsTTF from "react-native-vector-icons/Fonts/Ionicons.ttf";
import MaterialTTF from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import MaterialCommunityTTF from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
import OcticonsTTF from "react-native-vector-icons/Fonts/Octicons.ttf";
import SimpleLineIconsTTF from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";
import ZocialTTF from "react-native-vector-icons/Fonts/Zocial.ttf";

function setupForWeb() {
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
        src: url(${EvilIconsTTF});
        font-family: 'EvilIcons';
    }
    @font-face {
        src: url(${FeatherTTF});
        font-family: 'Feather';
    }
    @font-face {
        src: url(${FontAwesomeTTF});
        font-family: 'FontAwesome';
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
        src: url(${FoundationTTF});
        font-family: 'Foundation';
    }
    @font-face {
        src: url(${IoniconsTTF});
        font-family: 'Ionicons';
    }
    @font-face {
        src: url(${MaterialCommunityTTF});
        font-family: MaterialCommunityIcons;
    }
    @font-face {
        src: url(${MaterialTTF});
        font-family: MaterialIcons;
    }
    @font-face {
        src: url(${OcticonsTTF});
        font-family: 'Octicons';
    }
    @font-face {
        src: url(${SimpleLineIconsTTF});
        font-family: 'SimpleLineIcons';
    }
    @font-face {
        src: url(${ZocialTTF});
        font-family: 'Zocial';
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
