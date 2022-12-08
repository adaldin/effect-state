import { Label, InputColor } from '../atoms/index'

export function InputGroupColor({ color, name, id, onChange, label }) {
  return (
    <div>
      <Label htmlFor={id} label={label} />
      <InputColor color={color} name={name} id={id} onChange={onChange} />
    </div>
  )
}
