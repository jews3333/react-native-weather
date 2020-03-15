import React from 'react';
import { Alert } from 'react-native';
import Weather from './Weather';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "a7bad3afde160cdf135018676d634cbb";

export default class App extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {
      data:{
        main:{ temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
      icon: weather[0].icon,
      description: weather[0].description
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords: {
          latitude,
          longitude
        }
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Cant not find you!", "so sad...");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, icon, description } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} description={description} condition={condition} icon={icon} />;
  }
}
