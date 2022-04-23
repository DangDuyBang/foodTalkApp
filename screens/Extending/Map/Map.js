import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, SafeAreaView, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import TextButton from 'react-native-button';
import { Ionicons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'
import useMapHooks from './hooks/useMapHooks';

const locationDelta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
const googleApiKey = 'AIzaSyCc-7cU3-_x1VTV5eW3g2pVnl3vi9lvv7w';

function IMLocationSelectorModal({ route, navigation }) {
  const { onCancel, isVisible, onDone } = route.params
  const ref = useRef(null)
  const { region, setRegion, address, setAddress, onMapMarkerDragEnd, setLocationDetails, onLocationChange, onPressClearButton
  } = useMapHooks(ref)

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onCancel}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBarContainer}>
          <View style={styles.leftButtonContainer}>
            <TextButton style={styles.buttonText} onPress={() => navigation.goBack()}>
              Cancel
            </TextButton>
          </View>
          <View style={styles.navBarTitleContainer} />

          <View style={styles.rightButtonContainer}>
            <TextButton
              style={styles.buttonText}
              onPress={() => {
                onDone(address, region)
                navigation.goBack()
              }}>
              Done
            </TextButton>
          </View>
        </View>
        <GooglePlacesAutocomplete
          placeholder={'Enter location address'}
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          ref={ref}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => {
            const { formatted_address } = details;
            setAddress(formatted_address);
            //onChangeLocation(formatted_address);
            console.log(details.geometry);
            setLocationDetails(data, details);
          }}
          renderRightButton={() => (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={onPressClearButton}
            >
              <FontAwesome
                name="remove"
                size={15}
                style={styles.fabButton}
              />
            </TouchableOpacity>
          )}
          getDefaultValue={() => ''}

          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: googleApiKey,
            language: 'en',
          }}
          styles={{
            container: styles.placesAutocompleteContainer,
            textInputContainer: styles.placesAutocompleteTextInputContainer,
            textInput: styles.placesAutocompleteTextInput,
            description: styles.placesAutocompletedDescription,
            predefinedPlacesDescription: styles.predefinedPlacesDescription,
            poweredContainer: styles.predefinedPlacesPoweredContainer,
          }}
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            type: 'food'
          }}
          GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: ['formatted_address', 'geometry', 'name']
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        />

        <MapView
          style={styles.mapContainer}
          provider={PROVIDER_GOOGLE}
          region={{
            ...region,
            ...locationDelta,


          }}
          zoomControlEnabled={true}
        >
          <Marker
            draggable={true}
            onDragEnd={onMapMarkerDragEnd}
            coordinate={region}
          />
        </MapView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundColor,
  },
  //
  navBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    paddingVertical: 10,
    // height: 25,
    width: '100%',
    paddingHorizontal: 10,
    //backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundColor,
    zIndex: 1,
  },
  navBarTitleContainer: {
    flex: 5,
  },
  leftButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    //color: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
    fontWeight: '600',
  },
  // GooglePlacesAutocomplete
  placesAutocompleteContainer: {
    height: '50%',
    width: '100%',
    position: 'absolute',
    top: 36,
    backgroundColor: 'transparent',
    zIndex: 2,
    paddingLeft: 8,
    paddingRight: 8,
    //backgroundColor: appStyles.colorSet[colorScheme].whiteSmoke,
  },
  placesAutocompleteTextInputContainer: {
    width: '100%',
    //backgroundColor: appStyles.colorSet[colorScheme].hairlineColor,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  placesAutocompleteTextInput: {
    //backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundColor,
    //color: appStyles.colorSet[colorScheme].mainTextColor,
  },
  placesAutocompletedDescription: {
    fontWeight: '400',
    //color: appStyles.colorSet[colorScheme].mainSubtextColor,
  },
  predefinedPlacesDescription: {
    // color: appStyles.colorSet[colorScheme].mainSubtextColor,
  },
  predefinedPlacesPoweredContainer: {
    //backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundColor,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: appStyles.colorSet[colorScheme].whiteSmoke,
  },

  clearButton: {
    top: 14,
    right: 20,
  },

  fabButton: {
    color: 'red',
  }
});

export default IMLocationSelectorModal;
