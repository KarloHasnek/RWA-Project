import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}


    async getAllUsers(): Promise<User[]> {
            
        const found: User[] = await this.userRepo.find()
        
        return found
    }
}