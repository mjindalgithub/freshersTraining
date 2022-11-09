import React from "react";

const DeleteBtn = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        props.setDetailsArr(
            props.detailsArr.filter((val, index) => index !== props.indexVal)
        );
    };
    return (
        <button onClick={handleDelete} key={props.indexVal}>
            Delete
        </button>
    );
};

export default DeleteBtn;
