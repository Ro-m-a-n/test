import { Text } from "./text";

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

        <label htmlFor={position.id}>
          <Text>{position.name}</Text>
        </label>
      </div>
    );
  });

  return <div className="inputRadio_stack">{item}</div>;
};

export default InputRadio;
