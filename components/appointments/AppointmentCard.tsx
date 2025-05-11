import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import { format } from 'date-fns';
import Colors from '@/constants/Colors';

interface AppointmentProps {
  id: string;
  type: string;
  doctor: string;
  date: Date;
  image: string;
  location?: string;
}

export default function AppointmentCard({ appointment }: { appointment: AppointmentProps }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: appointment.image }}
          style={styles.doctorImage}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.appointmentType}>{appointment.type}</Text>
        <Text style={styles.doctorName}>{appointment.doctor}</Text>
        
        <View style={styles.infoRow}>
          <Calendar size={14} color={Colors.gray[500]} />
          <Text style={styles.infoText}>
            {format(appointment.date, 'MMM d, yyyy')}
          </Text>
        </View>
        
        <View style={styles.infoRow}>
          <Clock size={14} color={Colors.gray[500]} />
          <Text style={styles.infoText}>
            {format(appointment.date, 'h:mm a')}
          </Text>
        </View>

        {appointment.location && (
          <View style={styles.infoRow}>
            <MapPin size={14} color={Colors.gray[500]} />
            <Text style={styles.infoText}>{appointment.location}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  imageContainer: {
    marginRight: 15,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.gray[200],
  },
  contentContainer: {
    flex: 1,
  },
  appointmentType: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[800],
  },
  doctorName: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginLeft: 6,
  },
  actionsContainer: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    marginBottom: 4,
  },
  actionButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.primary[500],
  },
  cancelButton: {
    backgroundColor: Colors.error[50],
  },
  cancelButtonText: {
    color: Colors.error[500],
  },
});