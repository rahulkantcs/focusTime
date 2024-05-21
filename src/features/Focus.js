import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { History } from '../components/History';

export const Focus = ({ onSetFocusPress, doneList }) => {
  const [textInputVal, setTextInputVal] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor={colors.redBaen}
          underlineColor={colors.redBaen}
          onChangeText={setTextInputVal}
          label="What do you want to focus on"
        />
        <View style={styles.roundedButtonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => onSetFocusPress(textInputVal)}
          />
        </View>
      </View>
      <History doneList={doneList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  roundedButtonContainer: {
    justifyContent: 'center',
  },
});
