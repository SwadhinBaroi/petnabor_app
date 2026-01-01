import { COLORS } from '@/constants';
import { useActionSheet } from '@expo/react-native-action-sheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { RNText } from './text';

type Category = 'PetNabor' | 'PetPal' | 'Vendor';

export default function Sheet({
  onSelect,
}: {
  onSelect: (category: 'PetNabor' | 'PetPal' | 'Vendor') => void;
}) {
  const [selected, setSelected] = useState<Category | null>(null);
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['PetNabor', 'PetPal', 'Vendor', 'Cancel'];
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            setSelected('PetNabor');
            onSelect('PetNabor');

            break;

          case 1:
            setSelected('PetPal');
            onSelect('PetPal');
            break;

          case 2:
            setSelected('Vendor');
            onSelect('Vendor');
            break;

          case cancelButtonIndex:
          default:
            // Cancelled
            break;
        }
      }
    );
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.inputBox,
        { borderColor: selected ? COLORS.borderColor : COLORS.inputbg },
      ]}
    >
      <RNText style={[styles.text, !selected && styles.placeholder]}>
        {selected ?? 'Sign up as'}
      </RNText>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={24}
        color={COLORS.primary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: COLORS.inputbg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Medium',
    color: COLORS.text,
  },
  placeholder: {
    fontSize: 17,
    fontFamily: 'Medium',
    color: COLORS.text,
  },
});
