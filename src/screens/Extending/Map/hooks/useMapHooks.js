import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, SafeAreaView, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import TextButton from 'react-native-button';
import { Ionicons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'

// Geocoder.init('AIzaSyCc-7cU3-_x1VTV5eW3g2pVnl3vi9lvv7w');
const googleApiKey = 'AIzaSyCc-7cU3-_x1VTV5eW3g2pVnl3vi9lvv7w';
function useMapHooks(ref) {

  useEffect(() => {
    Location.setGoogleApiKey(googleApiKey)
    getCurrentPosition();
  }, []);

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [address, setAddress] = useState('');

  const onPressClearButton = () => {
    ref.current?.clear()
  }

  const getCurrentPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    await Location.getCurrentPositionAsync({}).then(location => {
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      onLocationChange({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })

  };

  const onLocationChange = async (location) => {
    try {

      let json = await Location.reverseGeocodeAsync(location, { useGoogleMaps: true });

      if (json) {

        let data = {}
        json.forEach(item => {
          if (item.name && !data.name) {
            data.name = item.name
          }

          if (item.streetNumber && !data.streetNumber) {
            data.streetNumber = item.streetNumber
          }

          if (item.street && !data.street) {
            data.street = item.street
          }

          if (item.district && !data.district) {
            data.district = item.district
          }

          if (item.city && !data.city) {
            data.city = item.city
          }

          if (item.country && !data.country) {
            data.country = item.country
          }

        }
        )
        const address = `${data.name}, ${data.streetNumber}, ${data.street}, ${data.district}, ${data.city}, ${data.country}`
        setAddress(address);
        ref.current?.setAddressText(address)
      }
      //onChangeLocation(formatted_address);
    } catch (error) {
      console.log(error);
      setAddress('');
    }
  }

  const setLocationDetails = (data, details) => {
    const { geometry, name } = details;
    if (geometry) {
      setRegion({
        longitude: geometry.location.lng,
        latitude: geometry.location.lat,
      });
    }
  };

  const onMapMarkerDragEnd = (location) => {
    const region = location.nativeEvent.coordinate;
    setRegion(region);
    onLocationChange(region);
  };

  return ({
    region, setRegion, address, setAddress, onMapMarkerDragEnd, setLocationDetails, onLocationChange, onPressClearButton
  }
  )
}

export default useMapHooks