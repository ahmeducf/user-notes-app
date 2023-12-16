import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// Delete all `User` and `Message` records
	await prisma.message.deleteMany({});
	await prisma.user.deleteMany({});
	// Create dummy `User` and `Message` records
	await prisma.user.create({
		data: {
			name: 'Salah',
			messages: {
				create: [
					{
						body: 'A Note for Salah',
					},
					{
						body: 'Another note for Salah',
					},
				],
			},
		},
	});
	await prisma.user.create({
		data: {
			name: 'Ahmed',
			messages: {
				create: [
					{
						body: 'A Note for Ahmed',
					},
					{
						body: 'Another note for Ahmed',
					},
				],
			},
		},
	});
	await prisma.user.create({
		data: {
			name: 'Adam',
			messages: {
				create: [
					{
						body: 'A Note for John',
					},
					{
						body: 'Another note for John',
					},
				],
			},
		},
	});
}

main()
	.then(async () => {
		console.log('Data seeded...');
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
