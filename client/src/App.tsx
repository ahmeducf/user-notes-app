import { User } from './types';

function App() {
	const users: User[] = [
		{
			name: 'Salah',
			messages: [
				{
					body: 'Hello World!',
				},
				{
					body: 'How are you?',
				},
			],
		},
	];

	return (
		<div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12">
			<h2 className="text-4xl text-yellow-500">Hello World!</h2>
		</div>
	);
}

export default App;
