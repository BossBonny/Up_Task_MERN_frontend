import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"
import useAdmin from "../hooks/useAdmin";

const Tarea = ({tarea}) => {

    const {handleModalEditarTarea, handleModalEliminarTarea, completarTarea} = useProyectos();

    const {descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea

    const admin = useAdmin();

    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
                <p className="mb-1 text-xm">{formatearFecha(fechaEntrega)}</p>
                <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
                { estado && <p className="text-xs bg-green-400 uppercase p-1 rounded-lg text-white">Completada por: {tarea.completado.nombre}</p>}
            </div>
            <div className="flex gap-1 flex-col lg:flex-row">

                {admin && (
                    <button
                        className="bg-indigo-400 hover:bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                        onClick={() => handleModalEditarTarea(tarea)}
                    >Editar</button>
                )}

                <button
                        className={`${estado ? 'bg-sky-400 hover:bg-sky-600 ' : 'bg-gray-400 hover:bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg `}
                        onClick={() => completarTarea(_id)}
                    >{estado ? 'Completa' : 'Incompleta'}</button>

                {admin && (
                    <button
                        className="bg-red-400 hover:bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                        onClick={() => handleModalEliminarTarea(tarea)}
                    >Eliminar</button>
                )}
            </div>
        </div>
    )
}

export default Tarea