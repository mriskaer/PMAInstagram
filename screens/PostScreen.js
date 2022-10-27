import { View, Text} from "react-native";
import Post from "../components/Post";
import styles from "../StyleSheet";
import { useEffect, useState } from "react";



export default function PostScreen({navigation}) {

    var posts=[
        {
            post_id: "1",
            profile_pic: require('../assets/sir_shrek_profile.png'),
            user: "sir_shrek",
            location: "The Kingdom of Far Far Away",
            post_image: require('../assets/shrek_post.png'),
            likes: "10.443 likes",
            description: "Roadtrip to meet the #inlaws",
            navigation: navigation,
        },
    ];

    var comments= [
        {
            comment_id: "1",
            post_id: "1",
            user: "Elizabeth",
            comment: "WOW!"
        },
        {
            comment_id: "2",
            post_id: "1",
            user: "Elizabeth",
            comment: "what a hottie"
        },
        {
            comment_id: "3",
            post_id: "2",
            user: "donkey_jr",
            comment: "I should not be here"
        }
    ]
    const [getPosts, setPosts] = useState((posts));
    const [getComments, setComments] = useState((comments));

    useEffect(() => {
        console.log(getComments);
    }, [getComments])

    function make_post(post_data) {
        return (
            <Post 
                post_id = {post_data.post_id}
                profile_pic = {post_data.profile_pic}
                user = {post_data.user}
                location = {post_data.location}
                post_image = {post_data.post_image}
                likes = {post_data.likes}
                description = {post_data.description}
                navigation = {post_data.navigation}
                comments = {post_data.comments}
                comments_getter = {getComments}
                comments_setter = {setComments}
            ></Post>
        )
    }
    
    return(
        <View style={styles.screenDefault}>
            {make_post(getPosts[0])}
        </View>
    )
}