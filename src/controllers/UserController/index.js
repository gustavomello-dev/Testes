import users from "../../database/users.js";
import {v4 as uuidv4} from "uuid";

function insert(req, res) {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required." });
    }

    const newUser = { id: uuidv4(), name, age };
    users.push(newUser);

    delete newUser.id

    res.status(201).json(newUser);
}

function select(req, res) {
    const {initialAge, finalAge} = req.query;

    const usersFiltered = users.filter(user => {
        if (initialAge && finalAge) {
            return user.age >= parseInt(initialAge) && user.age <= parseInt(finalAge);
        }

    });
    

    res.status(200).json(usersFiltered);
}

function update(req, res) {}

function destroy(req, res) {}

export default { insert, select, update, destroy };
