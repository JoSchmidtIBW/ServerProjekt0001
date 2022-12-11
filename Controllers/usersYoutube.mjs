import { v4 as uuidv4 } from 'uuid'; //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


let usersYoutube = [];


export const getUsers = (req, res) => {
    res.send(usersYoutube);
}


export const createUser = (req, res) => {
    console.log('POST ROUTE REACHED');

    //console.log(req.body);
    //console.log('user');
    const user = req.body;

    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    //const userWithId = {...user, id: userId };

    const userWithId = {...user, id: uuidv4() };

    //usersYoutube.push(user);
    //usersYoutube.push(userWithId);
    usersYoutube.push({...user, id: uuidv4() }); //npm start


    //res.send('POST ROUTE REACHED');
    res.send(`User with the username ${user.firstName} added to the Database`);
}

export const getUser = (req, res) => {
    console.log(req.params);

    const { id } = req.params;

    const foundUser = usersYoutube.find((user) => user.id === id)

    //res.send(req.params);
    res.send(foundUser);
    //res.send("the GET ID Route");
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    // id to delete 123

    // john 123
    // jane 321

    usersYoutube = usersYoutube.filter((user) => user.id !== id);
    res.send(`User with the ID ${id} deleted from the database`);
}


export const updateUser = (req, res) => {
    //bekomme request-parameter, die id
    const { id } = req.params;
    //das kann verändert werden
    const { firstName, lastName, age } = req.body;

    const user = usersYoutube.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }

    if (firstName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }


    res.send(`User with the id ${id} has been updated`)


}