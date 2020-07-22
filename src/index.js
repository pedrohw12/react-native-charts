import React from 'react';
import { StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import htmltest from './view/htmltest';

const App = () => {
  
  return (
    <WebView
      style={styles.container}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{uri: 'https://youthful-knuth-3d64ac.netlify.app/'}}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});
