import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";


const Cards = ({ daten }) => {

    return (
        <View style={styles.container}>
            <Image source={{uri:daten.imageUrl}}
            style={styles.image}
            />
            <Text style={styles.title}>{daten.title}</Text>
            <Text style={styles.desc}>{daten.description}</Text>
        </View>
    )
}

// id: 0,
//     author: 'Omkar Godbole',
//     title: 'Bulls Exit BitMEX Bitcoin Futures Market',
//     description:
//       'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
//     imageUrl:
//       'https://


export default Cards;



const styles = StyleSheet.create({
    container: {
        // flex:1,
        // justifyContent:"center",
        borderWidth: 1,
        width: Dimensions.get("window").width * 0.95,
        
        borderRadius: 10,
        borderColor: "gray",
        margin:10,
        padding:10
        

    },
    image:{
        alignSelf:"center",
        width:Dimensions.get("window").width *0.90,
        height:Dimensions.get("window").height*0.25,
        borderRadius:10
    },
    title:{
        fontWeight:"bold",
        fontSize:17
    },
    desc:{
        textAlign:"justify"
    }
})