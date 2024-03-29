# React Native - Native UI
Native UI is a react native UI library that comes with themed components built on top of default react native components. All components have been tested to work on Android, IOS and Web (React Native Web).

- [x] High Performant 📈
- [x] Vast Components 💯
- [x] Minimal Dependencies 🛠️
- [x] Cross Platform 📱
- [x] Blazingly Fast 🚀

## Getting Started
- Install the library to your project
```
npm install react-native-native-ui
```
- Wrap your App with the Context Provider
```
import { Provider } from 'react-native-native-ui';

function App({ children, ...props })
{
    return <Provider>
        {children}
    </Provider>
}
```
- Start using the various components
```
import { View, VStack, Button, HStack, Icon, Input, Text, Card, Colors, Divider, UIProvider, useMessage, Select, Radio } from 'react-native-native-ui';

function App()
{
    return (
        <UIProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
			<View style={{ flex: 1, backgroundColor: Colors.background, padding: 20 }}>
			<Card>
			<VStack style={{ padding: 20, backgroundColor: 'white' }}>
				<View>
					<HStack>
						<Text variant='heading' style={{ flex: 1, fontSize: 20, }}>Heading</Text>
						<IconButton name='close' />
					</HStack>
					<Divider/>
					<Text variant='key' style={{ fontSize: 15, fontWeight: '600', color: Colors.dark }}>Key text</Text>
					<Text variant='subtitle' style={{ fontSize: 14, fontWeight: '500' }}>Subtitle</Text>
				</View>
				<Input
					leftElement={<Icon name='account' />}
					placeholder='username'
					error='Invalid username!'
				/>
				<HStack>
					<Button color='error' style={{ flex: 1 }}><Icon name='close' color='white' /><Text style={{ color: 'white' }}>Cancel</Text></Button>
					<Button style={{ flex: 1 }} title='Show Toast'
						rightElement={<Icon name='chevron-right' color='white' />}
						onPress={()=>{ showMessage({ title: 'Test', duration: 2000, status: 'error' }); showMessage({ title: 'Test 2', duration: 2000 }); }} />
				</HStack>

				<Select value={'1'} placeholder="select" onChange={(v)=>{}}
					items={[
						{ value: '1', label: 'One' },
						{ value: '2', label: 'Two' },
						{ value: '3', label: 'Three' },
					]}
				/>

				<Radio value='1' options={[{ value: '1', label: 'One' }, { value: '2', label: 'Two' }, { value: '3', label: 'Three' }]} onChange={(v)=>{}} />

			</VStack>
			</Card>
			</View>
			</SafeAreaView>
		</UIProvider>
    )
}
```

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
