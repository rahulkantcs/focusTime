import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const CountdownTimer = ({ timerView }) => (
  <View style={styles.timeContainer}>
    <View style={styles.timeSection}>
      <Text style={styles.timerText}>{timerView}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  timeContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSection: {
    backgroundColor: colors.emerald,
    padding: spacing.xl,
    borderRadius: 5,
  },
  timerText: {
    fontSize: fontSizes.xxxl,
    color: colors.redBaen,
  },
});
