import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Header from '../../components/Header';
import Button from '../../components/Button';
import styles from './style'
import { Props } from './types';

const DetailScreen = ({route}: Props) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item.name}
            source={item.image}
            style={{width: width, height: width}}
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>About</Text>
          <Text style={styles.text}>{item.about}</Text>
        </Animated.View>
      </View>
      <View style={{marginBottom: 20}}> 
        <Button />
      </View>
    </View>
  );
};

export default DetailScreen;

