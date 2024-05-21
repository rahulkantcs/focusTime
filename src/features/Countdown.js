import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { CountdownTimer } from '../components/CountdownTimer';
import { ButtonContainer } from '../components/ButtonContainer';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

const formatTime = (time) => (time > 9 ? `${time}` : `0${time}`);

const formatTimer = (timer) => {
  const timerInSec = Math.floor(timer / 1000);
  const timerInMin = Math.floor(timerInSec / 60);
  return `${formatTime(timerInMin)}:${formatTime(timerInSec % 60)}`;
};

export const Countdown = ({ subject, onCompletePress }) => {
  const totalTimeOnSubject = useRef(0);
  const timeInMillsLeft = useRef(0);
  const [timerView, setTimerView] = useState('00:00');
  const interval = useRef(null);
  const [isPaused, setPause] = useState(true);

  const updateCounter = () => {
    setTimerView(formatTimer(timeInMillsLeft.current));
    if (!isPaused) {
      timeInMillsLeft.current = timeInMillsLeft.current - 1000;
    }
  };

  const addTime = (addedTime) => {
    totalTimeOnSubject.current =
      Number(totalTimeOnSubject.current) + Number(addedTime);
    timeInMillsLeft.current = timeInMillsLeft.current + addedTime * 60 * 1000;
    updateCounter();
    setPause(true);
  };

  const onStartPress = () => {
    if(timeInMillsLeft.current > 1){
      setPause((state) => !state);
    } else {
      setPause(true);
    }
  };

  const onResetPress = () => {
    totalTimeOnSubject.current = 0;
    timeInMillsLeft.current = 0;
    updateCounter();
    setPause(true);
  };

  const onDonePress = () => {
    if(totalTimeOnSubject.current < 1) return
    const timeFocused = (totalTimeOnSubject.current * 60 * 1000) - timeInMillsLeft.current;
    if(timeFocused < 1000) return
    clearInterval(interval.current);
    onCompletePress(formatTimer(timeFocused), `${totalTimeOnSubject.current}:00`);
  };

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval.current);
    } else {
      interval.current = setInterval(updateCounter, 1000);
    }
  }, [isPaused]);

  const getProgress = () => {
    if(!totalTimeOnSubject.current || !timeInMillsLeft.current) return 0
    return Number(timeInMillsLeft.current) / Number(totalTimeOnSubject.current * 60 *1000)
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Focusing On <Text style={styles.task}>{subject}</Text></Text>
      <CountdownTimer timerView={timerView} />
      <ProgressBar progress={getProgress()} color={colors.emerald} />
      <ButtonContainer
        onResetPress={onResetPress}
        onStartPress={onStartPress}
        onDonePress={onDonePress}
        addTime={addTime}
        isPaused={isPaused}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    fontSize: fontSizes.lg,
    color: colors.redBaen,
  },
  task: {
    flex: 1,
    color: colors.emerald,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  }
});
