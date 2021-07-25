import { MessagesRepository } from './messages.repository';

export class MessagesService {
	messagesRepo: MessagesRepository;

	constructor() {
		this.messagesRepo = new MessagesRepository();
	}

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
