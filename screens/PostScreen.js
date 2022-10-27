import { View, Text, FlatList} from "react-native";
import Post from "../components/Post";
import styles from "../StyleSheet";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CommentContext } from "../appContext"


export default function PostScreen({navigation}) {
    const [getComments, setComments, getPosts, setPosts] = useContext(CommentContext);


      function make_post(post_data) {
        return (
            <Post 
                post_id={post_data.post_id}
                profile_pic={post_data.profile_pic}
                user={post_data.user}
                location={post_data.location}
                post_image={post_data.post_image}
                likes={post_data.likes}
                description={post_data.description}
                navigation={navigation}
            ></Post>
        )
    }
    
    return(
        <View style={styles.screenDefault}>
            <FlatList
                data={getPosts}

                renderItem={({item}) => make_post(item)}

                keyExtractor={item => item.post_id}
            />
          {/* {make_post(getPosts[0])} */}
        </View>
    )
}
