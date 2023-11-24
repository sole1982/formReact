import React from "react";
import { useForm } from "react-hook-form";

export const Formx = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Datos del formulario:", data);

  return (
    <>
      <div className="contenedor-central">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-2">
            <div className="col">
              <label htmlFor="Nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control contenedor-sombra"
                placeholder="Nombre"
                aria-label="Nombre"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </div>
            <div className="col">
              <label htmlFor="Apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control contenedor-sombra"
                placeholder="Apellido"
                aria-label="Apellido"
                {...register("apellido", { required: true })}
              />
              {errors.apellido && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </div>
          </div>

          <br />

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control contenedor-sombra"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Este campo es requerido</span>
            )}
            <div id="emailHelp" className="form-text">
              No compartiremos su correo con nadie.
            </div>
          </div>
          <div class="mb-3">
            <label for="telefono" class="form-label" placeholder="Telefono">
              Telefono
            </label>
            <input
              type="text"
              className="form-control contenedor-sombra"
              id="telefono"
              aria-describedby="telefono"
              {...register("telefono", { required: true })}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              {" "}
              Contraseña
            </label>
            <input
              type="password"
              class="form-control  contenedor-sombra"
              id="exampleInputPassword1"
              placeholder="Contraseña"
            ></input>
            <span style={{ color: "red" }}> Este campo es requerido</span>
          </div>
          <br></br>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              class="form-control contenedor-sombra"
              id="exampleInputPassword2"
              placeholder="Repetir contraseña"
            ></input>
            <span style={{ color: "red" }}> Este campo es requerido</span>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-dark btn-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
