import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Aluno() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Aluno</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22 },
});
