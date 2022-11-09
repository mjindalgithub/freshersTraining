import React, { useState } from "react";

const AddUserForm = (props) => {
    const initUser = { id: null, name: "", username: "" };

    const [user, setUser] = useState(initUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    };
    //in our handleSubmit we are preventing the default page refresh and also checking if our user.name and
    //user.username actually have both been filled in.

    return (
        <form>
            <label>Name</label>
            <input
                className="u-full-width"
                type="text"
                value={user.name}
                name="name"
                onChange={handleChange}
            />
            <label>Username</label>
            <input
                className="u-full-width"
                type="text"
                value={user.username}
                name="username"
                onChange={handleChange}
            />
            <button
                className="button-primary"
                type="submit"
                onClick={handleSubmit}
            >
                Add user
            </button>
        </form>
    );
};

export default AddUserForm;
