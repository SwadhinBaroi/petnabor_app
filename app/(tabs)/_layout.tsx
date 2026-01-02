import CustomTabBar from '@/components/layout/CustomTabBar';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    ></Tabs>
  );
}
