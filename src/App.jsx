import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import NuevoPassword from './pages/NuevoPassword';
import OlvidePassword from './pages/OlvidePassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import Proyectos from './pages/Proyectos';
import NuevoProyecto from './pages/NuevoProyecto';
import Proyecto from './pages/Proyecto';
import EditarProyecto from './pages/EditarProyecto';
import NuevoColaborador from './pages/NuevoColaborador';

import { AuthProvider } from './context/AuthProvider';
import { ProyectoProvider } from './context/ProyectosProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectoProvider> 
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='registrar' element={<Registrar/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
            </Route>
            <Route path="/proyectos" element={<RutaProtegida/>}>
                <Route index element={<Proyectos/>}/>
                <Route  path="crear-proyecto" element={<NuevoProyecto/>}/>
                <Route  path="nuevo-colaborador/:id" element={<NuevoColaborador/>}/>
                <Route  path=":id" element={<Proyecto/>}/>
                <Route  path="editar/:id" element={<EditarProyecto/>}/>
            </Route>
          </Routes>
        </ProyectoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
