// EditItemScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditItemScreen = ({ route, navigation }) => {
  const { item, saveItem, deleteItem } = route.params;
  const [text, setText] = useState('');

  useEffect(() => {
    if (item) {
      setText(item.text);
    }
  }, [item]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Save"
        onPress={() => {
          saveItem(item ? item.id : null, text);
          navigation.goBack();
        }}
      />
      {item && (
        <Button
          title="Delete"
          color="red"
          onPress={() => {
            deleteItem(item.id);
            navigation.goBack();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 20,
    width: '80%',
  },
});

export default EditItemScreen;
