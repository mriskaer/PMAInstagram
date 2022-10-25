import { View, Text } from "react-native";
import Post from "../components/Post";

export default function PostScreen({navigation}) {
    return(
        <View>
            <Text> Hello, Marie</Text>
            <Post post_image="https://filmconcertslive.com/wp-content/uploads/2021/11/movie_top_shrek2_1100px.jpg"></Post>
        </View>
    )
}