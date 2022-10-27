import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity} from 'react-native';
//import styles from "./StyleSheet";
import PostScreen from "./screens/PostScreen";
import CommentScreen from "./screens/CommentScreen";

import {CommentContext} from "./appContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    var posts=[
        {
            post_id: "1",
            profile_pic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg",
            user: "sir_shrek",
            location: "The Kingdom of Far Far Away",
            post_image: "https://filmconcertslive.com/wp-content/uploads/2021/11/movie_top_shrek2_1100px.jpg",
            likes: "10.443 likes",
            description: "Roadtrip to meet the #inlaws",
        },
        {
            post_id: "2",
            profile_pic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg",
            user: "sir_shrek",
            location: "The Kingdom of Far Far Away",
            post_image: "https://filmconcertslive.com/wp-content/uploads/2021/11/movie_top_shrek2_1100px.jpg",
            likes: "10.443 likes",
            description: "Roadtrip to meet the #inlaws",
        },
    ];

    var comments= [
        {
            comment_id: "1",
            post_id: "1",
            user: "domkeu",
            comment: "my banan is smaller"
        },
        {
            comment_id: "2",
            post_id: "1",
            user: "domkeu",
            comment: "my banan is bigger"
        },
        {
            comment_id: "3",
            post_id: "2",
            user: "domkeu",
            comment: "I should not be here"
        }
    ]

    const [getPosts, setPosts] = useState((posts));
    const [getComments, setComments] = useState((comments));

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
    <CommentContext.Provider value={[getComments, setComments, getPosts, setPosts]}>
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
    </CommentContext.Provider>

  );
}
