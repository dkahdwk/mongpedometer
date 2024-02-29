import React, { useEffect, useState } from 'react';
import {
  isStepCountingSupported,
  startStepCounterUpdate,
  stopStepCounterUpdate,
  parseStepData,
} from '@dongminyu/react-native-step-counter';

const Pedometer = () => {
  const [supported, setSupported] = useState<boolean>(false);
  const [granted, setGranted] = useState<boolean>(false);

  const askPermission = async () => {
    isStepCountingSupported().then((result) => {
      console.debug('🚀 - isStepCountingSupported', result);
      setGranted(result.granted === true);
      setSupported(result.supported === true);
    });
  };

  useEffect(() => {
    askPermission();
  }, []);

  return <></>;
};

export default Pedometer;
