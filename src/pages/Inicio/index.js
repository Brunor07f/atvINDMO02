import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'


export default function Inicio () {
const navigation = useNavigation();

     return(
         <SafeAreaView style={StyleSheet.container}>
             <Text>Olá</Text>
             <Button title='Clicar' />

         </SafeAreaView>
     )
 }


 const styles = StyleSheet.create({
     conatiner:{
        flex: 3,
        alignItems: 'center',
         ustifyContent: 'center'
         },
 })