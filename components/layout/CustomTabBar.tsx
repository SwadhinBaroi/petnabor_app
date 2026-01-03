import { COLORS } from '@/constants';
import Feather from '@expo/vector-icons/Feather';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNText } from '../ui/text';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const tabs: {
    name: string;
    routeName: string;
    Icon: any;
  }[] = [
    { name: 'Explore', routeName: 'explore/index', Icon: 'navigation' },
    { name: 'PetPals', routeName: 'petpals/index', Icon: 'search' },
    { name: 'Chat', routeName: 'chat/index', Icon: 'message-circle' },
    { name: 'Profile', routeName: 'profile/index', Icon: 'user' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => {
        const route = state.routes.find((r) => r.name === tab.routeName);

        if (!route) return null;

        const isFocused = state.index === state.routes.indexOf(route);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginBottom: 20,
            }}
          >
            <Feather
              name={tab.Icon}
              size={24}
              color={isFocused ? '#3E77BC' : '#4E6184'}
            />
            <RNText
              variant="subtitle"
              size="sm"
              style={{ color: isFocused ? '#3E77BC' : '#4E6184' }}
            >
              {tab.name}
            </RNText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: COLORS.navbg,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
