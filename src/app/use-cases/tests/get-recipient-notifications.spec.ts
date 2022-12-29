import { InMemoryNoticationsRepository } from '@test/repositories/in-memory-notification-repository';

import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from '../get-recipient-notifications';

describe('Get recipients notifications', () => {
	it('should be able to get recipient notifications', async () => {
		const notificationsRepository = new InMemoryNoticationsRepository();
		const getRecipientNotifications = new GetRecipientNotifications(
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

		const { notifications } = await getRecipientNotifications.execute({
			recipientId: 'recipientId-1',
		});

		expect(notifications).toHaveLength(2);
		expect(notifications).toEqual(
			expect.arrayContaining([
				(expect.objectContaining({
					recipientId: 'recipientId-1',
				}),
				expect.objectContaining({
					recipientId: 'recipientId-1',
				})),
			]),
		);
	});
});
