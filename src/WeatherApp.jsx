import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ParticleEffects from "./ParticleEffects";
import { useState } from "react";
import { useEffect } from "react";

function getTheme(temp, hour) {
    if (hour >= 19 || hour < 6) return "theme-night";
    if (temp > 25) return "theme-hot";
    if (temp < 10) return "theme-cold";
    return "theme-mild";
}

export default function WeatherApp() {
    let [weatherinfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike: 24.80,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let [theme, setTheme] = useState("theme-mild");
    let [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();
        const newTheme = getTheme(weatherinfo.temp, hour);
        
        if (newTheme !== theme) {
            setIsTransitioning(true);
            setTimeout(() => {
                setTheme(newTheme);
                setIsTransitioning(false);
            }, 300);
        }
    }, [weatherinfo, theme]);

    let updateInfo = (newInfo) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setWeatherInfo(newInfo);
            setIsTransitioning(false);
        }, 200);
    }

    return(
        <div className={`weather-root ${theme} ${isTransitioning ? 'transitioning' : ''}`} 
             style={{
                 textAlign:"center", 
                 minHeight: "100vh", 
                 transition: "all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
                 position: "relative"
             }}>
            
            {/* Particle Effects Background */}
            <ParticleEffects 
                weather={weatherinfo.weather} 
                temp={weatherinfo.temp} 
                humidity={weatherinfo.humidity} 
                theme={theme} 
            />
            
            {/* Main Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <h1 style={{marginTop: 0}}>
                    ✨ Weather App by Paras ✨
                </h1>
                
                <SearchBox updateInfo={updateInfo} />
                
                <div className={`info-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    <InfoBox info={weatherinfo} theme={theme} />
                </div>
            </div>
        </div>
    );
}
