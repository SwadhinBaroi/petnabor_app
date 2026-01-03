import Logo from '@/assets/svgs/logo.svg';
import Feather from '@expo/vector-icons/Feather';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { RNText } from '../ui/text';

const drawerItems = [
  { label: 'Explore', route: '/explore', icon: 'navigation' },
  { label: 'Find PetPals', route: '/petpals', icon: 'search' },
  { label: 'Chat', route: '/chat', icon: 'message-circle' },
  { label: 'Subscription', route: '/subscription', icon: 'star' },
  { label: 'Profile', route: '/profile', icon: 'user' },
  { label: 'Pet Nabor List', route: '/petnaborlist', icon: 'users' },
  { label: 'Meetings', route: '/meetings', icon: 'calendar' },
  { label: 'Blogs', route: '/blogs', icon: 'book' },
  {
    label: 'NaborHood Marketplace',
    route: '/marketplace',
    icon: 'shopping-bag',
  },
];

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}
      >
        <Logo height={30} width={66} />

        <Feather name="x" size={24} color="black" />
      </View>
      <View style={{ gap: 30, paddingLeft: 15 }}>
        {drawerItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              router.replace(item.route);
            }}
            style={{ flexDirection: 'row', gap: 10 }}
          >
            <Feather
              name={item.icon}
              size={24}
              color={'#3E77BC'}
              style={{ marginRight: 10 }}
            />
            <RNText variant="medium" size="base">
              {item.label}
            </RNText>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
