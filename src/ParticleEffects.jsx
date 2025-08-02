import React from 'react';
import './ParticleEffects.css';

const RainParticles = ({ theme }) => {
  return (
    <div className="rain-container">
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className={`raindrop ${theme}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.5 + Math.random() * 1}s`
          }}
        />
      ))}
    </div>
  );
};

const SnowParticles = ({ theme }) => {
  return (
    <div className="snow-container">
      {[...Array(100)].map((_, i) => (
        <div 
          key={i} 
          className={`snowflake ${theme}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            fontSize: `${0.8 + Math.random() * 0.8}rem`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

const SunParticles = ({ theme }) => {
  return (
    <div className="sun-container">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className={`sun-ray ${theme}`}
          style={{
            transform: `rotate(${i * 18}deg)`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
      <div className="sun-glow"></div>
    </div>
  );
};

const CloudParticles = ({ theme }) => {
  return (
    <div className="cloud-container">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className={`cloud ${theme}`}
          style={{
            top: `${10 + Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          ☁
        </div>
      ))}
    </div>
  );
};

const FogParticles = ({ theme }) => {
  return (
    <div className="fog-container">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className={`fog-layer ${theme}`}
          style={{
            animationDelay: `${i * 0.5}s`,
            opacity: 0.1 + (i * 0.05)
          }}
        />
      ))}
    </div>
  );
};

const ParticleEffects = ({ weather, temp, humidity, theme }) => {
  const getParticleEffect = () => {
    if (humidity > 80 || weather.includes('rain') || weather.includes('drizzle')) {
      return <RainParticles theme={theme} />;
    } else if (temp < 5 || weather.includes('snow')) {
      return <SnowParticles theme={theme} />;
    } else if (temp > 25 && (weather.includes('clear') || weather.includes('sunny'))) {
      return <SunParticles theme={theme} />;
    } else if (weather.includes('cloud')) {
      return <CloudParticles theme={theme} />;
    } else if (weather.includes('mist') || weather.includes('fog') || weather.includes('haze')) {
      return <FogParticles theme={theme} />;
    }
    return <CloudParticles theme={theme} />; // default
  };

  return (
    <div className="particle-effects">
      {getParticleEffect()}
    </div>
  );
};

export default ParticleEffects;
