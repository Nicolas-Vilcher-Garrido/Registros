import { Drawer } from 'expo-router/drawer';
import { Home, ClipboardList, PlusCircle, UserCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function MainLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary[500],
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Inter-SemiBold',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerActiveTintColor: Colors.primary[500],
        drawerInactiveTintColor: Colors.gray[700],
        drawerLabelStyle: {
          fontFamily: 'Inter-Medium',
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="records"
        options={{
          title: 'Records',
          drawerIcon: ({ color, size }) => <ClipboardList size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="add"
        options={{
          title: 'Add Record',
          drawerIcon: ({ color, size }) => <PlusCircle size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => <UserCircle size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}