import { Content } from './content';

describe('Notification content', () => {
	it('should be able to create a notification conent', () => {
		const content = new Content('Do you have a new message. click to read');

		expect(content).toBeTruthy();
	});

	it('should not be able to create a notification conent with less than 5 characters', () => {
		expect(() => new Content('...')).toThrow();
	});

	it('should not be able to create a notification conent with mote than 240 characters', () => {
		expect(() => new Content('...'.repeat(240))).toThrow();
	});
});
