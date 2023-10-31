import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('current')
  async getCurrentWeather() {
    return await this.weatherService.getCurrentWeather();
  }
}
