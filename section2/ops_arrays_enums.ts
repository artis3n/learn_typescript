enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Ari',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
