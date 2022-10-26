import { View, Button, SafeAreaView, FlatList, commentsState, renderComment, Image, TextInput, Text } from "react-native";
import styles from "../StyleSheet";
import { get_pic } from "../Util";
import Post from "../components/Post";
import Comment from "../components/Comment";


export default function CommentScreen({navigation, route}){
    return(
        <FlatList
            style={{marginLeft: 20, marginRight: 10}}
            data={route.params.comments} 
            renderItem={({item}) => Comment({item})} 
        />
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