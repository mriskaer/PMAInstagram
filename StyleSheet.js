import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'left',
      justifyContent: 'center',
      marginTop: '20%',
      marginBottom: '30%',
      marginLeft: 20
    },
  
    profilePhoto: {
      width: 40,
      height: 40,
      borderRadius: 200,
      marginRight: 10,
    },
  
    dots: {
      width: 40,
      height: 40, 
      marginLeft: 60
    },
  
    postImg: {
      width: 330,
      height: 330,
    }, 
  
    profileView: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10
    },
  
    postDescription: {
      flex: 4
    },
  
    bottomLogo: {
      width: 30,
      height: 30,
    }, 
  
    bottomHeart: {
      width: 27,
      height: 25
    },
  
    comment: {
      flexDirection: 'row',
    },
  
    inputField: {
      borderRadius: 20,
      width: 280,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'gray',
      paddingLeft: 10,
      paddingRight: 10
    },
  
    title: {
      fontWeight: 'bold',
      marginRight: 5
    },
  
    item: {
      marginTop: 5,
      flexDirection: 'row'
    },
  
    commentStyling: {
      height: 170
    }
  });

export default styles;