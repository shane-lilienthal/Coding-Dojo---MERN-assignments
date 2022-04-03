const express = require("express");

const app = express();
const port = 8000;

const faker = require("faker");


const createUser = () => {
    const newUser = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newCompany;
};


app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const userCompany = {
        user: createUser(),
        company: createCompany(),
    };
    res.json(userCompany);
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
