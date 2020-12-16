import React, {useState} from 'react';
import {SafeAreaView,Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import Video from 'react-native-video';

const Post = () => {

const [paused, setPaused] = useState(false);

const onPlayPausePress = () => {
    setPaused(!paused);
};

  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video 
            source = {{uri: 'https://ak.picdn.net/shutterstock/videos/1059642611/preview/stock-footage-mental-health-animation-with-brain-lifting-dumbbells-and-bulb-k-video-animated.webm'}}
            style = {styles.video}
            resizeMode = {'cover'}
            repeat = {true}
            paused = {paused}
        />
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Post;