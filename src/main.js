import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zmabqgopwdtmqqblcwly.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptYWJxZ29wd2R0bXFxYmxjd2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwOTYwNjEsImV4cCI6MjA4OTY3MjA2MX0.P5rPSAIMrri0KuDytXPcpCX9_gxTWgN6CIZiaI9WLVE'

const supabase = createClient(supabaseUrl, supabaseKey)

const boton = document.getElementById("cargarDatos")
const tabla = document.getElementById("tablaLibros")

boton.addEventListener("click", async () => {

    const { data, error } = await supabase
        .from("libros")
        .select("*")

    if(error){
        console.log("Error:", error)
        return
    }

    tabla.innerHTML = ""

    data.forEach(libro => {

        const fila = document.createElement("tr")

        fila.innerHTML = `
        <td>${libro.id}</td>
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.anio}</td>
        <td>${libro.genero}</td>
        `

        tabla.appendChild(fila)

    })

})