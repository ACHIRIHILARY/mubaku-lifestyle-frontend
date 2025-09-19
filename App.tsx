import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import screens
import SplashScreen from './app/SplashScreen';
import LanguageScreen from './app/LanguageScreen';
import LoginScreen from './app/LoginScreen';
import RegisterScreen from './app/RegisterScreen';
import RoleSelectionScreen from './app/RoleSelectionScreen';
import ClientProfileSetup from './app/ClientProfileSetup';
import AgentProfileSetup from './app/AgentProfileSetup';
import HomeScreen from './app/HomeScreen';
import ServiceDetailScreen from './app/ServiceDetailScreen';
import NotificationsScreen from './app/NotificationsScreen';
import ProfileSettingsScreen from './app/ProfileSettingsScreen';

// BookingFlow screens
import SelectDateTime from './app/BookingFlow/SelectDateTime';
import ChooseLocation from './app/BookingFlow/ChooseLocation';
import BookingSummary from './app/BookingFlow/BookingSummary';
import PaymentScreen from './app/BookingFlow/PaymentScreen';
import BookingStatus from './app/BookingFlow/BookingStatus';

export type RootStackParamList = {
  Splash: undefined;
  Language: undefined;
  Login: undefined;
  Register: undefined;
  RoleSelection: undefined;
  ClientProfileSetup: undefined;
  AgentProfileSetup: undefined;
  Home: undefined;
  ServiceDetail: { agentId: string };
  SelectDateTime: { agentId: string; serviceName: string };
  ChooseLocation: { agentId: string; serviceName: string; dateTime: string };
  BookingSummary: { agentId: string; serviceName: string; dateTime: string; location: string };
  Payment: { bookingData: any };
  BookingStatus: { bookingId: string };
  Notifications: undefined;
  ProfileSettings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="ClientProfileSetup" component={ClientProfileSetup} />
          <Stack.Screen name="AgentProfileSetup" component={AgentProfileSetup} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
          <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
          <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
          <Stack.Screen name="BookingSummary" component={BookingSummary} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="BookingStatus" component={BookingStatus} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
