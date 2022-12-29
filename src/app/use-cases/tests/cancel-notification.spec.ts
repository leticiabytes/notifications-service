import { InMemoryNoticationsRepository } from '@test/repositories/in-memory-notification-repository';

import { CancelNotification } from '../cancel-notification';
import { NotificationNotFound } from '../errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
	it('should be able to cancel a notification', async () => {
		const notificationsRepository = new InMemoryNoticationsRepository();
		const cancelNotification = new CancelNotification(notificationsRepository);

		const notification = makeNotification();

		await notificationsRepository.create(notification);

		await cancelNotification.execute({
			notificationId: notification.id,
		});

		expect(notificationsRepository.notifications[0].canceledAt).toEqual(
			expect.any(Date),
		);
	});

	it('should not to be cancel a non existing notification', async () => {
		const notificationsRepository = new InMemoryNoticationsRepository();
		const cancelNotification = new CancelNotification(notificationsRepository);

		expect(() => {
			return cancelNotification.execute({
				notificationId: 'fake-notification-id',
			});
		}).rejects.toThrow(NotificationNotFound);
	});
});
