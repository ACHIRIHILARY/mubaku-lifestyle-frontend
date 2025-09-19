import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Mock data
const featuredCategories = [
  { id: '1', name: 'Hair', icon: '💇‍♀️', color: '#FF6B6B' },
  { id: '2', name: 'Nails', icon: '💅', color: '#4ECDC4' },
  { id: '3', name: 'Makeup', icon: '💄', color: '#45B7D1' },
];

const topRatedAgents = [
  {
    id: '1',
    name: 'Sarah Johnson',
    service: 'Hair Styling',
    rating: 4.9,
    price: '$80',
    image: '👩‍🦰',
    reviews: 127,
  },
  {
    id: '2',
    name: 'Maria Garcia',
    service: 'Makeup Artist',
    rating: 4.8,
    price: '$120',
    image: '👩‍🦱',
    reviews: 89,
  },
  {
    id: '3',
    name: 'Lisa Chen',
    service: 'Nail Technician',
    rating: 4.7,
    price: '$60',
    image: '👩‍🦳',
    reviews: 156,
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleAgentPress = (agentId: string) => {
    navigation.navigate('ServiceDetail', { agentId });
  };

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  const handleProfile = () => {
    navigation.navigate('ProfileSettings');
  };

  const renderCategory = ({ item }: { item: typeof featuredCategories[0] }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.color }]}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderAgent = ({ item }: { item: typeof topRatedAgents[0] }) => (
    <TouchableOpacity 
      style={styles.agentCard}
      onPress={() => handleAgentPress(item.id)}
    >
      <View style={styles.agentImageContainer}>
        <Text style={styles.agentImage}>{item.image}</Text>
      </View>
      <View style={styles.agentInfo}>
        <Text style={styles.agentName}>{item.name}</Text>
        <Text style={styles.agentService}>{item.service}</Text>
        <View style={styles.agentRating}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.reviewsText}>({item.reviews} reviews)</Text>
        </View>
        <View style={styles.agentFooter}>
          <Text style={styles.agentPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Good Morning!</Text>
            <Text style={styles.userName}>Welcome back</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={handleNotifications} style={styles.iconButton}>
              <Text style={styles.icon}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfile} style={styles.iconButton}>
              <Text style={styles.icon}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Categories</Text>
          <FlatList
            data={featuredCategories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Rated Agents</Text>
          <FlatList
            data={topRatedAgents}
            renderItem={renderAgent}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
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
    backgroundColor: '#F4A896',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  icon: {
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 12,
  },
  filterButton: {
    backgroundColor: '#2D1A46',
    borderRadius: 25,
    padding: 12,
  },
  filterIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 16,
  },
  categoriesList: {
    paddingRight: 20,
  },
  categoryCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  agentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  agentImage: {
    fontSize: 40,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
    marginBottom: 4,
  },
  agentService: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  agentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D1A46',
    marginRight: 8,
  },
  reviewsText: {
    fontSize: 12,
    color: '#999',
  },
  agentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  agentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1A46',
  },
  bookButton: {
    backgroundColor: '#2D1A46',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
