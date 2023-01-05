import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from "../StyleSheet";
import { get_pic } from "../Util";

export default function ProfileHeader(props) {
    return (
        <View style={styles.profileHeader}>
            <Image
                style={styles.profilePhoto}
                source={get_pic(props.profile_pic)}
            />
            <View>
                <Text
                    style={{ fontWeight: 'bold' }}>
                    {props.user}
                </Text>
                <Text>
                    {props.location}
                </Text>
            </View>
            <Image
                style={styles.dots}
                source={get_pic("https://apisproductions.com/wp-content/uploads/2020/02/istockphoto-957096060-170667a.jpg")}
            />
        </View>
    )
}
