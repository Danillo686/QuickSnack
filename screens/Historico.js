// Historico.js
import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { WalletContext } from '../context/WalletContext';

export default function Historico() {
  const { historico } = useContext(WalletContext);

  return (
    <FlatList
      data={historico}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nome} - R$ {item.valor} - {item.data}</Text>
        </View>
      )}
    />
  );
}
