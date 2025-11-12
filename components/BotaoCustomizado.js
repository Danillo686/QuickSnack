import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function BotaoCustomizado({ titulo, onPress }) {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#4CAF50', padding: 10, margin: 5, borderRadius: 5 }}
      onPress={onPress}
    >
      <Text style={{ color: '#fff', textAlign: 'center' }}>{titulo}</Text>
    </TouchableOpacity>
  );
}
