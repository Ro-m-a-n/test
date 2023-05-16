import { Text } from "./../text/text";
import "./inputRadio.css";

const InputRadio = ({ name, values, formik, design }) => {
  const item = values.map((value) => {
    return (
      <div className="inputRadio_wrapper">
        <input
          className="inputRadio"
          type="radio"
          name={name}
          value={value}
          checked={formik.values[name] === value}
          onChange={formik.handleChange}
        />
        <Text>{value}</Text>
      </div>
    );
  });

  return <div className="inputRadio_stack">{item}</div>;
};

export default InputRadio;
