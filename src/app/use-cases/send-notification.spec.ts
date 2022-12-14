import { InMemoryNoticationsRepository } from '../../../test/repositories/in-memory--notification-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
	it('should be able to send a notification', async () => {
		const notificationsRepository = new InMemoryNoticationsRepository();
		const sendNotification = new SendNotification(notificationsRepository);

		const { notification } = await sendNotification.execute({
			content: 'This is a notification',
			category: 'Test',
			recipientId: '12k3n98dasi',
		});

		expect(notificationsRepository.notifications).toHaveLength(1);
		expect(notificationsRepository.notifications[0]).toEqual(notification);
	});
});
