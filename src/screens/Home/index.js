import React from 'react';
import {SafeAreaView,Text} from 'react-native';

import Post from '../../components/Post';

const Post1 = {
  id: 'p1',
  videoUri: 'https://ak.picdn.net/shutterstock/videos/1059642611/preview/stock-footage-mental-health-animation-with-brain-lifting-dumbbells-and-bulb-k-video-animated.webm',
  description: 'Trendy Song',
  songName: 'Yo Yo Horny Singer..!!',
  songImage: 'https://i.pinimg.com/originals/3a/e6/34/3ae6340237477d74a76e6001006644ad.jpg',
  likes: '123',
  comments: '23',
  share: '89',
  user: {
    id: 'u1',
    username: 'keerthi',
    imageUri: 'https://i.pinimg.com/originals/3a/e6/34/3ae6340237477d74a76e6001006644ad.jpg',
  },
}

const Home = () => {
  return (
    <SafeAreaView>
        <Post post = {Post1}/>
    </SafeAreaView>
  );
}

export default Home;