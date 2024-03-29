# React Native - Native UI
Native UI is a react native UI library that comes with themed components built on top of default react native components. All components have been tested to work on Android, IOS and Web (React Native Web).

- [x] High Performant 📈
- [x] Vast Components 💯
- [x] Minimal Dependencies 🛠️
- [x] Cross Platform 📱
- [x] Blazingly Fast 🚀

## Getting Started
- Install the library to your project
- Wrap your App with the Context Provider
- Start using the various components

## Components

### Layout
- Box
- View
- HStack
- VStack
- Card
- Modal
- Divider

### Primitives
- Text
- Button
- Icon (Uses react-native-vector-icons)
- IconButton
- Checkbox
- Radio
- Input
- Image

### Components
- Select
- Avatar
- OverlaySpinner
- Accordion

### Notification Management System
This library also comes with a built-in notification management system and can be utilized with `useMessage()` hook.
This system uses a message queue and shows notifications one after another using Toasts (can be modified to use custom render method)
```
import { useMessage } from 'react-native-native-ui';

function Component(props)
{
    const { showMessage } = useMessage();

    useEffect(() => {
        showMessage({ title: 'Message title', text: 'Message body', status: 'error', duration: 2000 });
    }, []);
}
```

### Colors
This project uses the following color scheme to perform all styling:
- 3 main colors (primary, secondary, tertiary)
- 3 colors of statuses (success, warning, error)
- 5 shades of white to black (white, light, grey, dark, black)

To override the colors simply import the Colors variable in your index file and edit the values as follows:
```
import { Colors } from 'react-native-native-ui';

Colors.primary = 'blue';
Colors.secondary = 'red';
Colors.tertiary = 'purple';
```

### Authors
Sainath Ganesh - @furyswordxd

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
