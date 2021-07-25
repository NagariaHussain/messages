import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
	async getAll() {
		const data = await readFile('messages.json', 'utf8');
		const messages = JSON.parse(data);

		return messages;
	}

	async findOne(id: string) {
		const data = await readFile('messages.json', 'utf8');
		const messages = JSON.parse(data);

		return messages[id];
	}

	async create(content: string) {
		const data = await readFile('messages.json', 'utf8');
		const messages = JSON.parse(data);

		const id = Math.floor(Math.random() * 999);
		messages[id] = { id, content };

		await writeFile('messages.json', JSON.stringify(messages));
	}
}
