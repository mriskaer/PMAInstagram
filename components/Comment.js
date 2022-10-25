import React from 'react';
import {Text, View} from 'react-native';

import styles from "../StyleSheet";

function Comment(props){
    return(
    <View style={styles.item}>
      <Text style={styles.title}>
        {props.user}
      </Text>
      <Text style={styles.comment}>
        {props.comment}
      </Text>
    </View>
    );
  }

