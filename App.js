import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity} from 'react-native';
//import styles from "./StyleSheet";
import PostScreen from "./screens/PostScreen";
import CommentScreen from "./screens/CommentScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {

  /* const [commentsState, setCommentsState] = useState(comments);
  const [currentComment, setCurrentComment] = useState("");

  const addComment = (message) => {
    setCommentsState([...commentsState, {id : message, user: "donkey", comment: message}]);
  } */
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="CommentScreen"
          component={CommentScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
