import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const ButtonContainer = ({ onResetPress, onStartPress, onDonePress, addTime, isPaused }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Time (in Minutes)</Text>
      <View style={styles.addTimeContainer}>
        <RoundedButton
          title="+5"
          size={75}
          onPress={() => addTime(5)}
        />
        <RoundedButton
          title="+10"
          size={75}
          onPress={() => addTime(10)}
        />
        <RoundedButton
          title="+20"
          size={75}
          onPress={() => addTime(20)}
        />
      </View>
      <View style={styles.startStopContainer}>
        <RoundedButton
          title="Reset"
          size={50}
          onPress={() => onResetPress()}
        />
        <RoundedButton
          title={isPaused ? "Start" : "Pause"}
          size={100}
          onPress={() => onStartPress()}
        />
        <RoundedButton
          title="Done"
          size={50}
          onPress={() => onDonePress()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  header: {
    fontSize: fontSizes.md,
    color: colors.redBaen,
  },
  addTimeContainer: {
    paddingTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startStopContainer: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
