import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';

export const HomeScreen = () => {
  const [value, setValue] = useState('');
  // useEffect(() => {
  //   getMovies().catch();
  // }, []);

  const getMovies = async (cep: string) => {
    if (cep?.length === 7) {
      try {
        const response = await fetch(
          `https://cdn.apicep.com/file/apicep/${cep}.json`,
        );
        const json: any = await response.json();
        console.log('Requisição: ');
        console.log(json);
        // setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
        // setLoading(false);
      }
    } else {
      console.error('Verifique o');
    }
  };

  return (
    <View style={styles.row}>
      <Text>CEP:</Text>
      <Input
        placeholder="Informe o cep. Exemplo: 71000000"
        value={value}
        keyboardType="numeric"
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button onPress={() => getMovies(value)}>Localizar</Button>
      <Button onPress={() => setValue('')}>Reset</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 18,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: '#000000',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
