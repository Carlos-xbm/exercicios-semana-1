//EXERCÍCIO_3

interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    {
        type: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        type: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];
const users: User[] = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        type: "user",
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
];

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, 
        ${person.type === "admin" ? person.role : person.occupation}`
    );
}
admins.forEach(logPerson);
