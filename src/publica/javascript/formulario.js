/* 'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#id');
ReactDOM.render(e(LikeButton), domContainer); */





/* import React, { Fragment,useState} from 'react';

const Formulario = () => {
const [formulario, setFormulario] = useState({
    nombre:" ",
    apellido: " ",
    email: " ",
    telefono: " ",
    mensaje: " "
})
const Captura = (e) =>{
    setFormulario({
        ...formulario,
        [e.target.name] : e.target.value
    })
}

const enviarFormulario = (e)=>{
    e.preventDefault()
    console.log("Enviando datos.. ", formulario.nombre,formulario.apellido,formulario.email,formulario.telefono,formulario.mensaje)
}
    return ( 
<Fragment>
  <form action="" method="get" id="formulario" onSubmit={enviarFormulario} >
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-12">
        <h2 className="display-4">Formulario de contacto</h2>
        </div>

      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
        <input  type="text" className="form-control"  name="nombre" id="nombre" placeholder="Nombre*" onChange={Captura} maxlength="15" required></input>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
        <input  type="text" className="form-control" name="apellido"  id="apellido" placeholder="Apellido*" onChange={Captura} maxlength="30" required></input>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
        <input  type="email" className="form-control" name="email" id="email" placeholder="Correo electronico*" onChange={Captura} required></input>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
        <input  type="tel" className="form-control" name="telefono" id="telefono" placeholder="Telefono" onChange={Captura}></input>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-3">
        <textarea className="form-control" name="mensaje" id="mensaje" maxlength="500" cols="30" rows="10" placeholder="Escribe un mensaje...*" onChange={Captura} required></textarea>
      </div>
      <div id="botonContactos">
        <button className="btn btn-primary mr-4" type="submit" >Enviar</button>
        <i className="FormularioCampoObligatorio">*Campo obligatorio</i>
      </div>
    </div>
  </div>
  </form>
</Fragment>
     );
}
export default Formulario; */




























