'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre');
    const apellidos = formData.get('apellidos');
    const avatar = formData.get('avatar');
    const passwd = formData.get('passwd');
    const opcionSeleccionada = formData.get('opciones');
    const opcionSeleccionadaC = formData.get('opcionesC');
    const opcionSeleccionadaSel = formData.get('opcionesSel');
    const mensaje = formData.get('mensaje');
    const fechaHora = formData.get('fechaHora');
    const mes = formData.get('mes');
    const semana = formData.get('semana');
    const rango = formData.get('rango');
    const dni = formData.get('dni');
    const busqueda = formData.get('busqueda');
    const telefono = formData.get('telefono');
    const email = formData.get('email');
    const url = formData.get('url');

    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log(nombre, apellidos, avatar, passwd, opcionSeleccionada, opcionSeleccionadaC,
        opcionSeleccionadaSel,`mensaje de textarea: ${mensaje}`, fechaHora, mes, semana,
        rango, dni, busqueda, telefono, email, url);

    await new Promise((resolve) => setTimeout( resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados'}
    } catch (error) {
        return { type: 'error', message: error.message}
    }

}
