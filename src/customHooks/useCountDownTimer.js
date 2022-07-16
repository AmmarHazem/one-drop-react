import { useEffect, useState, useCallback } from "react";

const useCountDownTimer = ({ duration = 10 * 1000, onTimerFinished }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  const restartTimer = useCallback(() => {
    setRemainingTime(duration);
  }, [duration]);

  useEffect(() => {
    if (remainingTime <= 0) {
      if (onTimerFinished) {
        onTimerFinished();
      }
      return;
    }
    const timeoutID = setTimeout(() => {
      setRemainingTime(remainingTime - 1000);
    }, 1000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [remainingTime, onTimerFinished]);

  return [remainingTime, restartTimer];
};

export default useCountDownTimer;
