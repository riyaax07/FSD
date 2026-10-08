import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(centiseconds).padStart(2, "0")}`;
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>{formatTime(time)}</h1>

      <div className="buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;