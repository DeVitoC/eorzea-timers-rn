import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import secureLocalStorage from 'react-secure-storage';

export const useStorage = {
  get: async (key: string) => {
    if (Platform.OS === 'web') {
      return secureLocalStorage.getItem(key);
    } else {
      return await SecureStore.getItemAsync(key);
    }
  },
  set: async (key: string, value: string) => {
    if (Platform.OS === 'web') {
      return secureLocalStorage.setItem(key, value);
    } else {
      return await SecureStore.setItemAsync(key, value);
    }
  },
  remove: async (key: string) => {
    if (Platform.OS === 'web') {
      return secureLocalStorage.removeItem(key);
    } else {
      return await SecureStore.deleteItemAsync(key);
    }
  },
  clear: async () => {
    if (Platform.OS === 'web') {
      secureLocalStorage.clear();
    } else {
      // TODO: Delete all items from Expo SecureStore
    }
  },
};
