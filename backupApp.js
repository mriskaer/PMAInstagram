import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from "./StyleSheet";

/* function get_pic(url) {
  return {uri:url}
} */

/* const Comment = ({user, comment}) => {
  return(
  <View style={styles.item}>
    <Text style={styles.title}>
      {user}
    </Text>
    <Text style={styles.comment}>
      {comment}
    </Text>
  </View>
  );
} */

export default function App() {

  /* const notLikedPhoto = require('./assets/emptyheart.png')
  const likedPhoto = require('./assets/fullheart.png')

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
  } */

  /* var comments = []; */

/*   const renderComment = ({item}) => (
    <Comment 
      comment={item.comment}
      user={item.user}
    />) */
  const [commentsState, setCommentsState] = useState(comments);
  const [currentComment, setCurrentComment] = useState("");

  const addComment = (message) => {
    setCommentsState([...commentsState, {id : message, user: "donkey", comment: message}]);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.profileView}>
        <Image
          style={styles.profilePhoto}
          source={get_pic("https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg")}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold'}}>
            sir_shrek
          </Text>
          <Text>
            The Kingdom of Far Far Away
          </Text>
        </View>
        
        <Image
          style={styles.dots}
          source={get_pic("https://apisproductions.com/wp-content/uploads/2020/02/istockphoto-957096060-170667a.jpg")}
        />
      </View> */}
     {/*  <View style={{flex: 6}}>
        <Image
          style={styles.postImg}
          source={get_pic("https://filmconcertslive.com/wp-content/uploads/2021/11/movie_top_shrek2_1100px.jpg")}
        />
      </View> */}
      <View style={styles.postDescription}>
       {/*  <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> likePhoto()}>
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
            source={require('./assets/paperplane.png')}
          />
        </View>
        <Text style={{marginTop: 10}}>10.598 likes</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>sir_shrek</Text>
          <Text style={{marginLeft: 5}}>Roadtrip to meet the #inlaws</Text>
        </View> */}

        {/* <SafeAreaView style={styles.commentStyling}>
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
        </View> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
