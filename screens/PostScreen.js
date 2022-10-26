import { View, Text } from "react-native";
import Post from "../components/Post";

export default function PostScreen({navigation}) {
    return(
        <View style={{marginLeft: 20, marginRight: 10}}>
            <Post 
                profile_pic="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg"
                user="sir_shrek"
                location="The Kingdom of Far Far Away"
                post_image="https://filmconcertslive.com/wp-content/uploads/2021/11/movie_top_shrek2_1100px.jpg"
                likes="10.443 likes"
                description="Roadtrip to meet the #inlaws"
                navigation={navigation}
                comments={[{user: "domeky", comment: "Bavinaner"},{user: "tarxan", comment: "Bavinaner"}]}

            ></Post>
        </View>
    )
}