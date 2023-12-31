import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {}

	create(createUserDto: CreateUserDto) {
		return this.userRepository.save(createUserDto);
	}

	findOneByEmail(email: string) {
		return this.userRepository.findOneBy({ email });
	}

	findAll() {
		return `This action returns all users`;
	}

	findById(id: string) {
		return this.userRepository.findOneBy({ id });
	}

	update(id: string, updateUserDto: UpdateUserDto) {
		return this.userRepository.update(id, updateUserDto);
	}

	remove(id: string) {
		return `This action removes a #${id} user`;
	}
}
