import classNames from "classnames";
import { useEffect, useState } from "react";
import style from './App.module.scss';
import './common.scss';

let interval;

const App = () => {
  const [lightsRunning, setLightsRunning] = useState(false);
  const [lightOn, setLightOn] = useState(0);

  useEffect(() => {
    if (!lightsRunning || lightOn > 4) return
    const timer =
    setInterval(() => setLightOn(lightOn + 1), 1000);

    return () => clearInterval(timer);
  }, [lightOn, lightsRunning]);

  const handleStartToggle = () => {
    if (!lightsRunning) {
      setLightOn(0)  
    }

    setLightsRunning(!lightsRunning);
  }

  return (
    <div className="App">
      <button onClick={handleStartToggle} className={style.button}>
        Start
      </button>

      <div className={style.status}>{lightsRunning ? "włączone" : "wyłączone"}</div>
      <div className={style.lightsWrapper}>
      <div className={classNames(style.light, {[style.light1On]: lightOn === 1})} />
      <div className={classNames(style.light, {[style.light2On]: lightOn === 2})} />
      <div className={classNames(style.light, {[style.light3On]: lightOn === 3})} />
      <div className={classNames(style.light, {[style.light4On]: lightOn === 4})} />
      </div>
    </div>
  );
}

export default App;
