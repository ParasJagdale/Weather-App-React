import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

function AnimatedWeatherIcon({ weather, temp, humidity, theme }) {
  // Enhanced animated SVGs with more sophisticated animations
  if (humidity > 80 || weather.includes('rain') || weather.includes('drizzle')) {
    // Enhanced Rain/Thunderstorm
    return (
      <span className="animated-weather-icon rain-icon" title="Rain">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Main cloud */}
          <ellipse cx="25" cy="20" rx="18" ry="12" fill="#7fc7d9">
            <animate attributeName="cy" values="20;22;20" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="fill" values="#7fc7d9;#5dade2;#7fc7d9" dur="3s" repeatCount="indefinite"/>
          </ellipse>
          {/* Secondary cloud */}
          <ellipse cx="20" cy="18" rx="12" ry="8" fill="#aed6f1">
            <animate attributeName="cy" values="18;20;18" dur="2.5s" repeatCount="indefinite"/>
          </ellipse>
          {/* Raindrops with staggered animation */}
          <rect x="18" y="30" width="2" height="12" rx="1" fill="#3498db">
            <animate attributeName="y" values="30;35;30" dur="0.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.6;1" dur="0.8s" repeatCount="indefinite"/>
          </rect>
          <rect x="22" y="32" width="2" height="10" rx="1" fill="#2980b9">
            <animate attributeName="y" values="32;38;32" dur="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
          </rect>
          <rect x="26" y="31" width="2" height="11" rx="1" fill="#3498db">
            <animate attributeName="y" values="31;37;31" dur="0.9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.7;1" dur="0.9s" repeatCount="indefinite"/>
          </rect>
          <rect x="30" y="33" width="2" height="9" rx="1" fill="#2980b9">
            <animate attributeName="y" values="33;39;33" dur="1.1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.4;1" dur="1.1s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </span>
    );
  } else if (temp > 25 && (weather.includes('clear') || weather.includes('sunny'))) {
    // Enhanced Sunny
    return (
      <span className="animated-weather-icon sun-icon" title="Sunny">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Sun rays */}
          <g className="sun-rays">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <line 
                key={index}
                x1="25" y1="5" x2="25" y2="12" 
                stroke="#FFD700" 
                strokeWidth="3" 
                strokeLinecap="round"
                transform={`rotate(${angle} 25 25)`}
              >
                <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" begin={`${index * 0.25}s`}/>
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin={`${index * 0.25}s`}/>
              </line>
            ))}
          </g>
          {/* Sun center */}
          <circle cx="25" cy="25" r="12" fill="#FFD700">
            <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill" values="#FFD700;#FFA500;#FFD700" dur="4s" repeatCount="indefinite"/>
          </circle>
          {/* Inner glow */}
          <circle cx="25" cy="25" r="8" fill="#FFFF99" opacity="0.6">
            <animate attributeName="r" values="8;10;8" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </span>
    );
  } else if (temp < 10 || weather.includes('snow')) {
    // Enhanced Cold/Snow
    return (
      <span className="animated-weather-icon snow-icon" title="Snow">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Cloud */}
          <ellipse cx="25" cy="20" rx="16" ry="10" fill="#e8f4f8">
            <animate attributeName="cy" values="20;22;20" dur="3s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="20" cy="18" rx="10" ry="6" fill="#f0f8ff">
            <animate attributeName="cy" values="18;20;18" dur="2.8s" repeatCount="indefinite"/>
          </ellipse>
          {/* Snowflakes */}
          {[
            {x: 20, y: 35, delay: 0},
            {x: 25, y: 37, delay: 0.5},
            {x: 30, y: 36, delay: 1},
            {x: 22, y: 40, delay: 1.5},
            {x: 28, y: 42, delay: 2}
          ].map((flake, index) => (
            <g key={index}>
              <text x={flake.x} y={flake.y} fill="#87CEEB" fontSize="8" textAnchor="middle">❄</text>
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values={`0,0; 0,10; 0,0`}
                dur="3s" 
                repeatCount="indefinite"
                begin={`${flake.delay}s`}
              />
              <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" begin={`${flake.delay}s`}/>
            </g>
          ))}
        </svg>
      </span>
    );
  } else if (weather.includes('cloud')) {
    // Enhanced Cloudy
    return (
      <span className="animated-weather-icon cloud-icon" title="Cloudy">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Multiple cloud layers */}
          <ellipse cx="25" cy="25" rx="18" ry="12" fill="#d5dbdb" opacity="0.8">
            <animate attributeName="cx" values="25;27;25" dur="8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.6;0.8" dur="5s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="20" cy="23" rx="14" ry="9" fill="#ecf0f1" opacity="0.9">
            <animate attributeName="cx" values="20;18;20" dur="6s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="30" cy="24" rx="10" ry="7" fill="#bdc3c7" opacity="0.7">
            <animate attributeName="cx" values="30;32;30" dur="7s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
      </span>
    );
  } else {
    // Default mild weather
    return (
      <span className="animated-weather-icon mild-icon" title="Mild Weather">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Sun partially covered by cloud */}
          <circle cx="30" cy="20" r="8" fill="#FFE55C" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
          </circle>
          <ellipse cx="22" cy="25" rx="14" ry="9" fill="#f7f9fc" opacity="0.9">
            <animate attributeName="cx" values="22;24;22" dur="6s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="18" cy="23" rx="10" ry="6" fill="#eaf2f8">
            <animate attributeName="cx" values="18;16;18" dur="5s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
      </span>
    );
  }
}

function getThermometerClass(theme) {
  if (theme === 'theme-hot') return '';
  if (theme === 'theme-cold') return 'thermometer-cold';
  if (theme === 'theme-mild') return 'thermometer-mild';
  if (theme === 'theme-night') return 'thermometer-night';
  return '';
}

function getTempTextClass(theme) {
  if (theme === 'theme-hot') return 'temp-text';
  if (theme === 'theme-cold') return 'temp-text temp-text-cold';
  if (theme === 'theme-mild') return 'temp-text temp-text-mild';
  if (theme === 'theme-night') return 'temp-text temp-text-night';
  return 'temp-text';
}

export default function InfoBox({info, theme}) {
    const INIT_URL = "https://th.bing.com/th/id/OIP.IWX4BJ_abeyaOxfKwv7u4QHaEJ?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const HOT_URL = "https://th.bing.com/th/id/OIP.tu_tLQuMJSMACn9InKkZDAHaER?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const COLD_URL = "https://th.bing.com/th/id/OIP.gayyuMl64rQKgwCIfsJ8DQHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.3";
    const RAIN_URL = "https://th.bing.com/th/id/OIP.nmlojOfMZLus8pgAPsjLzQHaEJ?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    // Thermometer fill height (0-100%)
    const tempPercent = Math.max(0, Math.min(1, (info.temp - (-10)) / 45)); // -10°C to 35°C
    const thermometerFillStyle = {
      height: `${Math.round(tempPercent * 100)}%`,
      background: undefined,
    };
    if (theme === 'theme-hot') thermometerFillStyle.background = 'linear-gradient(to top, #ff5e62 0%, #ff9966 100%)';
    if (theme === 'theme-cold') thermometerFillStyle.background = 'linear-gradient(to top, #83a4d4 0%, #b6fbff 100%)';
    if (theme === 'theme-mild') thermometerFillStyle.background = 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)';
    if (theme === 'theme-night') thermometerFillStyle.background = 'linear-gradient(to top, #232526 0%, #414345 100%)';

    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" 
                                   sx={{ 
                                     fontWeight: 'bold', 
                                     marginBottom: '1rem',
                                     textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                   }}>
                            📍 {info.city} 
                            <AnimatedWeatherIcon weather={info.weather} temp={info.temp} humidity={info.humidity} theme={theme} />
                        </Typography>
                        
                        {/* Thermometer visualization */}
                        <div className={`thermometer ${getThermometerClass(theme)}`}> 
                          <div className="thermometer-fill" style={thermometerFillStyle}></div>
                        </div>
                        
                        <div className={getTempTextClass(theme)}>
                          {info.temp}°C
                        </div>
                        
                        <Typography variant="body1" sx={{ 
                          color: 'text.primary',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                          marginTop: '1.5rem'
                        }} component={"div"}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                            <p style={{ margin: '0.25rem 0', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                              🌡️ Feels Like: <strong>{info.feelsLike}°C</strong>
                            </p>
                            <p style={{ margin: '0.25rem 0', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                              💧 Humidity: <strong>{info.humidity}%</strong>
                            </p>
                            <p style={{ margin: '0.25rem 0', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                              ⬇️ Min: <strong>{info.tempMin}°C</strong>
                            </p>
                            <p style={{ margin: '0.25rem 0', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                              ⬆️ Max: <strong>{info.tempMax}°C</strong>
                            </p>
                          </div>
                          <div style={{ 
                            padding: '1rem', 
                            borderRadius: '12px', 
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            marginTop: '1rem'
                          }}>
                            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1rem' }}>
                              🌤️ The weather can be described as <strong>{info.weather}</strong> and feels like <strong>{info.feelsLike}°C</strong>
                            </p>
                          </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
