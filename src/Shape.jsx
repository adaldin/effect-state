function Shape({ color, handleChange, children, style, size }) {
  return (
    <div>
      <div>
        <label>{children} size</label>
        <input type={number} value={size} />
      </div>
      <div>
        <label></label>
        <input />
      </div>
      <div></div>
    </div>
  );
}
export default Shape;
