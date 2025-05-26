export interface User {
  id: string;
  name: string;
}

export type UserRegistry = Record<string, User>;

export const USERS: UserRegistry = {
  one: { id: "one", name: "John Doe" },
};
