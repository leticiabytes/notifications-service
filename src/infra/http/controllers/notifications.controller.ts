import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';

import { CreateNoticationBody } from '../dtos/create-notifications-body';

@Controller('notifications')
export class NotificationsController {
	constructor(private sendNotification: SendNotification) {}
	@Post()
	async create(@Body() body: CreateNoticationBody) {
		const { content, category, recipientId } = body;
		const { notification } = await this.sendNotification.execute({
			recipientId,
			content,
			category,
		});

		return { notification };
	}
}
