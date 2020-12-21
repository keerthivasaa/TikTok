import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Post = (props) => {

  const {post} = props;

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{ uri: post.videoUri }}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image style={styles.profilePicture} source={{ uri: post.user.imageUri }} />

          <View style={styles.iconContainer}>
            <AntDesign name={'heart'} size={30} color="white" />
            <Text style={styles.statusLabel}>{post.likes}</Text>
          </View>

          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={30} color="white" />
            <Text style={styles.statusLabel}>{post.comments}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={25} color="white" />
            <Text style={styles.statusLabel}>{post.share}</Text>
          </View>

        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={24} color="white" />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
          </View>
          <Image style={styles.songImage} source={{ uri: post.songImage }}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Post;