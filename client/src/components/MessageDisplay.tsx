import { Message } from '../types';

interface Props {
	message: Message;
}

function MessageDisplay({ message }: Props) {
	return (
		<div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
			<p className="text-sm text-gray-200 font-bold px-4">{message.body}</p>
		</div>
	);
}

export default MessageDisplay;