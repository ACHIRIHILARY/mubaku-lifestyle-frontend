import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type BookingStatusNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookingStatus'>;
type BookingStatusRouteProp = RouteProp<RootStackParamList, 'BookingStatus'>;

const statusSteps = [
  { id: 1, title: 'Booked', description: 'Your booking is confirmed', completed: true },
  { id: 2, title: 'In Progress', description: 'Service is being provided', completed: false },
  { id: 3, title: 'Completed', description: 'Service completed successfully', completed: false },
];

export default function BookingStatus() {
  const navigation = useNavigation<BookingStatusNavigationProp>();
  const route = useRoute<BookingStatusRouteProp>();
  const { bookingId } = route.params;

  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const handleStarPress = (starRating: number) => {
    setRating(starRating);
  };

  const handleSubmitReview = () => {
    // Mock review submission
    navigation.navigate('Home');
  };

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking Status</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.successCard}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successTitle}>Booking Confirmed!</Text>
          <Text style={styles.bookingId}>Booking ID: {bookingId}</Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.cardTitle}>Progress Tracker</Text>
          
          {statusSteps.map((step, index) => (
            <View key={step.id} style={styles.stepContainer}>
              <View style={styles.stepIndicator}>
                <View style={[
                  styles.stepCircle,
                  step.completed && styles.completedStep
                ]}>
                  {step.completed ? (
                    <Text style={styles.checkmark}>✓</Text>
                  ) : (
                    <Text style={styles.stepNumber}>{step.id}</Text>
                  )}
                </View>
                {index < statusSteps.length - 1 && (
                  <View style={[
                    styles.stepLine,
                    step.completed && styles.completedLine
                  ]} />
                )}
              </View>
              <View style={styles.stepContent}>
                <Text style={[
                  styles.stepTitle,
                  step.completed && styles.completedText
                ]}>
                  {step.title}
                </Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.cardTitle}>Rate Your Experience</Text>
          
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}
                style={styles.starButton}
              >
                <Text style={[
                  styles.star,
                  star <= rating && styles.selectedStar
                ]}>
                  ⭐
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.reviewInput}
            placeholder="Share your experience with others..."
            placeholderTextColor="#999"
            value={review}
            onChangeText={setReview}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={[
              styles.submitButton,
              (!rating || !review) && styles.disabledButton
            ]}
            onPress={handleSubmitReview}
            disabled={!rating || !review}
          >
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleBackToHome}
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
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
  successIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 8,
  },
  bookingId: {
    fontSize: 16,
    color: '#666',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stepIndicator: {
    alignItems: 'center',
    marginRight: 16,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedStep: {
    backgroundColor: '#4CAF50',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepNumber: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepLine: {
    width: 2,
    height: 30,
    backgroundColor: '#E0E0E0',
    marginTop: 8,
  },
  completedLine: {
    backgroundColor: '#4CAF50',
  },
  stepContent: {
    flex: 1,
    paddingTop: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  completedText: {
    color: '#2D1A46',
  },
  stepDescription: {
    fontSize: 14,
    color: '#999',
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  starButton: {
    padding: 8,
  },
  star: {
    fontSize: 32,
    opacity: 0.3,
  },
  selectedStar: {
    opacity: 1,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    height: 100,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#2D1A46',
    borderRadius: 25,
    paddingVertical: 16,
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
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#F4A896',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
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
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
