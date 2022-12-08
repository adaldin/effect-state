import { Label, InputNumber } from '../atoms/index'

export function InputGroupNumber({ size, name, id, onChange, label }) {
  return (
    <div>
      <Label htmlFor={id} label={label} />
      <InputNumber size={size} name={name} id={id} onChange={onChange} />
    </div>
  )
}
