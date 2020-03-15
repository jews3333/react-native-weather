import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    "Thunderstorm" : {
        gradient: ["#0F2027","#203A43","#2C5364"]
    },
    "Drizzle" : {
        gradient: ["#159957","#155799"]
    },
    "Rain" : {
        gradient: ["#000046","#1CB5E0"]
    },
    "Snow" : {
        gradient: ["#56CCF2","#2F80ED"]
    },
    "Mist" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Smoke" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Haze" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Dust" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Fog" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Sand" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Ash" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Squall" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Tornado" : {
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    "Clear" : {
        gradient: ["#2980B9","#6DD5FA","#FFFFFF"]
    },
    "Clouds" : {
        gradient: ["#7F7FD5","#86A8E7","#FFFFFF"]
    }
}

export default function Weather({temp, condition, icon, description}){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={style.container}>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <Image source={{uri:`http://openweathermap.org/img/wn/${icon}@2x.png`}} style={style.icon} />
                <Text style={style.temp}>{temp} <Text style={style.unit}>℃</Text></Text>
            </View>
            <View style={style.container}>
                <Text style={style.title}>{condition}</Text>
                <Text style={style.subtitle}>{description}</Text>
            </View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 50,
        color: "#fff"
    },
    title : {
        color: "#fff",
        fontSize: 24
    },
    subtitle : {
        color: "#fff",
        fontSize: 18
    },
    icon: {
        width: 100,
        height: 100,
        resizeMode:"cover"
    },
    unit: {
        fontSize: 20
    }
});

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}