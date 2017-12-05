// Libraries
import {NativeModules} from 'react-native';

// Native Modules
const { RNCloudinary } = NativeModules;


class Cloudinary {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  config(cloudName, apiKey, apiSecret, presetName) {
    return RNCloudinary.config(cloudName, apiKey, apiSecret, presetName);
  }

  uploadImage(uri, transformation) {
    return RNCloudinary.uploadImage(uri, transformation)
  }

}


export default new Cloudinary();
