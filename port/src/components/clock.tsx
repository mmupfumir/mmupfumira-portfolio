import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(moment().tz('America/New_York').format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz('America/New_York').format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="text-xs text-yellow-white font-mono">
     {time}
    </div>
  );
};

export default Clock;
