import { React } from 'react';

const Users = (props) => {
    return(
        <li>
            <h2>{props.name}</h2>
            <p>{props.phone}</p>
        </li>
    );
};

export default Users;