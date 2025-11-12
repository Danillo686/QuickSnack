import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [saldo, setSaldo] = useState(20);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('historico').then(data => {
      if (data) setHistorico(JSON.parse(data));
    });
  }, []);

  function registrarCompra(produto) {
    if (saldo >= produto.preco) {
      const novaTransacao = {
        nome: produto.nome,
        valor: produto.preco,
        data: new Date().toLocaleDateString(),
      };
      const novoHistorico = [...historico, novaTransacao];
      setHistorico(novoHistorico);
      setSaldo(saldo - produto.preco);
      AsyncStorage.setItem('historico', JSON.stringify(novoHistorico));
    } else {
      alert('Saldo insuficiente!');
    }
  }

  return (
    <WalletContext.Provider value={{ saldo, historico, registrarCompra }}>
      {children}
    </WalletContext.Provider>
  );
}
