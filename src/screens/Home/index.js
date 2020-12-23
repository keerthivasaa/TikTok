import React from 'react';
import { FlatList, SafeAreaView, Dimensions} from 'react-native';

import Post from '../../components/Post';
import posts from '../../../data/posts';

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data= {posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator = {false}
        snapToInterval = {Dimensions.get('window').height-81}
        snapToAlignment = {'start'}
        decelerationRate = {'fast'}
     />
    </SafeAreaView>
  );
}

export default Home;