import './WeatherItem.css'
import humidity from '../images/humidity.png'
import {Link} from 'react-router-dom'
import {Container} from '@mui/material';


function WeatherItem (props){

    

    return (
        <Container maxWidth="xxl">
            <div className="wrapper">
            
                {props.weather.map((data, index) => {
                
                const date = new Date(data.date)
                
                    return (
                    
                        <Link key={index} to={`/${data.date}`}>
                            <div className="container" >
                            
                                <div>{date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</div>

                                    <div className="temp">
                                        <p className="temp-text">{data.day.avgtemp_c}&deg;</p>
                                        <img className="image" src={data.day.condition.icon} alt="icon"></img>
                                        
                                    </div>

                                

                                    <div className="city">{props.city}</div>

                                    <div className="country">{props.country}</div>
                                    
                                    <div className="humidity-image">

                                    <div>
                                        <img className="humidity-image" src={humidity} height="25px" width="25px" alt="humidity"></img>
                                        <p className="humidity-text">{data.day.avghumidity}%</p>
                                        </div>


                                </div>
                                
                            

                            </div>
                        </Link>
                        
                    )
                
                })}
                
            </div>
        </Container>
    )

}

export default WeatherItem