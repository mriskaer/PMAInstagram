import { View, Button, SafeAreaView, FlatList, commentsState, renderComment, Image, TextInput, Text, Alert } from "react-native";
import styles from "../StyleSheet";
import { get_pic } from "../Util";
import { useState } from "react";
import { useContext } from "react";
import { CommentContext } from "../appContext"


export default function CommentScreen({ navigation, route }) {

    //whatever is in the commentfield
    const [currentComment, setCurrentComment] = useState("");

    //we get the getter and setter functions from the context
    const [getComments, setComments] = useContext(CommentContext);

    //creates new id for the new comment
    function new_comment_id() {
        return (
            (Math.max(...getComments.map((x) => parseInt(x["comment_id"]))) + 1).toString()
        )
    }

    //replacing the section with all old, and the new comment
    const addComment = (message) => {
        if (message != "") {
            setComments(
                [...getComments,
                {
                    post_id: route.params.post_id,
                    comment_id: new_comment_id(),
                    user: "donkey",
                    comment: message
                }
                ]
            );
        }
        setCurrentComment("");
    }

    function removeComment(comment_id) {
        setComments(getComments.filter((x) => x.comment_id != comment_id));
    }

    return (
        <View style={styles.screenDefault}>
            <FlatList
                data={getComments.filter((ele) => (ele["post_id"] == route.params.post_id))}

                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Text style={styles.title}>
                            {item.user}
                        </Text>
                        <Text onPress={() => removeComment(item.comment_id)} style={styles.comment} >
                            {item.comment}
                        </Text>
                    </View>
                }
                keyExtractor={item => item.comment_id}
            />

            <View style={styles.comment}>
                {<Image
                    style={styles.profilePhoto}
                    source={get_pic("https://images2.alphacoders.com/219/219782.jpg")}
                />}

                <View style={styles.inputField}>
                    <TextInput
                        style={{ flex: 1 }}
                        onChangeText={setCurrentComment}
                        placeholder=" Add comment "
                        value={currentComment}
                    />
                    <Button
                        style={{ flex: 1 }}
                        onPress={() => addComment(currentComment)}
                        title="Post"
                        color="gray"
                    />
                </View>
            </View>
        </View>



    )
}
