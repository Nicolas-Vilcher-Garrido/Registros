import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeartPulse, LineChart, ArrowUp, ArrowDown, Activity } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface HealthStatsCardProps {
  bloodPressure: string;
  heartRate: string;
  weight: string;
  bloodSugar: string;
}

export default function HealthStatsCard({
  bloodPressure,
  heartRate,
  weight,
  bloodSugar,
}: HealthStatsCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <Activity size={18} color={Colors.primary[500]} />
          <Text style={styles.title}>Health Stats</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View Trends</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Blood Pressure</Text>
            <View style={[styles.statusPill, styles.statusNormal]}>
              <Text style={styles.statusText}>Normal</Text>
            </View>
          </View>
          <View style={styles.statValueRow}>
            <Text style={styles.statValue}>{bloodPressure}</Text>
            <Text style={styles.statUnit}>mmHg</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Heart Rate</Text>
            <View style={[styles.statusPill, styles.statusNormal]}>
              <Text style={styles.statusText}>Normal</Text>
            </View>
          </View>
          <View style={styles.statValueRow}>
            <Text style={styles.statValue}>{heartRate}</Text>
            <Text style={styles.statUnit}>bpm</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Weight</Text>
            <ArrowDown size={14} color={Colors.success[500]} style={styles.trendIcon} />
          </View>
          <View style={styles.statValueRow}>
            <Text style={styles.statValue}>{weight}</Text>
            <Text style={styles.statUnit}>lbs</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Blood Sugar</Text>
            <ArrowUp size={14} color={Colors.warning[500]} style={styles.trendIcon} />
          </View>
          <View style={styles.statValueRow}>
            <Text style={styles.statValue}>{bloodSugar}</Text>
            <Text style={styles.statUnit}>mg/dL</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
    marginLeft: 8,
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[500],
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statContainer: {
    width: '48%',
    backgroundColor: Colors.gray[50],
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  statLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[600],
  },
  statusPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  statusNormal: {
    backgroundColor: Colors.success[100],
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: Colors.success[700],
  },
  trendIcon: {
    marginLeft: 4,
  },
  statValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: Colors.gray[800],
  },
  statUnit: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginLeft: 4,
  },
});