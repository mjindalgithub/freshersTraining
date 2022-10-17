import React, { useState } from "react";

const EmployeeForm = (props) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        department: "",
        RMname: "",
    });

    const handleChangeId = (e) => {
        setEmployee((prevValue) => {
            return { ...prevValue, id: e.target.value };
        });
        console.log(employee.id);
    };

    const handleChangeName = (e) => {
        setEmployee((prevValue) => {
            return { ...prevValue, name: e.target.value };
        });
        console.log(employee.name);
    };

    const handleChangeDepartment = (e) => {
        setEmployee((prevValue) => {
            return { ...prevValue, department: e.target.value };
        });
    };

    const handleChangeRMname = (e) => {
        setEmployee((prevValue) => {
            return { ...prevValue, RMname: e.target.value };
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (
            employee.id &&
            employee.name &&
            employee.department &&
            employee.RMname
        ) {
            props.setDetails((prev) => {
                return [...prev, employee];
            });
            const data = props.details;
            localStorage.setItem("Employee Details", JSON.stringify(data));
        } else {
            alert("Please fill all the fields");
        }
    };
    return (
        <div>
            <h1>Employee CRUD Operations</h1>
            <form>
                <label>Employee Id</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter employee id"
                    name="id"
                    onChange={handleChangeId}
                />
                <br />
                <label>Employee Name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter employee Name"
                    name="name"
                    onChange={handleChangeName}
                />
                <br />
                <label>Department Name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter your department name"
                    name="department"
                    onChange={handleChangeDepartment}
                />
                <br />
                <label>Reporting Manager</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter your RM name"
                    name="RMname"
                    onChange={handleChangeRMname}
                />
                <br />
                <input type="submit" onClick={submitForm} value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeForm;
