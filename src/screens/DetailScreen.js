import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,SafeAreaView ,Text,FlatList,StatusBar,Platform,Image} from 'react-native'
import {Card} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize';
import BackButton from '../components/BackButton';
import users from "../data"



const DetailScreen=({navigation,route})=>{
    const data = route.params;
return(
    <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
    <BackButton goBack={navigation.goBack} /> 
        {console.log(data)}
     <Image source={{uri:data.url}} style={{width:100,height:100,marginTop:"10%",marginLeft:"5%"}}/>
    <Text style={{marginLeft:"5%",fontSize:30}}>{data.job}</Text>
    <Text style={{marginLeft:"5%"}}>{data.company}</Text>
    <Text style={{marginLeft:"5%"}}>Ratings : {data.rating}</Text>
    <Text style={{marginLeft:"5%"}}>Reviews : {data.review}</Text>
    <Text style={{marginLeft:"5%"}}>{data.postDays} posted ago</Text>
    </View>
)
}

export default DetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? (StatusBar.currentHeight)+RFValue(15): RFValue(35)
      },
    
})