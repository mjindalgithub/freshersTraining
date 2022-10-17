import React, { useEffect, useState } from "react";
import DisplayFormDetails from "./DisplayFormDetails";
import EmployeeForm from "./EmployeeForm";

const EmployeeDetails = () => {
    const [empDetails, setEmpDetails] = useState(() => {
        if (JSON.parse(localStorage.getItem("Employee Details")))
            return JSON.parse(localStorage.getItem("Employee Details"));
        else return [];
    });

    //update localstorage values after deletion/updation
    useEffect(() => {
        localStorage.setItem("Employee Details", JSON.stringify(empDetails));
    }, [empDetails]);

    return (
        <>
            <EmployeeForm details={empDetails} setDetails={setEmpDetails} />
            <DisplayFormDetails
                details={empDetails}
                setDetails={setEmpDetails}
            />
        </>
    );
};

export default EmployeeDetails;
