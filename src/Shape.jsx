function Shape({ color, size, handleChange, children }) {
  console.log(color, size, handleChange, children);
  return (
    <div>
      <div>
        <label>{children} Size</label>
        <input
          type="number"
          name={`${children.toLowerCase()}Size`}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>{children} color</label>
        <input
          type="color"
          name={`${children.toLowerCase()}Color`}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `${color}`,
          }}
        ></div>
      </div>
    </div>
  );
}
export default Shape;
