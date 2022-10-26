import React from 'react';
import {Text, View} from 'react-native';

import styles from "../StyleSheet";

export default function Comment({item}){
    return(
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.user}
      </Text>
      <Text style={styles.comment}>
        {item.comment}
      </Text>
    </View>
    );
  }

