import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type ServiceDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ServiceDetail'>;
type ServiceDetailScreenRouteProp = RouteProp<RootStackParamList, 'ServiceDetail'>;

// Mock agent data
const agentDetails = {
  '1': {
    id: '1',
    name: 'Sarah Johnson',
    service: 'Hair Styling',
    rating: 4.9,
    price: '$80',
    image: '👩‍🦰',
    reviews: 127,
    description: 'Professional hair stylist with over 8 years of experience. Specializing in cuts, colors, and styling for all hair types. I use only premium products and stay updated with the latest trends.',
    services: ['Hair Cut', 'Hair Color', 'Hair Styling', 'Hair Treatment'],
    availability: 'Available Today',
    location: 'Downtown Salon',
  },
  '2': {
    id: '2',
    name: 'Maria Garcia',
    service: 'Makeup Artist',
    rating: 4.8,
    price: '$120',
    image: '👩‍🦱',
    reviews: 89,
    description: 'Certified makeup artist specializing in bridal, special events, and photoshoot makeup. I create looks that enhance your natural beauty and make you feel confident.',
    services: ['Bridal Makeup', 'Event Makeup', 'Photoshoot Makeup', 'Makeup Lessons'],
    availability: 'Available Tomorrow',
    location: 'Mobile Service',
  },
  '3': {
    id: '3',
    name: 'Lisa Chen',
    service: 'Nail Technician',
    rating: 4.7,
    price: '$60',
    image: '👩‍🦳',
    reviews: 156,
    description: 'Licensed nail technician with expertise in manicures, pedicures, and nail art. I maintain the highest hygiene standards and use quality products for lasting results.',
    services: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish'],
    availability: 'Available Today',
    location: 'Beauty Studio',
  },
};

export default function ServiceDetailScreen() {
  const navigation = useNavigation<ServiceDetailScreenNavigationProp>();
  const route = useRoute<ServiceDetailScreenRouteProp>();
  const { agentId } = route.params;

  const agent = agentDetails[agentId as keyof typeof agentDetails];

  if (!agent) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Agent not found</Text>
      </SafeAreaView>
    );
  }

  const handleBookService = () => {
    navigation.navigate('SelectDateTime', { 
      agentId: agent.id, 
      serviceName: agent.service 
    });
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
        <Text style={styles.headerTitle}>Service Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.agentHeader}>
          <View style={styles.agentImageContainer}>
            <Text style={styles.agentImage}>{agent.image}</Text>
          </View>
          <View style={styles.agentMainInfo}>
            <Text style={styles.agentName}>{agent.name}</Text>
            <Text style={styles.agentService}>{agent.service}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐ {agent.rating}</Text>
              <Text style={styles.reviewsText}>({agent.reviews} reviews)</Text>
            </View>
            <Text style={styles.availability}>{agent.availability}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{agent.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          <View style={styles.servicesList}>
            {agent.services.map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceText}>• {service}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.locationText}>{agent.location}</Text>
        </View>

        <View style={styles.priceSection}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Starting from</Text>
            <Text style={styles.price}>{agent.price}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handleBookService}>
            <Text style={styles.bookButtonText}>Book Service</Text>
          </TouchableOpacity>
        </View>
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
  agentHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  agentImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  agentImage: {
    fontSize: 50,
  },
  agentMainInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  agentName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 4,
  },
  agentService: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D1A46',
    marginRight: 8,
  },
  reviewsText: {
    fontSize: 14,
    color: '#999',
  },
  availability: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  servicesList: {
    marginTop: 8,
  },
  serviceItem: {
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 16,
    color: '#666',
  },
  locationText: {
    fontSize: 16,
    color: '#666',
  },
  priceSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1A46',
  },
  bookButton: {
    backgroundColor: '#2D1A46',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
