import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface RecordProps {
  id: string;
  type: string;
  doctor: string;
  date: Date;
  notes: string;
  isNew: boolean;
  category?: string;
}

export default function RecordCard({ record }: { record: RecordProps }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.recordType}>{record.type}</Text>
          <Text style={styles.doctorInfo}>{record.doctor} • {format(record.date, 'MMM d, yyyy')}</Text>
        </View>
        {record.isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}
      </View>
      
      <Text style={styles.notesText} numberOfLines={2}>{record.notes}</Text>
      
      <View style={styles.footer}>
        {record.category && (
          <View style={styles.categoryPill}>
            <Text style={styles.categoryText}>{record.category}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Details</Text>
          <ArrowRight size={14} color={Colors.primary[500]} />
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  recordType: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[800],
  },
  doctorInfo: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
  newBadge: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  newBadgeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: 'white',
  },
  notesText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    lineHeight: 20,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryPill: {
    backgroundColor: Colors.gray[100],
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.gray[700],
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[500],
    marginRight: 4,
  },
});