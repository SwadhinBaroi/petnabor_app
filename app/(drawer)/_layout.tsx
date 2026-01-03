import { CustomDrawerContent } from '@/components/layout/CustomDrawerContent';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="petnaborlist" />
      <Drawer.Screen name="blogs" />
      <Drawer.Screen name="meetings" />
      <Drawer.Screen name="subscription" />
      <Drawer.Screen name="marketplace" />
    </Drawer>
  );
}
