import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const DisplayFormDetails = (props) => {
    return (
        <div className="displayDetails">
            <h2>Details of Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Department</th>
                        <th>Reporting Manager</th>
                    </tr>
                </thead>
                <tbody>
                    {props.details.length > 0 ? (
                        props.details.map((value, index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.department}</td>
                                <td>{value.RMname}</td>
                                <td>
                                    {" "}
                                    <DeleteBtn
                                        indexVal={index}
                                        setDetailsArr={props.setDetails}
                                        detailsArr={props.details}
                                    />{" "}
                                </td>
                                <td>
                                    {" "}
                                    <EditBtn
                                        indexVal={index}
                                        setDetailsArr={props.setDetails}
                                        detailsArr={props.details}
                                    />{" "}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>No Employee records found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayFormDetails;
