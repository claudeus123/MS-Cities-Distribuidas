import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/entities/city.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CitiesService {
  constructor(@InjectRepository(City) private cityRepository: Repository<City>){}
  async create(createCityDto: CreateCityDto) {
    const city =  this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll() {
    return await this.cityRepository.find();
  }

  
}
