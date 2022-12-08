import { ShapeForm } from './components/organisms/ShapeForm'

// Al tener toda la lógica en un mismo componente se vuelve dificil de leer.
// Crearia los siguientes componentes en atoms: Label,
// InputNumber, InputColor, Triangle, Square y Circle.
// Crearia componentes/hooks para agrupar y reutilizar lógica.
export function App() {
  // Puedes usar un state para cada valor, aunque esta bien

  return (
    <div>
      <h4>Ejercicio useEffect useState.</h4>
      <ShapeForm />
    </div>
  )
}
