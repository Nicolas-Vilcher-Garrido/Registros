import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Calendar, ArrowRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import HealthStatsCard from '@/components/home/HealthStatsCard';
import AppointmentCard from '@/components/appointments/AppointmentCard';
import RecordCard from '@/components/records/RecordCard';

export default function HomeScreen() {
  const upcomingAppointments = [
    {
      id: '1',
      type: 'Dermatology Followup',
      doctor: 'Dr. Williams',
      date: new Date(2023, 5, 10),
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1',
    },
    {
      id: '2',
      type: 'Dental Checkup',
      doctor: 'Dr. Garcia',
      date: new Date(2023, 5, 22),
      image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1',
    },
  ];

  const recentRecords = [
    {
      id: '1',
      type: 'Cardiology Visit',
      doctor: 'Dr. Smith',
      date: new Date(2023, 4, 15),
      notes: 'Patient\'s ECG shows normal sinus rhythm. Blood pressure slightly elevated.',
      isNew: true,
    },
    {
      id: '2',
      type: 'Annual Checkup',
      doctor: 'Dr. Johnson',
      date: new Date(2023, 3, 2),
      notes: 'All vitals are within normal range. Cholesterol levels have improved since last visit.',
      isNew: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hello, Jane</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1',
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>My Health Records</Text>

        <HealthStatsCard
          bloodPressure="120/80"
          heartRate="72"
          weight="155"
          bloodSugar="95"
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Records</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <ArrowRight size={16} color={Colors.primary[500]} />
          </TouchableOpacity>
        </View>

        {recentRecords.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={18} color="white" />
          </TouchableOpacity>
        </View>

        {upcomingAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}

        <View style={styles.footer} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  welcomeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.gray[800],
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: Colors.gray[200],
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Colors.gray[800],
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    marginTop: 20,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[500],
    marginRight: 4,
  },
  addButton: {
    backgroundColor: Colors.primary[500],
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 80,
  },
});