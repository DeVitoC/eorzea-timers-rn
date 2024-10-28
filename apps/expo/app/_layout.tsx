import { Provider } from 'app/provider';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';

const MainLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
};

export default function Root() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  });

  return (
    <SafeAreaProvider>
      <Provider>
        <MainLayout />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
