

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
</View>