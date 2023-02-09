import { Fragment } from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

  const { datos, handleChangeDatos, cotizarSeguro, error, setError, resultado } = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios')
      return 
    }
    setError('')

    cotizarSeguro()

  }

  return (
    <>
      { error && <Error /> }
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-10">
          <label htmlFor="marca" className="block mb-3 font-bold text-gray uppercase">Marca</label>
          <select 
            name="marca" 
            id="marca" 
            className="w-full p-3 bg-white border border-gray-200"
            onChange={ e => handleChangeDatos(e) }
            value={datos.marca}
          >
            <option value="">-- Selecciona Marca</option>
            {MARCAS.map(marca => (
              <option 
                key={marca.id}
                value={marca.id}
              >
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-10">
          <label htmlFor="anio" className="block mb-3 font-bold text-gray uppercase">Año</label>
          <select 
            name="anio" 
            id="anio" 
            className="w-full p-3 bg-white border border-gray-200"
            onChange={ e => handleChangeDatos(e) }
            value={ datos.anio }
          >
            <option value="">-- Selecciona Año</option>
            {YEARS.map(year => (
              <option
                key={year}
                value={year}
              >{year}</option>
            ))
            }
          </select>
        </div>
        <div className="my-10">
          <label className="block mb-3 font-bold text-gray uppercase">Elige tu plan</label>
          <div className="flex gap-3 items-center">
            {PLANES.map(plan => (
              <Fragment key={plan.id}>
                <label htmlFor={plan.nombre}>{plan.nombre}</label>
                <input 
                  type="radio" 
                  name='plan' 
                  id={plan.nombre} 
                  value={plan.id} 
                  onChange={ e => handleChangeDatos(e) }
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input type="submit" value="Cotizar" className="w-full bg-indigo-500 hover:bgindigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />
      </form>
    </>
  )
}

export default Formulario