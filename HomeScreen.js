import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { ApiContext } from '../context/ApiContext';
import { fetchQuote, postData, putData } from '../services/api';

export default function HomeScreen() {
  const { quote, setQuote, postResponse, setPostResponse, putResponse, setPutResponse } = useContext(ApiContext);

  const handleGet = async () => {
    const res = await fetchQuote();
    setQuote(res.data[0]);
  };

  const handlePost = async () => {
    const res = await postData({ title: "Test", body: "This is a test." });
    setPostResponse(res.data);
  };

  const handlePut = async () => {
    const res = await putData(1, { title: "Updated", body: "Updated body" });
    setPutResponse(res.data);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="GET Quote" onPress={handleGet} />
      {quote && <Text>{quote.quote} - {quote.author}</Text>}

      <Button title="POST Data" onPress={handlePost} />
      {postResponse && <Text>POST: {postResponse.title}</Text>}

      <Button title="PUT Data" onPress={handlePut} />
      {putResponse && <Text>PUT: {putResponse.title}</Text>}
    </View>
  );
}
