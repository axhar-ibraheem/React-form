


const UserList = (props) => {
  return (
    <div className="text">
      <h3>{`${props.userName} (${props.userAge}years old)`}</h3>
    </div>
  );
};

export default UserList;
