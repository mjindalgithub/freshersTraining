import React from "react";

const EditBtn = (props) => {
    const handleEdit = (e) => {
        e.preventDefault();
        const Id = prompt("Enter your Id", props.detailsArr[props.indexVal].id);
        const Name = prompt(
            "Enter your Name",
            props.detailsArr[props.indexVal].name
        );
        const Department = prompt(
            "Enter your Department",
            props.detailsArr[props.indexVal].department
        );
        const RmName = prompt(
            "Enter your Reporting Manager Name",
            props.detailsArr[props.indexVal].RMname
        );
        let data = JSON.parse(localStorage.getItem("Employee Details"));
        const myData = data.map((emp, index) => {
            if (index === props.indexVal) {
                return {
                    ...emp,
                    id: Id,
                    name: Name,
                    department: Department,
                    RMname: RmName,
                };
            }
            return emp;
        });
        props.setDetailsArr(myData);
    };
    return (
        <button type="submit" onClick={handleEdit}>
            Edit
        </button>
    );
};

export default EditBtn;
