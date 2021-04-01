import { AsyncStorage } from 'react-native';

const _storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(
            key,
            value
        );
        console.log(`Saved value succesfuly ${key} => ${value}`)

    } catch (error) {
        // Error saving data
    }
};

const _retrieveData = async (key: string): Promise<string> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return(value)
      }
    } catch (error) {
      return(error)
    }
  };

export {_retrieveData, _storeData}