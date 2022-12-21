import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

//상단 텝
const Tab = createMaterialTopTabNavigator();

//ott data
const ottData = [
  { id: 1, title: '넷플릭스', url: 'https://www.netflix.com/kr/' },
  { id: 2, title: '웨이브', url: '' },
  { id: 3, title: '티빙', url: '' },
  { id: 4, title: '쿠팡플레이', url: '' },
  { id: 5, title: '시즌', url: '' },
  { id: 6, title: '디즈니플러스', url: '' },
  { id: 7, title: '왓챠', url: '' },
  { id: 8, title: '유튜브프리미엄', url: '' },
  { id: 9, title: '아마존프라임', url: '' },
  { id: 10, title: '애플TV', url: '' },
]

const OttItem = (item) => (
  <Button title={item.title} onPress={()=>{console.log(item.url)}}></Button>
)

//뭐볼래?
function WhatScreen() {
  const renderItem = ({item}) => (
    <OttItem title={item.title} url={item.url}></OttItem>
  )
  return (
    <FlatList
      data={ottData}
      renderItem={renderItem}
    >
    </FlatList>
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

export default function App() {
  return (
    <>
      <View style={styles.ad}>
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
  ad: {
    alignItems: 'center',
    justifyContent: 'center',
    height:100,
    border: '1px solid #ddd'
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // button: {
  //   padding:50,
  //   backgroundColor: 'orange'
  // },
});
