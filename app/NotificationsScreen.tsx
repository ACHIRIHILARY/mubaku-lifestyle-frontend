import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NotificationsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notifications'>;

// Mock notifications data
const notifications = [
  {
    id: '1',
    type: 'booking',
    title: 'Booking Confirmed',
    message: 'Your appointment with Sarah Johnson has been confirmed for tomorrow at 2:00 PM.',
    time: '2 hours ago',
    read: false,
    icon: '📅',
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment Successful',
    message: 'Payment of $100 has been processed successfully for your hair styling service.',
    time: '1 day ago',
    read: false,
    icon: '💳',
  },
  {
    id: '3',
    type: 'booking',
    title: 'Service Completed',
    message: 'Your makeup session with Maria Garcia has been completed. Please rate your experience.',
    time: '2 days ago',
    read: true,
    icon: '✅',
  },
  {
    id: '4',
    type: 'system',
    title: 'Profile Updated',
    message: 'Your profile information has been successfully updated.',
    time: '3 days ago',
    read: true,
    icon: '👤',
  },
  {
    id: '5',
    type: 'booking',
    title: 'Booking Reminder',
    message: 'Don\'t forget your nail appointment with Lisa Chen tomorrow at 10:00 AM.',
    time: '1 week ago',
    read: true,
    icon: '⏰',
  },
  {
    id: '6',
    type: 'payment',
    title: 'Refund Processed',
    message: 'Your refund of $50 has been processed and will appear in your account within 3-5 business days.',
    time: '1 week ago',
    read: true,
    icon: '💰',
  },
  {
    id: '7',
    type: 'system',
    title: 'New Features Available',
    message: 'Check out our new booking features and enhanced user experience.',
    time: '2 weeks ago',
    read: true,
    icon: '🎉',
  },
];

export default function NotificationsScreen() {
  const navigation = useNavigation<NotificationsScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'booking':
        return '#4CAF50';
      case 'payment':
        return '#2196F3';
      case 'system':
        return '#FF9800';
      default:
        return '#666';
    }
  };

  const renderNotification = ({ item }: { item: typeof notifications[0] }) => (
    <TouchableOpacity style={[
      styles.notificationCard,
      !item.read && styles.unreadCard
    ]}>
      <View style={styles.notificationIcon}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={[
            styles.notificationTitle,
            !item.read && styles.unreadTitle
          ]}>
            {item.title}
          </Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <View style={[
          styles.typeIndicator,
          { backgroundColor: getNotificationColor(item.type) }
        ]} />
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.markAllButton}>
          <Text style={styles.markAllText}>Mark All Read</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
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
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  markAllText: {
    fontSize: 14,
    color: '#2D1A46',
    fontWeight: '600',
  },
  notificationsList: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
  },
  unreadCard: {
    backgroundColor: '#F8F9FF',
    borderLeftWidth: 4,
    borderLeftColor: '#2D1A46',
  },
  notificationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  notificationContent: {
    flex: 1,
    position: 'relative',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D1A46',
    flex: 1,
    marginRight: 8,
  },
  unreadTitle: {
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  typeIndicator: {
    position: 'absolute',
    bottom: -8,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  unreadDot: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
  },
});
