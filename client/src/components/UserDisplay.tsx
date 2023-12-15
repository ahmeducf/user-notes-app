import { User } from '../types';
import MessageDisplay from './MessageDisplay';

interface Props {
  user: User;
}

function UserDisplay({ user }: Props) {
  return (
    <div className="flex justify-center gap-x-24">
      <div className="flex h-20 w-48 items-center justify-center rounded-sm bg-neutral-700 drop-shadow-md">
        <p className="text-xl font-bold text-gray-200">{user.name}</p>
      </div>
      <div>
        {user.messages.map((message, index) => (
          <MessageDisplay key={message.id} message={message} index={index} />
        ))}
      </div>
    </div>
  );
}

export default UserDisplay;
