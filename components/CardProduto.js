import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CardProduto({ produto, onComprar }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{produto.nome} - R$ {produto.preco}</Text>
      <Button title="Comprar" onPress={() => onComprar(produto)} />
    </View>
  );
}
