import React from 'react';
import { FormSubmit } from './src/Form/FormSubmit';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <FormSubmit/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
