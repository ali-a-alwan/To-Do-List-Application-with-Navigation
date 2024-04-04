// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

 
 
 
 
 
 

  // Function to add a new item or edit an existing one
  const saveItem = (id, text) => {
   
   
   
   
   
   
   
   
   
   
  };

  // Function to delete an item
  const deleteItem = (id) => {
    
	
	
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('EditItem', { itemId: null, saveItem })}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('EditItem', { item, saveItem, deleteItem })}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
