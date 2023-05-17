import { Text } from "./../text/text";
import "./inputRadio.css";

const InputRadio = ({ name, positions, formik }) => {
  const item = positions?.map((position) => {
    return (
      <div key={position.id} className="inputRadio_wrapper">
        <input
          id={position.id}
          className="inputRadio"
          type="radio"
          name={name}
          value={position.id.toString()}
          checked={formik.values[name] === position.id.toString()}
          onChange={formik.handleChange}
        />
        <Text>{position.name}</Text>
      </div>
    );
  });

  return <div className="inputRadio_stack">{item}</div>;
};

export default InputRadio;
