import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function SensorScreen() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    Accelerometer.setUpdateInterval(1000);
    return () => subscription.remove();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Accelerometer Data:</Text>
      <Text>X: {data.x.toFixed(2)}</Text>
      <Text>Y: {data.y.toFixed(2)}</Text>
      <Text>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}
