import UserList from "./UserList.js";
import "./FormSubmit.css";

const FormSubmit = (props) => {
  return (
    <div className="list-items">
      {props.item.map((item) => (
        <UserList key={item.key} userName={item.userName} userAge={item.age} />
      ))}
    </div>
  );
};

export default FormSubmit;
