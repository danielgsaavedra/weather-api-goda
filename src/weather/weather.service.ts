import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getCurrentWeather() {
    const apiKey = 'b22384d9a2b7e4b5b8391837d82d13a6';
    const lat = -33.0014;
    const lon = -71.2665;
    const lang = 'es';
    const metric = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=${metric}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
}
