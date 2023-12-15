import UserDisplay from './components/UserDisplay';
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
			{users.map((user, i) => (
				<UserDisplay user={user} key={i} />
			))}
		</div>
	);
}

export default App;
