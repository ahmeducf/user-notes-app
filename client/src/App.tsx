import { useQuery } from 'urql';
import UserDisplay from './components/UserDisplay';
import { GetUsersDocument } from './graphql/generated';

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-y-scroll bg-zinc-800 p-4 pt-16">
      {results.data?.users.map((user) => (
        <UserDisplay user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
