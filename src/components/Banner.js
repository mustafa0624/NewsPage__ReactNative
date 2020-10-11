import React from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList,Image, Dimensions, ScrollView } from "react-native";



const Banner =({deger})=>{

    return(
        
        <View>
            <Image 
            source={{uri:deger.imageUrl}}
            style={styles.image}
            />
        </View>
        
    )
}





const styles = StyleSheet.create({
    image:{
        width:Dimensions.get("window").width*0.95,
        height:Dimensions.get("window").height*0.30,
        margin:10,
        borderRadius:5
        
    }
})









export default Banner

