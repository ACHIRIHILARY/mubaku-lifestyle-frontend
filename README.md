# Mubaku Style - Beauty Services Booking App

A complete React Native (Expo) mobile application for booking beauty services, built with TypeScript and NativeWind (Tailwind CSS). This app connects clients with beauty service providers for hair styling, makeup, nail services, and more.

## 📱 App Overview

**Mubaku Style** is a comprehensive beauty services marketplace where:
- **Clients** can browse and book beauty services from professional agents
- **Agents** can offer their services and manage bookings
- **Complete booking flow** from service selection to payment and reviews

## 🎨 Design & Branding

- **Primary Color**: Peach (#F4A896) - Used for backgrounds and highlights
- **Secondary Color**: Purple (#2D1A46) - Used for buttons and accents
- **Background**: White (#FFFFFF) - Used for cards and clean backgrounds
- **Design Style**: Modern, clean interface with rounded corners and soft shadows

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### Installation & Running
```bash
# Clone the repository
git clone https://github.com/ACHIRIHILARY/mubaku-lifestyle-frontend.git

# Navigate to project directory
cd mubaku-lifestyle-frontend

# Install dependencies
npm install

# Start the development server
npm start
```

After running `npm start`, scan the QR code with Expo Go app on your phone to test the application.

## 📁 Project Structure

```
mubaku-lifestyle-frontend/
├── App.tsx                          # Main app component with navigation setup
├── app/                             # All screen components
│   ├── SplashScreen.tsx            # App launch screen
│   ├── LanguageScreen.tsx          # Language selection
│   ├── LoginScreen.tsx             # User login
│   ├── RegisterScreen.tsx          # User registration
│   ├── RoleSelectionScreen.tsx     # Choose Client or Agent role
│   ├── ClientProfileSetup.tsx      # Client profile creation
│   ├── AgentProfileSetup.tsx       # Agent profile creation
│   ├── HomeScreen.tsx              # Main dashboard
│   ├── ServiceDetailScreen.tsx     # Service details and booking
│   ├── NotificationsScreen.tsx     # User notifications
│   ├── ProfileSettingsScreen.tsx   # User profile and settings
│   └── BookingFlow/                # Booking process screens
│       ├── SelectDateTime.tsx      # Date and time selection
│       ├── ChooseLocation.tsx      # Home or shop location
│       ├── BookingSummary.tsx      # Booking confirmation
│       ├── PaymentScreen.tsx       # Payment processing
│       └── BookingStatus.tsx       # Booking status and reviews
├── tailwind.config.js              # Tailwind CSS configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 📱 Screen-by-Screen Guide

### 1. **SplashScreen.tsx** (`/app/SplashScreen.tsx`)
**What it does**: First screen users see when opening the app
- **Features**: 
  - Peach gradient background
  - "Mubaku STYLE" logo with tagline "Book Your Look."
  - "Get Started" button
- **Navigation**: Takes users to Language Selection
- **When to modify**: Change app branding, logo, or initial messaging

### 2. **LanguageScreen.tsx** (`/app/LanguageScreen.tsx`)
**What it does**: Allows users to select their preferred language
- **Features**:
  - Two language options: English and Français
  - Flag icons for visual identification
  - Selection cards with hover effects
- **Navigation**: Takes users to Login Screen
- **When to modify**: Add more languages or change language options

### 3. **LoginScreen.tsx** (`/app/LoginScreen.tsx`)
**What it does**: User authentication and login
- **Features**:
  - Email and password input fields
  - "Forgot Password" link
  - Login button
  - Link to registration
- **Navigation**: Successful login goes to Home Screen
- **When to modify**: Connect to real authentication API, add social login

### 4. **RegisterScreen.tsx** (`/app/RegisterScreen.tsx`)
**What it does**: New user account creation
- **Features**:
  - Name, email, password, and confirm password fields
  - Registration button
  - Link back to login
- **Navigation**: Takes users to Role Selection
- **When to modify**: Add more user fields, connect to registration API

### 5. **RoleSelectionScreen.tsx** (`/app/RoleSelectionScreen.tsx`)
**What it does**: Users choose between Client or Agent role
- **Features**:
  - Two role cards: Client (book services) and Agent (provide services)
  - Visual icons and descriptions
  - Continue button
- **Navigation**: 
  - Client → ClientProfileSetup
  - Agent → AgentProfileSetup
- **When to modify**: Add more user types or change role descriptions

### 6. **ClientProfileSetup.tsx** (`/app/ClientProfileSetup.tsx`)
**What it does**: Clients complete their profile information
- **Features**:
  - Avatar placeholder with "Add Photo" option
  - Name, phone number, and location fields
  - Save Profile button
- **Navigation**: Takes users to Home Screen
- **When to modify**: Add more client-specific fields, integrate photo upload

### 7. **AgentProfileSetup.tsx** (`/app/AgentProfileSetup.tsx`)
**What it does**: Agents complete their professional profile
- **Features**:
  - Avatar placeholder with "Add Photo" option
  - Name, specialty, experience, and price range fields
  - Save Profile button
- **Navigation**: Takes users to Home Screen
- **When to modify**: Add portfolio upload, certifications, availability settings

### 8. **HomeScreen.tsx** (`/app/HomeScreen.tsx`)
**What it does**: Main dashboard showing available services and agents
- **Features**:
  - Peach header with greeting and user info
  - Search bar with filter icon
  - Featured Categories: Hair, Nails, Makeup
  - Top Rated Agents list with photos, ratings, prices
  - "Book Now" buttons for each agent
- **Navigation**: 
  - Agent cards → ServiceDetailScreen
  - Notification icon → NotificationsScreen
  - Profile icon → ProfileSettingsScreen
- **When to modify**: Add more categories, change agent display, integrate real data
- **Mock Data**: Contains sample agents with ratings, prices, and services

### 9. **ServiceDetailScreen.tsx** (`/app/ServiceDetailScreen.tsx`)
**What it does**: Shows detailed information about a selected agent and their services
- **Features**:
  - Agent photo, name, and rating
  - Service description and offerings
  - Location information
  - Pricing details
  - "Book Service" button
- **Navigation**: Takes users to SelectDateTime (booking flow)
- **When to modify**: Add more agent details, reviews section, photo gallery
- **Mock Data**: Detailed agent profiles with services and descriptions

## 🛒 Booking Flow (5 Screens)

### 10. **SelectDateTime.tsx** (`/app/BookingFlow/SelectDateTime.tsx`)
**What it does**: Users select their preferred date and time
- **Features**:
  - Horizontal scrolling date picker
  - Time slot grid (9 AM - 5 PM)
  - Visual selection indicators
  - Next button (disabled until both selected)
- **Navigation**: Takes users to ChooseLocation
- **When to modify**: Add more time slots, integrate with agent availability
- **Mock Data**: Available dates and time slots

### 11. **ChooseLocation.tsx** (`/app/BookingFlow/ChooseLocation.tsx`)
**What it does**: Users choose service location
- **Features**:
  - Two options: "At Your Home" (+$20 travel fee) or "At the Shop" (no extra fee)
  - Radio button selection
  - Location icons and descriptions
  - Next button
- **Navigation**: Takes users to BookingSummary
- **When to modify**: Add more location options, dynamic pricing

### 12. **BookingSummary.tsx** (`/app/BookingFlow/BookingSummary.tsx`)
**What it does**: Shows complete booking details and pricing
- **Features**:
  - Booking details summary (agent, service, date/time, location)
  - Price breakdown (service fee, travel fee, tax)
  - Total calculation
  - Cancellation policy
  - "Confirm Booking" button
- **Navigation**: Takes users to PaymentScreen
- **When to modify**: Add booking modifications, different pricing structures
- **Mock Data**: Calculates total price based on selections

### 13. **PaymentScreen.tsx** (`/app/BookingFlow/PaymentScreen.tsx`)
**What it does**: Handles payment processing
- **Features**:
  - Payment method selection (Credit Card or Mobile Money)
  - Credit card form (number, expiry, CVV, name)
  - Mobile money phone number input
  - Total amount display
  - "Pay" button
- **Navigation**: Takes users to BookingStatus
- **When to modify**: Integrate real payment processors (Stripe, PayPal, etc.)

### 14. **BookingStatus.tsx** (`/app/BookingFlow/BookingStatus.tsx`)
**What it does**: Shows booking confirmation and allows reviews
- **Features**:
  - Booking confirmation with ID
  - Progress tracker (Booked → In Progress → Completed)
  - 5-star rating system
  - Review text input
  - "Submit Review" and "Back to Home" buttons
- **Navigation**: Takes users back to Home Screen
- **When to modify**: Add real-time status updates, photo reviews
- **Mock Data**: Generates booking ID and tracks status

## 📋 Additional Screens

### 15. **NotificationsScreen.tsx** (`/app/NotificationsScreen.tsx`)
**What it does**: Displays user notifications
- **Features**:
  - Categorized notifications (booking, payment, system)
  - Read/unread status indicators
  - Time stamps
  - "Mark All Read" option
- **Navigation**: Back to previous screen
- **When to modify**: Add push notifications, notification actions
- **Mock Data**: Sample notifications with different types and statuses

### 16. **ProfileSettingsScreen.tsx** (`/app/ProfileSettingsScreen.tsx`)
**What it does**: User profile management and app settings
- **Features**:
  - User avatar and basic info display
  - Settings menu (Edit Profile, Payment Methods, Booking History, etc.)
  - Language preference option
  - Logout functionality
  - App version information
- **Navigation**: 
  - Language option → LanguageScreen
  - Notifications option → NotificationsScreen
  - Logout → LoginScreen
- **When to modify**: Add more settings, integrate with user preferences
- **Mock Data**: Sample user profile information

## 🔧 Technical Implementation

### **App.tsx** (`/App.tsx`)
**What it does**: Main application component that sets up navigation
- **Features**:
  - React Navigation Stack Navigator
  - All screen route definitions
  - Navigation parameter types (TypeScript)
  - Gesture handler setup
- **When to modify**: Add new screens, change navigation structure, add authentication guards

### **tailwind.config.js** (`/tailwind.config.js`)
**What it does**: Tailwind CSS configuration with custom branding
- **Features**:
  - Custom color palette (peach, purple, white)
  - Font family settings
  - Border radius customization
  - Shadow configurations
- **When to modify**: Change app colors, add new design tokens

## 📊 Mock Data Structure

All screens use static mock data that simulates real API responses:

- **Agents**: ID, name, service type, rating, price, image, reviews count
- **Categories**: Hair, Nails, Makeup with icons and colors
- **Notifications**: Type, title, message, timestamp, read status
- **Bookings**: Agent info, service details, pricing, status tracking
- **User Profile**: Name, email, phone, avatar

## 🔄 Navigation Flow

```
SplashScreen → LanguageScreen → LoginScreen → RegisterScreen → RoleSelectionScreen
                                      ↓
                               ClientProfileSetup / AgentProfileSetup
                                      ↓
                                 HomeScreen ←→ NotificationsScreen
                                      ↓           ↑
                              ServiceDetailScreen  ProfileSettingsScreen
                                      ↓
                              SelectDateTime → ChooseLocation → BookingSummary → PaymentScreen → BookingStatus
                                                                                                        ↓
                                                                                                  HomeScreen
```

## 🛠 Customization Guide

### Adding a New Screen
1. Create new `.tsx` file in `/app/` directory
2. Add screen to navigation types in `App.tsx`
3. Add route to Stack Navigator in `App.tsx`
4. Import and use navigation hooks in your component

### Modifying Colors
1. Update `tailwind.config.js` with new color values
2. Update StyleSheet colors in individual components
3. Test across all screens for consistency

### Adding Real API Integration
1. Replace mock data with API calls
2. Add loading states and error handling
3. Implement proper authentication
4. Add data persistence (AsyncStorage)

### Adding New Features
1. Create new components in appropriate directories
2. Update navigation if new screens are needed
3. Add proper TypeScript types
4. Test on both iOS and Android

## 📱 Testing the App

1. **Install Expo Go** on your mobile device
2. **Run `npm start`** in the project directory
3. **Scan QR code** with Expo Go app
4. **Navigate through all screens** to test functionality
5. **Test on both iOS and Android** if possible

## 🐛 Common Issues & Solutions

### TypeScript Errors
- Most TypeScript errors are expected during development
- They don't prevent the app from running
- Focus on functionality first, then fix types

### Navigation Issues
- Ensure all screens are properly imported in `App.tsx`
- Check parameter types match navigation definitions
- Use navigation.goBack() for back functionality

### Styling Issues
- Tailwind classes might not work - use StyleSheet instead
- Test on actual device for accurate styling
- Use Flexbox for responsive layouts

## 🚀 Next Steps for Production

1. **Replace Mock Data**: Connect to real APIs
2. **Add Authentication**: Implement secure login/registration
3. **Payment Integration**: Add Stripe, PayPal, or local payment methods
4. **Push Notifications**: Implement real-time notifications
5. **Image Upload**: Add photo upload functionality
6. **Maps Integration**: Add location services
7. **Testing**: Add unit and integration tests
8. **Performance**: Optimize for production
9. **App Store**: Prepare for iOS/Android deployment

## 📞 Support

For questions about specific screens or functionality:
- Check the individual screen files for implementation details
- Review the navigation flow in `App.tsx`
- Examine mock data structures for API integration guidance

This README provides everything needed to understand, modify, and extend the Mubaku Style app. Each screen has a specific purpose and can be customized based on your requirements.
