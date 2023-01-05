import { useState } from 'react';
import React from 'react';
import PostScreen from "./screens/PostScreen";
import CommentScreen from "./screens/CommentScreen";

import { CommentContext } from "./appContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    var posts = [
        {
            post_id: "1",
            profile_pic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg",
            user: "sir_shrek",
            location: "The Kingdom of Far Far Away",
            post_image: "https://imgartists.com/wp-content/uploads/2021/12/303615_CARRIAGE_RIDE2.jpg",
            likes: "10.443 likes",
            description: "Roadtrip to meet the #inlaws",
        },
        {
            post_id: "2",
            profile_pic: "https://pbs.twimg.com/media/DrHvc0DVsAAzRz-.jpg",
            user: "elizabeth_the_dragon",
            location: "A wedding",
            post_image: "https://external-preview.redd.it/SWZwV-0NFRO5CoxzQubfYeSQ0pgEBC4qUGjaq6G6akQ.jpg?auto=webp&s=856e3689ae5a8ddcc1af047fe4dfacbec9d9a429",
            likes: "74.378 likes",
            description: "My #family is the best",
        },
    ];

    var comments = [
        {
            comment_id: "1",
            post_id: "1",
            user: "elizabeth_the_dragon",
            comment: "Have a great trip"
        },
        {
            comment_id: "2",
            post_id: "1",
            user: "elizabeth_the_dragon",
            comment: "#wishicouldbethere"
        },
        {
            comment_id: "3",
            post_id: "2",
            user: "sir_shrek",
            comment: "Except for ours @princess_fiona"
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
                        options={{ title: "Posts" }}
                    />
                    <Stack.Screen
                        name="CommentScreen"
                        component={CommentScreen}
                        options={{ title: "Comments" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CommentContext.Provider>

    );
}
