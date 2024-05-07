import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

function ListScreen() {
  return(
    <View style = {styles.container}>
      <Text>List</Text>
    </View>
  );
}

function CalendarScreen() {
  return(
    <View style = {styles.container}>
      <Text>Calendar</Text>
    </View>
  );
}

function AddScreen() {
  return(
    <View style = {styles.container}>
      <Text>Add</Text>
    </View>
  );
}

function GalleryScreen() {
  return(
    <View style = {styles.container}>
      <Text>Gallery</Text>
    </View>
  );
}

function MeScreen() {
  return(
    <View style = {styles.container}>
      <Text></Text>
    </View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'List') {
      iconName = 'list';
    } else if (route.name === 'Calendar') {
      iconName = 'calendar';
    } else if (route.name === 'Add') {
      iconName = 'add';
    } else if (route.name === 'Gallery') {
      iconName = 'image';
    } else if (route.name === 'Me') {
      iconName = 'person';
    }

    return <Ionicons name = {iconName} size={size} color={color} />
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name = "List" component = {ListScreen} />
        <Tab.Screen name = "Calendar" component = {CalendarScreen} />
        <Tab.Screen name = "Add" component = {AddScreen} />
        <Tab.Screen name = "Gallery" component = {GalleryScreen} />
        <Tab.Screen name = "Me" component = {MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
