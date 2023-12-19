var student = [{
    id: 1,
    name: "Ahmed Hossam",
    phone: "01234567890",
    email: "ahmed@gmail.com",
    dateOfBirth: '2 / 1 / 2000',
    track: 'open source',
    gender: "male",
    hobbies: ['football', "TV Show"],
    address: {
        location: "Cairo",
        Country: "Egypt",
        zipCode: 1220
    }

},
{
    id: 2,
    name: "Omar Sayed",
    phone: "0112345678",
    email: "omar@gmail.com",
    dateOfBirth: '7/11/1998',
    address: 'alex , Egypt',
    track: 'open source',
    gender: "male",
    hobbies: ['football', "TV Show"],
    address: {
        location: "Cairo",
        Country: "Egypt",
        zipCode: 1220
    }
},
{
    id: 3,
    name: "Nouran Tarek",
    phone: "0112345678",
    email: "nour@gmail.com",
    dateOfBirth: '10/6/2001',
    address: 'helwan , Egypt',
    track: 'open source',
    gender: "female",
    hobbies: ['football', "TV Show"],
    address: {
        location: "Cairo",
        Country: "Egypt",
        zipCode: 1220
    }
},

{
    id: 4,
    name: "Seif Osama",
    phone: "0102345678",
    email: "seif@gmail.com",
    dateOfBirth: '11/4/1999',
    address: 'alex , Egypt',
    track: 'open source',
    gender: "male",
    hobbies: ['football', "TV Show"],
    address: {
        location: "Cairo",
        Country: "Egypt",
        zipCode: 1220
    }
},



];
student.forEach(function (stu) {
    console.log(`Name: Mr. ${stu.name}
Email: ${stu.email}
Phone: ${stu.phone}
Address: ${stu.address.location}, ${stu.address.Country} - ${stu.address.zipCode}`);

    stu.hobbies.forEach(function (hob) {
        console.log(`Hobbies are ${hob}`);
    });
});

