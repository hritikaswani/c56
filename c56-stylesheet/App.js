import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import Appheader from './components/Appheader'



export default class App extends React.Component {
  render() {
    return (
      <View>
       <Appheader />
        <SoundButton />
      </View>
    );
  }
}

