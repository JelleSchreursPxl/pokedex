import React from 'react'
import { View, Text, StatusBar, Image, Button, SafeAreaView, StyleSheet} from 'react-native'
import { useEffect, useState, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { shareAsync } from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'
import { Icon } from '@rneui/themed'

const CameraView = () => {
  let camerRef = useRef<Camera>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<boolean>();
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean>();
  const [photo, setPhoto] = useState<any>();

  useEffect(() => {
    (async () => {
      const cameraPersmission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const galleryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPersmission.status === 'granted');
      setHasMicrophonePermission(microphonePermission.status === 'granted');
      setHasGalleryPermission(galleryPermission.status === 'granted');
    })();
  }, [])

  if(hasCameraPermission === undefined){
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>No access to camera</Text>
  } else if (!hasMicrophonePermission) {
    return <Text>No access to microphone</Text>
  } else if (!hasGalleryPermission) {
    return <Text>No access to gallery</Text>
  } 

  const takePicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
      const newPic = await camerRef.current?.takePictureAsync(options);
      setPhoto(newPic);
    };

  if(photo){
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    }
    let savePic = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden={true} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{uri: "data:image/jpg;base64," + photo.uri}} style={{width: 300, height: 300}} />
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', 
                         alignItems: 'center', width: 160, marginBottom: 8,
                         borderRadius: 48, paddingHorizontal: 24, 
                         paddingVertical: 8, borderColor: '#007bff', borderWidth: 1 }}>
            <Icon name="share" type="font-awesome-5" size={16} />
            <Button onPress={sharePic} title='Share'/>
          </View>
          {hasGalleryPermission ? 
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', 
                          alignItems: 'center', width: 160, marginBottom: 8,
                          borderRadius: 48, paddingHorizontal: 24, 
                          paddingVertical: 8, borderColor: '#007bff', borderWidth: 1 }}>
            <Icon name="save" type="font-awesome-5" size={16} />
            <Button onPress={savePic} title='Save'/>
          </View> : undefined }
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', 
                          alignItems: 'center', width: 160, marginBottom: 8,
                          borderRadius: 48, paddingHorizontal: 24, 
                          paddingVertical: 8, borderColor: '#007bff', borderWidth: 1 }}>
            <Icon name="eraser" type="font-awesome-5" size={16} />
            <Button onPress={() => setPhoto(undefined)} title='Discard'/>
          </View>
        </View>
      </SafeAreaView>
    )
  }
  

    return (
      <Camera ref={camerRef} style={{ flex: 1 }} type={CameraType.back}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignSelf: 'flex-end', alignContent: 'center',
                alignItems: 'center', borderRadius: 40, backgroundColor: 'white',
                width: 80, height: 80, marginBottom: 24, marginHorizontal: 168 }}>
            <Button onPress={takePicture} title=''/>
          </View>
        </View>
        <StatusBar hidden={true} />
      </Camera>
    )
}

export default CameraView
