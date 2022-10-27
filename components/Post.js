import styles from "../StyleSheet";
import { get_pic } from "../Util";
import { View, Image, Button, Alert, Text } from "react-native";
import ProfileHeader from "./ProfileHeader";
import LikeBar from "./LikeBar";
import { Pressable } from "react-native";

//var comments = [];

function Post (props){
    return(
            <View>
            <ProfileHeader 
                profile_pic={props.profile_pic} 
                user={props.user} 
                location={props.location}
            ></ProfileHeader>
            <Image
                style={styles.postImg}
                source={get_pic(props.post_image)}
            />
            <LikeBar
                likes={props.likes}
                user={props.user}
                description={props.description}
            ></LikeBar>
            <Pressable onPress={() => props.navigation.navigate("CommentScreen", {post_id: props.post_id, 
                comments_setter: props.comments_setter, 
                comments_getter: props.comments_getter})}>
                <Text style={styles.buttonText}>Go to comments</Text>
            </Pressable>
        </View>

    )
}
export default Post;