import { View, Button, SafeAreaView, FlatList, commentsState, renderComment, Image, TextInput, Text, Alert } from "react-native";
import styles from "../StyleSheet";
import { get_pic } from "../Util";
import Post from "../components/Post";
import Comment from "../components/Comment";
import { useState } from "react";


export default function CommentScreen({navigation, route}){

    //whatever is in the commentfield
    const [currentComment, setCurrentComment] = useState("");

    //creates new id for the new comment
    function new_comment_id() {
        return(
            (Math.max(...route.params.comments_getter.map((x) => parseInt(x["comment_id"]))) + 1).toString()
        )
    }
    //?
    console.log(new_comment_id())

    //replacing the section with all old, and the new comment, getting info from (? postscreen ?)
    const addComment = (message) => {
        console.log("State before")
        console.log(route.params.comments_getter)
        route.params.comments_setter([...route.params.comments_getter, 
            {post_id: route.params.post_id, 
                comment_id: new_comment_id(), 
                user: "donkey", 
                comment: message}]);
        console.log("state after")
        console.log(route.params.comments_getter)
      }
    return(
        <View style={styles.screenDefault}>
            <FlatList
                data={route.params.comments_getter.filter((ele) => (ele["post_id"] == route.params.post_id))}
                renderItem={({item}) => Comment({item})} 
                keyExtractor={item => item.comment_id} 
                extraData={route.params.comments_getter.filter((ele) => (ele["post_id"] == route.params.post_id))}

            />

            <View style={styles.comment}>
                <Image
                    style={styles.profilePhoto}
                    source={require('../assets/donkey_profile.png')}
                />

                <View style={styles.inputField}>
                    <TextInput
                        style={{flex: 1}}
                        onChangeText={setCurrentComment}
                        placeholder=" Add comment "
                    />

                    <Button
                        style={{flex: 1}}
                        onPress={() => addComment(currentComment)}
                        title="Post"
                        color="gray"
                    />
                </View>
            </View>
        </View>

        


/* handleDelete() {
    Alert.alert(
      "Confirm delete",
      "Are you sure you want to delete?",
      [
        {
          text: "Yes",
          onPress: () => this.props.deleteAction(this.props.data)
        },
        { text: "No", onPress: () => null }
      ],
      true
    );
    this.setState({ menuVisible: false });
  } */
        
    )
}
/* 
<View>
    <SafeAreaView style={styles.commentStyling}>
        <FlatList 
            data={commentsState} 
            renderItem={renderComment} 
            keyExtractor={item => item.comment} 
        />
    </SafeAreaView>

    <View style={styles.comment}>
        <Image
            style={styles.profilePhoto}
            source={get_pic("https://images2.alphacoders.com/219/219782.jpg")}
        />

        <View style={styles.inputField}>
            <TextInput
                style={{flex: 1}}
                onChangeText={setCurrentComment}
                placeholder=" Add comment "
            />

            <Button
                style={{flex: 1}}
                onPress={()=>addComment(currentComment)}
                title="Post"
                color="gray"
            />
        </View>
    </View>
</View> */