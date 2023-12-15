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
        {
          id: 3,
          body: 'I am fine.',
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 bg-zinc-800 p-4">
      {users.map((user) => (
        <UserDisplay user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
