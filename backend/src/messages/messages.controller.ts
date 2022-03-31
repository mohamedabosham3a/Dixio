import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Message } from '../entities/message.entity';
import { MessageService } from '../message/message.service';

@Controller('messages')
export class MessagesController {

    constructor(private messageService: MessageService) {
        
    }
    @Get()
    read(): Promise<Message[]> {
        return this.messageService.readAll();
    }

    @Post('create')
    async create(@Body() message: Message): Promise<any> {
        return this.messageService.create(message);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() message: Message): Promise<any> {
        message.id = Number(id);
        return this.messageService.update(message);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.messageService.delete(id);
    }
}
