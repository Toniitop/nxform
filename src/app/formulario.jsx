'use client'
import { SubmitButton } from '@/app/submitButton'
import { handle } from '@/app/actions'
import { toast } from 'react-hot-toast';


export function Formulario() {
    async function wrapper (data) {
        const {type, message} = await handle(data);
        if (type == 'success') toast.success(message)
        if (type == 'error') toast.error(message)
    }

    return (
        <form action={wrapper}>
            <label>
                Nombre:
                <input type="text" required name="nombre" placeholder="Introduce tu nombre" />
            </label>
            <label>
                Apellidos:
                <input type="text" required name="apellidos" placeholder="Introduce tus apellidos" />
            </label>
            <label>
                Selecciona un avatar para enviar al servidor:
                <input type="file" required name="avatar" accept="image/*" />
            </label>
            <label>
                Contraseña:
                <input type="password" name="passwd" placeholder="Introduce tu contraseña" />
            </label>
            <br />
            <label>
                Marca una opción:
                <br />
                    <label>
                        Opción 1: <input type="radio" name='opciones'/>
                    </label>
                    <label>
                        Opción 2: <input type="radio" name='opciones'/>
                    </label>
                    <label>
                        Opción 3: <input type="radio" name='opciones'/>
                    </label>
            </label>
            <br />
            <label>
                Marca una opción (checkbox):
                <br />
                    <label>
                        Opción 1: <input type="checkbox" name='opcionesC'/>
                    </label>
                    <label>
                        Opción 2: <input type="checkbox" name='opcionesC'/>
                    </label>
                    <label>
                        Opción 3: <input type="checkbox" name='opcionesC'/>
                    </label>
            </label>
            <br />
            <label>
                Elije una opción:
                <select name='opcionesSel'>
                    <option value="op1">Opción 1</option>
                    <option value="op2">Opción 2</option>
                    <option value="op3">Opción 3</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                Escriba lo que quiera:
                <br />
                <textarea name="mensaje" placeholder='Escribe..' cols="50" rows="20"></textarea>
            </label>
            <br />
            <br />
            <label>
                Fecha y hora:
                <input type="datetime-local" name='fechaHora' placeholder="Fecha y hora" />
            </label>
            <label>
                Mes:
                <input type="month" name='mes' placeholder="Mes" />
            </label>
            <label>
                Semana:
                <input type="week" name='semana' placeholder="Semana" />
            </label>
            <label>
                Selecciona un valor:
                <input type="range" name="rango" min="0" max="100" step="1"></input>
            </label>
            <label>
                DNI:
                <input type="number" name='dni' placeholder="DNI (sin letra)" />
            </label>
            <label>
                Búsqueda:
                <input type="search" name='busqueda' placeholder="Busca" />
            </label>
            <label>
                Teléfono:
                <input type="tel" name='telefono' placeholder="Nº móvil" />
            </label>
            <label>
                Email:
                <input type="email" name='email' placeholder="Enter your email" />
            </label>
            <label>
                URL:
                <input type="url" name='url' placeholder="URL" />
            </label>
            <SubmitButton />
        </form>
    )
}

