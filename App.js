import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>뭐볼래?</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>어디서볼래?</Text>
    </View>
  );
}

export default function App() {
  return (
    <>
      <View style={{ alignItems:'center'}}>
        <Text>광고</Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="뭐볼래?" component={HomeScreen} />
          <Tab.Screen name="어디서볼래?" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
