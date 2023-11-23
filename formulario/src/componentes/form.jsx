import React from 'react'
import { useForm } from "react-hook-form"



export const Formx = () => {
    const {
       
        handleSubmit,
 
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data)
      
  


  return (
    <>
    <div  className='contenedor-central'>
    <form onSubmit={handleSubmit(onSubmit)}   >
    <div class="row g-2">
  <div class="col">
  <label for="Nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control  contenedor-sombra " placeholder="Nombre" aria-label="Nombre" ></input>
  </div>
  <div class="col">
  <label for="Apellido" class="form-label">Apellido </label>
    <input type="text" class="form-control contenedor-sombra  " placeholder="Apellido" aria-label="Apellido"  ></input>
  </div>
</div>

 <br></br>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email </label>
      <input type="email" class="form-control  contenedor-sombra" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" ></input>
      <div id="emailHelp" class="form-text">No compartiremos su correo con nadie.</div>
    </div>

    <div class="mb-3">
      <label for="telefono" class="form-label" placeholder="Telefono">Telefono </label>
      <input type="text" class="form-control contenedor-sombra" id="telefono" aria-describedby="telefono" ></input>
      
    </div>
   
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label" > Contraseña</label>
      <input type="password" class="form-control  contenedor-sombra" id="exampleInputPassword1" placeholder="Contraseña" ></input>
      <span style={{color:"red"}}>   Este campo es requerido</span>
    </div>
    <br></br>
    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label"   >Repetir Contraseña</label>
      <input type="password" class="form-control contenedor-sombra" id="exampleInputPassword2" placeholder="Repetir contraseña"></input>
      <span style={{color:"red"}}>   Este campo es requerido</span>
    </div>
   
   <div  className='d-grid gap-2 d-md-flex justify-content-md-end'>
    <button type="submit" class="btn btn-dark btn-lg ">Enviar</button>
    </div> 
  </form>
  </div>
  
  </>



     


  )
}
