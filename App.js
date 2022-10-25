import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity} from 'react-native';
//import styles from "./StyleSheet";
import PostScreen from "./screens/PostScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {

  /* const [commentsState, setCommentsState] = useState(comments);
  const [currentComment, setCurrentComment] = useState("");

  const addComment = (message) => {
    setCommentsState([...commentsState, {id : message, user: "donkey", comment: message}]);
  } */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
