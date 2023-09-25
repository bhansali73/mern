const usersData = require("../users.json"); //User data
//const { getUsersQueryErrors } = require("../validators/users.validators"); //Validations for use queries

//Get all users
function getUsers(req, res) {
    res.status(200).json(usersData);
}

//Filter users by Gender and/or Age
function getUsersByGenderAndAge(req, res) {
    const userGender = req.query.gender;
    const userAge = parseInt(req.query.age);

    //Validate the query parameters
    // const validationErrors = getUsersQueryErrors(req.query);

    // if (validationErrors) {
    //     return res
    //         .status(400)
    //         .json({ error: validationErrors.details[0].message });
    // }

    // Create a filter function that checks both gender and age
    const filterUsers = (user) => {
        if (userGender && userAge) {
            return user.gender === userGender && user.dob.age === userAge; //Open users.json file to get the idea
        } else if (userGender) {
            return user.gender === userGender;
        } else if (userAge) {
            return user.dob.age === userAge;
        } else {
            return true; //If no filters are specified, return all users
        }
    };

    const filteredUsers = usersData.data.filter(filterUsers);

    if (filteredUsers.length > 0) {
        res.status(200).json(filteredUsers);
    } else {
        res.status(404).json({ message: "No users found" });
    }
}

function getUsersByUUID(req, res) {
    const uuid = req.params.uuid;
    const user = usersData.data.find((user) => user.login.uuid === uuid);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

module.exports = {
    getUsers,
    getUsersByGenderAndAge,
    getUsersByUUID,
};
