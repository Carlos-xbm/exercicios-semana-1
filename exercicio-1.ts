//EXERCÍCIO_1
export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: "Wilker",
    age: 25,
    occupation: "Backend developer",
  },
  {
    name: "Bob",
    age: 23,
    occupation: "Product Manager",
  },
];

export function logPerson(user: any) {
  console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}

console.log("Users:");
users.forEach(logPerson);
