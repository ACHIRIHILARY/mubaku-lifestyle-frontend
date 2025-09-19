import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type ChooseLocationNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChooseLocation'>;
type ChooseLocationRouteProp = RouteProp<RootStackParamList, 'ChooseLocation'>;

const locationOptions = [
  {
    id: 'home',
    title: 'At Your Home',
    description: 'Agent comes to your location',
    icon: '🏠',
    price: '+$20 travel fee',
  },
  {
    id: 'shop',
    title: 'At the Shop',
    description: 'Visit the agent\'s location',
    icon: '🏪',
    price: 'No extra fee',
  },
];

export default function ChooseLocation() {
  const navigation = useNavigation<ChooseLocationNavigationProp>();
  const route = useRoute<ChooseLocationRouteProp>();
  const { agentId, serviceName, dateTime } = route.params;

  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleNext = () => {
    if (selectedLocation) {
      const locationData = locationOptions.find(loc => loc.id === selectedLocation);
      navigation.navigate('BookingSummary', {
        agentId,
        serviceName,
        dateTime,
        location: locationData?.title || '',
      });
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Location</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceTitle}>{serviceName}</Text>
          <Text style={styles.serviceSubtitle}>{dateTime}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Where would you like the service?</Text>
          
          {locationOptions.map((location) => (
            <TouchableOpacity
              key={location.id}
              style={[
                styles.locationCard,
                selectedLocation === location.id && styles.selectedLocationCard
              ]}
              onPress={() => setSelectedLocation(location.id)}
            >
              <View style={styles.locationIcon}>
                <Text style={styles.iconText}>{location.icon}</Text>
              </View>
              <View style={styles.locationInfo}>
                <Text style={[
                  styles.locationTitle,
                  selectedLocation === location.id && styles.selectedText
                ]}>
                  {location.title}
                </Text>
                <Text style={[
                  styles.locationDescription,
                  selectedLocation === location.id && styles.selectedDescriptionText
                ]}>
                  {location.description}
                </Text>
                <Text style={[
                  styles.locationPrice,
                  selectedLocation === location.id && styles.selectedPriceText
                ]}>
                  {location.price}
                </Text>
              </View>
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioButton,
                  selectedLocation === location.id && styles.selectedRadio
                ]}>
                  {selectedLocation === location.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            !selectedLocation && styles.disabledButton
          ]}
          onPress={handleNext}
          disabled={!selectedLocation}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: '#2D1A46',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  serviceInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 20,
  },
  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  selectedLocationCard: {
    backgroundColor: '#2D1A46',
  },
  locationIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
  },
  locationInfo: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 4,
  },
  selectedText: {
    color: '#FFFFFF',
  },
  locationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  selectedDescriptionText: {
    color: '#FFFFFF',
    opacity: 0.9,
  },
  locationPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
  },
  selectedPriceText: {
    color: '#F4A896',
  },
  radioContainer: {
    marginLeft: 16,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    borderColor: '#FFFFFF',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  nextButton: {
    backgroundColor: '#2D1A46',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
