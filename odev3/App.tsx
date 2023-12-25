import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Friday, 15 Dec</Text>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View>
        <Text style={styles.head}>Learn</Text>
        <Text style={styles.description}>Choose part of the body</Text>
      </View>
      <View style={[styles.cardStyle, {backgroundColor: '#eb7662'}]}>
        <Text style={styles.cardTextFirst}>Head & Face</Text>
        <Text style={styles.cardTextSec}>11 diseases</Text>
      </View>
      <View style={[styles.cardStyle, {backgroundColor: '#8dc5bc'}]}>
        <Text style={styles.cardTextFirst}>Back & Neck</Text>
        <Text style={styles.cardTextSec}>9 diseases</Text>
      </View>
      <View style={[styles.cardStyle, {backgroundColor: '#f3982f'}]}>
        <Text style={styles.cardTextFirst}>Elbow & Shoulders</Text>
        <Text style={styles.cardTextSec}>12 diseases</Text>
      </View>
      <View style={[styles.cardStyle, {backgroundColor: '#327389'}]}>
        <Text style={styles.cardTextFirst}>Hand & Arm</Text>
        <Text style={styles.cardTextSec}>2 diseases</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  searchBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  searchText: {
    fontSize: 15,
    color: 'grey',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  description: {
    marginVertical: 10,
    marginLeft: 20,
  },
  cardStyle: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
   padding: 20
  },
  cardTextFirst: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardTextSec: {
    color: 'white',
  },
});
