import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Countdown } from './src/features/Countdown';

export default function App() {
  const [subject, setSubject] = useState(null);
  const doneList = useRef([]);
  const onCompletePress = (timeSpent, totalTime) => { 
    doneList.current = [...doneList.current, {id: doneList.current.length, subject, totalTime, timeSpent}]
    console.log(`${subject} is complete in time ${timeSpent}. Total expected time ${totalTime} `); setSubject(null)
  }

  const minutes = 10
  return (
    <SafeAreaView style={styles.container}>
      {!subject ? (
        <Focus onSetFocusPress={setSubject} doneList={doneList.current}/>
      ) : (
        <Countdown subject={subject} time={minutes} onCompletePress={onCompletePress} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.teel,
  },
});
