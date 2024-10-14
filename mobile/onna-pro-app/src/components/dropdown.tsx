import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/fontFamily';

import { Dropdown } from 'react-native-element-dropdown';

interface DropdownProps {
  data: Array<{ label: string; value: string }>;
}

const DropdownComponent: React.FC<DropdownProps> = ({ data }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder=""
      searchPlaceholder="Pesquisar..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: "75%",
    height: 50,
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderColor: colors.green[800],
    borderWidth: 2,
    fontSize: 18.75,
    textAlign: "justify",
    color: colors.black,
    borderRadius: 12.5,
    paddingLeft: 6.25,
    shadowColor: colors.black,
    shadowOffset: { 
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 18.75,
  },
  selectedTextStyle: {
    fontSize: 18.75,
    fontFamily: fontFamily.Olight
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18.75,
  },
});
