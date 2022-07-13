import { useEffect, useRef } from "react";
import { useState } from "react";
const apiKey = '2fe8bcc1'



function App() {
/* 
Reglas para manejar los hooks.
1. Se debe  ejecutar en la cabecera o logica  del componente
2. NO se puede cargar en condicionales ni ciclos
cada vez que actualizo un estado se vuelve a renderizar el componente
3. LOs estados se actualizan en la segunda carga

*/

/*SE ejecuta Siempre que se ejecuta un componente o hay un cambio de estado
  useEffect(() => {
  setText('desde el componente')
  console.log('carga del componente')
}) */

//Se ejecuta cuando hay un cambio en alguna dependencia

const [text, setText] = useState('')

useEffect(() => {
  setText('desde el componente')
  console.log('carga del componente')
})


  const searchRef = useRef(null)
 

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(searchRef.current.value)
    setText('Desde un evento')
  }

  setText('desde el componente')
  console.log(text);

  return (
    <section className="container">
      <h4 className=" py-4 text-center">Buscardor de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input 
                  ref={searchRef}
                  type="search" 
                  className="form-control" 
                  placeholder="Buscar"
                  name='buscador'
                  />
                  
          
          <button className="btn btn-primary"> Buscar </button>
        </div>
      </form>
    </section>
  );
}
export default App;

// npx npkill elimina la carpeta node
