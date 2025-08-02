import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="2d5a5d6d542dbc763d6676f71b786b1e";

    let getWeatherInfo = async () => {
        try {
            let respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await respone.json();
        //console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result
        } catch(err) {
            throw err;
        }
    }

    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    let [loading, setLoading] = useState(false);

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setLoading(true);
            setError(false);
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch(err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" 
                label="City Name" 
                variant="outlined" 
                required value={city} 
                onChange={handleChange} 
                className='TextField'
                disabled={loading}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.9)',
                            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                        },
                    },
                }}
            />
            <br /><br /><br />
            <Button 
                variant="contained" 
                startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SearchIcon />} 
                type='submit'
                disabled={loading}
                className={loading ? 'loading-btn' : ''}
            >
                {loading ? 'Searching...' : 'Search'}
            </Button>
            {error && (
                <div className="error-message">
                    <p style={{color:"#ff6b6b", fontWeight: "bold", marginTop: "1rem"}}>
                        🌍 No Such Place Exists in API
                    </p>
                </div>
            )}
            </form>
        </div>
    );
}