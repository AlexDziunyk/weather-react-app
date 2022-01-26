import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import  './WeatherDetails.css'
import {useNavigate} from 'react-router-dom'
import { Grid, Container} from '@mui/material';



  function WeatherDetails(props){
    const date = new Date(props.weather.date)
    const navigate = useNavigate()

    const goBack = () => {
      navigate(-1)
    }

    return (
        <div className="statistics-block" key={props.key}>
          
          <Container maxWidth="xxl">
            
            
              <Grid container spacing={4}>
                
                <Grid item xs={12}>
                  <button onClick={goBack} className="button">Go back</button>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <div>
                    <div className="tempInfo">

                      <div >{date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div >Location: {props.city}, {props.country}</div>
                      <div>Max Temperature: {props.weather.day.maxtemp_c} &deg;C</div>
                      <div>Min Temperature: {props.weather.day.mintemp_c} &deg; C</div>
                      <div>Avg Temperature: {props.weather.day.avgtemp_c} &deg; C
                      </div>

                  

                    </div>

                    <div className="windInfo">
                    <div>Max wind: {props.weather.day.maxwind_kph} km/h</div>
                    <div>Avg humidity: {props.weather.day.avghumidity} %</div>
                    <div>Chance of rain: {props.weather.day.daily_chance_of_rain} %</div>
                    <div>Condition: {props.weather.day.condition.text}</div>
                      
                    </div>
                    <div className="sunMoonInfo">
                      <div>Sunrise: {props.weather.astro.sunrise}</div>
                      <div>Sunset: {props.weather.astro.sunset}</div>
                      <div>Moonrise: {props.weather.astro.moonrise}</div>
                      <div>Moonset: {props.weather.astro.moonset}</div>
                      <div>Moon Phase: {props.weather.astro.moon_phase}</div>
                    </div>

                  </div> 
                  
                </Grid>
                <Grid item xs={12} lg={7}>
                
                  <div className="temp-block">
                    <Line
                      data={{
                        labels:['0H','1H', '2H', '3H' ,'4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H', '15H', '16', '17H', '18H', '19H', '20H', '21H', '22H', '23H'],
                        datasets:[
                          {
                            label: 'Temperature Graph by Hours',
                            data: props.weather.hour.map((temp) => temp.temp_c),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            
                          },
                        ],
                      }}
                      
                      
                      options={{
                        responsive: true,
                        
                      }}
                    />
                    
                  </div>
            
                </Grid>
            
              </Grid> 
          </Container>
        </div>
    )

  }

  export default WeatherDetails