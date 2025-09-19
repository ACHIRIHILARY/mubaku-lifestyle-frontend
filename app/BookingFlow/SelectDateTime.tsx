import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type SelectDateTimeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectDateTime'>;
type SelectDateTimeRouteProp = RouteProp<RootStackParamList, 'SelectDateTime'>;

// Mock available dates and times
const availableDates = [
  { id: '1', date: 'Today', fullDate: '2024-01-15', day: 'Mon' },
  { id: '2', date: 'Tomorrow', fullDate: '2024-01-16', day: 'Tue' },
  { id: '3', date: 'Jan 17', fullDate: '2024-01-17', day: 'Wed' },
  { id: '4', date: 'Jan 18', fullDate: '2024-01-18', day: 'Thu' },
  { id: '5', date: 'Jan 19', fullDate: '2024-01-19', day: 'Fri' },
];

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function SelectDateTime() {
  const navigation = useNavigation<SelectDateTimeNavigationProp>();
  const route = useRoute<SelectDateTimeRouteProp>();
  const { agentId, serviceName } = route.params;

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      const selectedDateObj = availableDates.find(d => d.id === selectedDate);
      const dateTimeString = `${selectedDateObj?.fullDate} at ${selectedTime}`;
      
      navigation.navigate('ChooseLocation', {
        agentId,
        serviceName,
        dateTime: dateTimeString,
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
        <Text style={styles.headerTitle}>Select Date & Time</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceTitle}>{serviceName}</Text>
          <Text style={styles.serviceSubtitle}>Choose your preferred date and time</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
            {availableDates.map((date) => (
              <TouchableOpacity
                key={date.id}
                style={[
                  styles.dateCard,
                  selectedDate === date.id && styles.selectedDateCard
                ]}
                onPress={() => setSelectedDate(date.id)}
              >
                <Text style={[
                  styles.dateDay,
                  selectedDate === date.id && styles.selectedDateText
                ]}>
                  {date.day}
                </Text>
                <Text style={[
                  styles.dateText,
                  selectedDate === date.id && styles.selectedDateText
                ]}>
                  {date.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeGrid}>
            {availableTimes.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeCard,
                  selectedTime === time && styles.selectedTimeCard
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedTimeText
                ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            (!selectedDate || !selectedTime) && styles.disabledButton
          ]}
          onPress={handleNext}
          disabled={!selectedDate || !selectedTime}
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
    marginBottom: 16,
  },
  dateScroll: {
    marginBottom: 8,
  },
  dateCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  selectedDateCard: {
    backgroundColor: '#2D1A46',
  },
  dateDay: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D1A46',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: '48%',
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
  selectedTimeCard: {
    backgroundColor: '#2D1A46',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D1A46',
  },
  selectedTimeText: {
    color: '#FFFFFF',
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
