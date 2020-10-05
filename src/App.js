/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hyperlink from 'react-native-hyperlink';

const App = () => {
  
  return (
    <ScrollView>
      <View style={styles.container}>

     <Hyperlink linkDefault={ true }>
      https://www.clarusway.com 
       
       </Hyperlink> 
    
    
   
     
        <Text style={styles.news}>News</Text>
      
        <View style={styles.sections}>
          <Image
            style={styles.images}
            source={require("./img/eu2.jpg")} /> 
          <Text><Text style={{ fontWeight: "bold" }}>President of the European Commission Ursula </Text>European
           Commission President Ursula von der Leyen is self-isolating  participating in a meeting that was 
           attended by a person who subsequently tested positive for Covid-19, she announced on Twitter.</Text>
        </View>


        <View style={styles.sections}>
          <Image
            style={styles.images}
            source={require("./img/airbus.jpg")}
            />
          <Text><Text style={{ fontWeight: "bold" }}>(CNN) </Text> — It looks like a spaceship, runs on fuel that up until a few years ago experts were calling "crazy," and has barely left the drawing board, but in theeyes of one of the world's leading aircraft manufacturers.</Text>
        </View>

        <View style={styles.sections}>
          <Image
            source={require("./img/sport.jpg")}
            style={styles.images}
          />
          <Text style={{ fontWeight: "bold" }}>Sam Burgess retired in 2019 and took up </Text>
          <Text>Sam Burgess has stepped down from his coaching role with the South Sydney Rabbitohs following what the club calls "very concerning" allegations against the team's former star player.</Text>


        </View>

      </View>
    </ScrollView>

  )

};


const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    padding:10
  },
  news: {
    fontSize: 25,
    fontWeight: "bold",
    // marginLeft: 5,
  },
  sections: {
    borderWidth: 1,
    borderColor: "rgba(149, 165, 166,0.5)",
    
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    
  },

  images: {
    alignItems:"center",
    resizeMode: "cover",
    width: "auto",
    height: 260,
    //  marginLeft:5,
    //  marginTop:5,
    borderRadius: 10

  }



})







export default App;
