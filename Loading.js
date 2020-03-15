import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return (
        <LinearGradient style={style.contrainer} colors={["#8360c3","#2ebf91"]}>
            <Text style={style.text}>React Weather</Text>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    contrainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    }
});