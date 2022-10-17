import "./AllUsers.css";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";

const AllUsers = (props) => {
	const users = props.userArr;
	const usersMap =
		users &&
		users.map((user, index) => (
			<tr key={index}>
				<td>{user.userName}</td>
				<td>{user.email}</td>
				<td>{user.mobile}</td>
				<td>
					<EditButton
						userArr={props.userArr}
						setUserArr={props.setUserArr}
						index={index}
					/>{" "}
					<DeleteBtn
						userArr={props.userArr}
						setUserArr={props.setUserArr}
						index={index}
					/>
				</td>
			</tr>
		));

	if (props.userArr.length === 0) {
		return <h3>No record found</h3>;
	} else {
		return (
			<table border={1}>
				<thead>
					<tr>
						<th className="tr-name">Name</th>
						<th className="tr-email">Email</th>
						<th className="tr-mobile">Mobile</th>
						<th className="tr-opn">Operations</th>
					</tr>
				</thead>
				<tbody>{usersMap}</tbody>
			</table>
		);
	}
};

export default AllUsers;
