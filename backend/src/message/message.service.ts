import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Message } from './../entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>
    ) { }

    async create(message: Message): Promise<Message> {
        return await this.messageRepository.save(message);
    }

    async  readAll(): Promise<Message[]> {
        return await this.messageRepository.find();
    }

    async update(message: Message): Promise<UpdateResult> {

        return await this.messageRepository.update(message.id, message);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.messageRepository.delete(id);
    }
}
