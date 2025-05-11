import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import RecordCard from '@/components/records/RecordCard';
import { TextInput } from 'react-native-gesture-handler';

export default function RecordsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const records = [
    {
      id: '1',
      type: 'Cardiology Visit',
      doctor: 'Dr. Smith',
      date: new Date(2023, 4, 15),
      notes: 'Patient\'s ECG shows normal sinus rhythm. Blood pressure slightly elevated.',
      isNew: true,
      category: 'Visit',
    },
    {
      id: '2',
      type: 'Annual Checkup',
      doctor: 'Dr. Johnson',
      date: new Date(2023, 3, 2),
      notes: 'All vitals are within normal range. Cholesterol levels have improved since last visit.',
      isNew: false,
      category: 'Visit',
    },
    {
      id: '3',
      type: 'Blood Test Results',
      doctor: 'Lab Corp',
      date: new Date(2023, 4, 5),
      notes: 'Complete blood count shows all values within normal range. Vitamin D slightly low.',
      isNew: false,
      category: 'Lab',
    },
    {
      id: '4',
      type: 'Chest X-Ray',
      doctor: 'Radiology Dept',
      date: new Date(2023, 2, 20),
      notes: 'Clear lung fields. No evidence of pneumonia or other abnormalities.',
      isNew: false,
      category: 'Imaging',
    },
    {
      id: '5',
      type: 'MRI Scan - Knee',
      doctor: 'Dr. Rodriguez',
      date: new Date(2023, 1, 15),
      notes: 'Minor meniscus tear in right knee. Recommended physical therapy.',
      isNew: false,
      category: 'Imaging',
    },
    {
      id: '6',
      type: 'Allergy Test',
      doctor: 'Dr. Chen',
      date: new Date(2023, 0, 28),
      notes: 'Positive reaction to pollen and dust mites. Negative for food allergies.',
      isNew: false,
      category: 'Lab',
    },
  ];

  const categories = ['All', 'Visit', 'Lab', 'Imaging', 'Prescription'];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         record.doctor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || record.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Medical Records</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={18} color={Colors.gray[500]} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search records"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={18} color={Colors.gray[700]} />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === item && styles.categoryButtonTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <FlatList
        data={filteredRecords}
        renderItem={({ item }) => <RecordCard record={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.recordsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No records found</Text>
          </View>
        }
      />
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInputContainer: {
    flex: 1,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[800],
  },
  filterButton: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  categoriesContainer: {
    marginBottom: 10,
  },
  categoriesList: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  categoryButtonActive: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  categoryButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
  },
  categoryButtonTextActive: {
    color: 'white',
  },
  recordsList: {
    paddingBottom: 20,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[500],
  },
});