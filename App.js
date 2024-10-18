import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.subContainer}>
        <Text style={styles.textStyle} > Test TeXT </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: 'black',
    width: '60%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  textStyle: {
    color: "white"
  }
});
