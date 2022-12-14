import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
	it('should be able to create a notification', () => {
		const notification = new Notification({
			content: new Content('Do you have a new message. Click to read'),
			category: 'News',
			recipientId: 'asdfds',
		});

		expect(notification).toBeTruthy();
	});
});
