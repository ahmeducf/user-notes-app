import UserDisplay from './components/UserDisplay';
import { User } from './types';

function App() {
	const users: User[] = [
		{
			id: 1,
			name: 'Salah',
			messages: [
				{
					id: 1,
					body: 'Hello World!',
				},
				{
					id: 2,
					body: 'How are you?',
				},
			],
		},
	];

	return (
		<div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12">
			{users.map((user) => (
				<UserDisplay user={user} key={user.id} />
			))}
		</div>
	);
}

export default App;
