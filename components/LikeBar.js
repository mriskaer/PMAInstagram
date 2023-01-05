import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from '../StyleSheet';
import { get_pic } from '../Util';

const notLikedPhoto = require('../assets/emptyheart.png')
const likedPhoto = require('../assets/fullheart.png')

export default function LikeBar(props) {
    const [imageUri, setImageUri] = useState(notLikedPhoto);
    const [likedState, setLikedState] = useState(false);

    const likePhoto = () => {
        if (likedState == false) {
            setLikedState(true)
            setImageUri(likedPhoto)
        } else {
            setLikedState(false)
            setImageUri(notLikedPhoto)
        }
    }

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => likePhoto()}>
                    <Image
                        style={styles.bottomHeart}
                        source={imageUri}
                    />
                </TouchableOpacity>

                <Image
                    style={styles.bottomLogo}
                    source={get_pic("https://cdn.iconscout.com/icon/free/png-256/comment-3251596-2724645.png")}
                />
                <Image
                    style={styles.bottomLogo}
                    source={require('../assets/paperplane.png')}
                />
            </View>

            <Text style={{ marginTop: 10 }}>{props.likes}</Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>{props.user}</Text>
                <Text style={{ marginLeft: 5 }}>{props.description}</Text>
            </View>
        </View>

    )
}