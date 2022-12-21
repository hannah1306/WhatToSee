import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

//상단 텝
const Tab = createMaterialTopTabNavigator();

//뭐볼래?
function WhatScreen() {
  return (
    <ScrollView>
      <Button title="넷플릭스"></Button>
      <Button title="웨이브"></Button>
      <Button title="티빙"></Button>
      <Button title="쿠팡플레이"></Button>
      <Button title="시즌"></Button>
      <Button title="디즈니플러스"></Button>
      <Button title="왓챠"></Button>
      <Button title="유튜브프리미엄"></Button>
      <Button title="아마존프라임"></Button>
      <Button title="애플TV"></Button>
    </ScrollView>
  );
}

//어디서볼래?
function WhereScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>어디서볼래?</Text>
    </View>
  );
}

const ottData = [
  {

  }
]

export default function App() {
  return (
    <>
      <View style={{ alignItems:'center'}}>
        <Text>광고</Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="뭐볼래?" component={WhatScreen} />
          <Tab.Screen name="어디서볼래?" component={WhereScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // button: {
  //   padding:50,
  //   backgroundColor: 'orange'
  // }
});
