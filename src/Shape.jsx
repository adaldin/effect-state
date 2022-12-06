function Shape({ size, handleChange, children, shapeStyle }) {
  return (
    <div>
      <div>
        {/* Falta htmlFor */}
        <label>{children} Size</label>
        {/* Falta id y name */}
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
        {/* En lugar de pasar estilos, crear un componente por cada Forma y escribirlas en SVG, validar con propTypes */}
        <div style={shapeStyle}></div>
      </div>
    </div>
  );
}
export default Shape;
