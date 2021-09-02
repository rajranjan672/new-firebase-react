import Users from "./Users";

const UsersList = (props) => {
    return (
        <ul>
            {props.users.map((u) => (
                <Users
                name= {u.name}
                phone= {u.phone}
                />
            ))}
        </ul>
    );
};
export default UsersList;