import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Bell, Shield, Book, HeartPulse, Mail, LogOut, ChevronRight, Calendar, Syringe, AlertTriangle } from 'lucide-react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  const [name, setName] = useState('Jane Doe');
  const [dateOfBirth, setDateOfBirth] = useState('1990-05-15');
  const [healthPlan, setHealthPlan] = useState('Blue Cross Blue Shield');
  const [acceptsTransfusions, setAcceptsTransfusions] = useState(true);
  const [allergies, setAllergies] = useState('Penicillin, Peanuts');

  const profileSections = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      color: Colors.primary[500],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      color: Colors.accent[500],
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: Shield,
      color: Colors.secondary[500],
    },
    {
      id: 'insurance',
      title: 'Insurance Information',
      icon: HeartPulse,
      color: Colors.warning[500],
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: Book,
      color: Colors.gray[500],
    },
    {
      id: 'support',
      title: 'Contact Support',
      icon: Mail,
      color: Colors.primary[700],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileEmail}>jane.doe@example.com</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Date of Birth</Text>
            <View style={styles.dateContainer}>
              <TextInput
                style={styles.input}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="YYYY-MM-DD"
              />
              <Calendar size={20} color={Colors.gray[500]} style={styles.dateIcon} />
            </View>
          </View>

          <Text style={[styles.sectionTitle, styles.marginTop]}>Health Plan Information</Text>
          
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Health Plan Provider</Text>
            <TextInput
              style={styles.input}
              value={healthPlan}
              onChangeText={setHealthPlan}
              placeholder="Enter your health plan provider"
            />
          </View>

          <TouchableOpacity style={styles.documentButton}>
            <Text style={styles.documentButtonText}>Attach Health Plan Card</Text>
            <ChevronRight size={20} color={Colors.primary[500]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.documentButton}>
            <Text style={styles.documentButtonText}>Attach ID Document</Text>
            <ChevronRight size={20} color={Colors.primary[500]} />
          </TouchableOpacity>

          <Text style={[styles.sectionTitle, styles.marginTop]}>Medical Information</Text>

          <View style={styles.toggleContainer}>
            <View style={styles.toggleInfo}>
              <Syringe size={20} color={Colors.primary[500]} />
              <Text style={styles.toggleLabel}>Accept Blood Transfusions</Text>
            </View>
            <TouchableOpacity
              style={[styles.toggle, acceptsTransfusions && styles.toggleActive]}
              onPress={() => setAcceptsTransfusions(!acceptsTransfusions)}
            >
              <View style={[styles.toggleHandle, acceptsTransfusions && styles.toggleHandleActive]} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.documentButton}>
            <Text style={styles.documentButtonText}>Attach Transfusion Document</Text>
            <ChevronRight size={20} color={Colors.primary[500]} />
          </TouchableOpacity>

          <View style={styles.fieldContainer}>
            <View style={styles.allergyHeader}>
              <AlertTriangle size={20} color={Colors.warning[500]} />
              <Text style={styles.fieldLabel}>Allergies</Text>
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={allergies}
              onChangeText={setAllergies}
              placeholder="List your allergies"
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error[500]} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.versionText}>HealthTrack v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[100],
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.gray[800],
  },
  profileCard: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.gray[200],
  },
  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.gray[800],
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: Colors.primary[50],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.primary[500],
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
    marginBottom: 15,
  },
  marginTop: {
    marginTop: 25,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.gray[50],
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[800],
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  dateContainer: {
    position: 'relative',
  },
  dateIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  documentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray[50],
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  documentButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[500],
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  toggleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
    marginLeft: 10,
  },
  toggle: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.gray[300],
    padding: 2,
  },
  toggleActive: {
    backgroundColor: Colors.primary[500],
  },
  toggleHandle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleHandleActive: {
    transform: [{ translateX: 22 }],
  },
  allergyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  logoutButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  logoutText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.error[500],
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
});