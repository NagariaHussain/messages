import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
	constructor(public messagesRepo: MessagesRepository) {}

	getAll() {
		return this.messagesRepo.getAll();
	}

	findOne(id: string) {
		return this.messagesRepo.findOne(id);
	}

	create(content: string) {
		return this.messagesRepo.create(content);
	}
}
