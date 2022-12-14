import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Notification } from '@app/entities/notification';

export class InMemoryNoticationsRepository implements NotificationsRepository {
	public notifications: Notification[] = [];

	async create(notification: Notification) {
		this.notifications.push(notification);
	}
}
