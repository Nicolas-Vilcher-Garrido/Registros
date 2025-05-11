import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilePlus, CirclePlus as PlusCircle, CalendarPlus, Pill, Goal as Vial, Stethoscope as StethoscopeIcon, ImagePlus } from 'lucide-react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';

export default function AddScreen() {
  const [activeTab, setActiveTab] = useState('Visit');

  const tabs = [
    {
      id: 'Visit',
      icon: StethoscopeIcon,
      color: Colors.primary[500],
    },
    {
      id: 'Lab',
      icon: Vial,
      color: Colors.secondary[500],
    },
    {
      id: 'Medication',
      icon: Pill,
      color: Colors.accent[500],
    },
    {
      id: 'Appointment',
      icon: CalendarPlus,
      color: Colors.warning[500],
    },
    {
      id: 'Imaging',
      icon: ImagePlus,
      color: Colors.error[500],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Record</Text>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScrollContent}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.tabButtonActive,
                { borderColor: tab.color },
                activeTab === tab.id && { backgroundColor: tab.color },
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <tab.icon
                size={20}
                color={activeTab === tab.id ? 'white' : tab.color}
              />
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.id && styles.tabTextActive,
                ]}
              >
                {tab.id}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder={`${activeTab} Title`}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Select Date</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Doctor/Provider</Text>
          <TextInput
            style={styles.input}
            placeholder="Dr. Name"
          />
        </View>

        {activeTab === 'Visit' && (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Chief Complaint</Text>
              <TextInput
                style={styles.input}
                placeholder="Reason for visit"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Diagnosis</Text>
              <TextInput
                style={styles.input}
                placeholder="Diagnosis if available"
              />
            </View>
          </>
        )}

        {activeTab === 'Medication' && (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Dosage</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 10mg"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Frequency</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Once daily"
              />
            </View>
          </>
        )}

        <View style={styles.formGroup}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Additional notes..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.formGroup}>
          <TouchableOpacity style={styles.fileButton}>
            <FilePlus size={20} color="white" />
            <Text style={styles.fileButtonText}>Attach File</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Record</Text>
          </TouchableOpacity>
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
  tabsContainer: {
    marginBottom: 20,
  },
  tabsScrollContent: {
    paddingHorizontal: 15,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
  },
  tabButtonActive: {
    borderWidth: 1,
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
    marginLeft: 8,
  },
  tabTextActive: {
    color: 'white',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[700],
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  inputText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[500],
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  fileButton: {
    backgroundColor: Colors.secondary[500],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  fileButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'white',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.gray[300],
  },
  cancelButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[700],
  },
  saveButton: {
    flex: 2,
    backgroundColor: Colors.primary[500],
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});