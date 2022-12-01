function Shape({ size, handleChange, children, shapeStyle }) {
  return (
    <div>
      <div>
        <label>{children} Size</label>
        <input
          type="number"
          name={`${children.toLowerCase()}Size`}
          onChange={handleChange}
          placeholder={size}
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
        <div style={shapeStyle}></div>
      </div>
    </div>
  );
}
export default Shape;
