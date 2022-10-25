import styles from "../StyleSheet";
import { get_pic } from "../Util";
import { View, Image } from "react-native";


//var comments = [];

//actual post
function Post (props){
    return(
    <View style={{flex: 6}}>
        <Image
        style={styles.postImg}
        source={get_pic(props.post_image)}
        />
    </View>
    )
}
export default Post;