export type Message = {
	id: number;
  body: string;
};

export type User = {
  id: number;
  name: string;
  messages: Message[];
};
