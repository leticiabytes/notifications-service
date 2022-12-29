import { InMemoryNoticationsRepository } from '@test/repositories/in-memory-notification-repository';

import { CountRecipientNotifications } from '../count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
	it('should be able to count recipient notifications', async () => {
		const notificationsRepository = new InMemoryNoticationsRepository();
		const countRecipientNotifications = new CountRecipientNotifications(
			notificationsRepository,
		);

		await notificationsRepository.create(
			makeNotification({
				recipientId: 'recipientId-1',
			}),
		);

		await notificationsRepository.create(
			makeNotification({
				recipientId: 'recipientId-1',
			}),
		);

		await notificationsRepository.create(
			makeNotification({
				recipientId: 'recipientId-2',
			}),
		);

		const { count } = await countRecipientNotifications.execute({
			recipientId: 'recipientId-1',
		});

		expect(count).toEqual(2);
	});
});
