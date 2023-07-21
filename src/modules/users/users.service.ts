import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import *  as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({where:{id}});
  }
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({where:{email}});
  }

  async create(email:string,password:string): Promise<User>{

    const hash = bcrypt.hashSync(password, process.env.SECRET_KEY);
    const user = this.userRepository.create({email:email,password:hash})

    try{
        return this.userRepository.save(user)
    }catch(e){
        throw new BadRequestException();
    }
    return
  }
}