'use strict';

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
ReactDOM.render(e(LikeButton), domContainer);




/*
 import React,{Fragment,useState} from 'react';

const Formulario = () => {


const [datos, setdatos] = useState({
    nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    mensaje:""
})
const handleInputChange=(event)=>{

   //console.log(event.target.value)
   setdatos({
       ...datos,
       [event.target.name] : event.target.value
   })
}
 const enviarDatos=(event)=>{// enviarDatos se puede procesar con nodejs o mongodb
     event.preventDefault();
        console.log(datos.nombre + datos.apellido + datos.email + datos.telefono + datos.mensaje)
 }
    return ( 
        <Fragment>
        <form action="" method="get" id="formulario" onSubmit={enviarDatos}>
<div className="container">
	<div className="row">
		  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-12">
			<h2>Formulario de contacto</h2>
		  </div>
		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
			<input  type="text" className="form-control"  name="nombre" id="nombre" onChange={handleInputChange} placeholder="nombre" maxlength="15" required></input>
		</div>
		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
			<input  type="text" className="form-control" name="apellido"  id="apellido" onChange={handleInputChange} placeholder="apellido" maxlength="30" required></input>
		</div>
		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
			<input  type="email" className="form-control" name="email" id="email" onChange={handleInputChange} placeholder="Correo electronico" required></input>
		</div>
		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-3">
			<input  type="tel" className="form-control" name="telefono" id="telefono" onChange={handleInputChange} placeholder="telefono o celular"></input>
		</div>
		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-3">
			<textarea className="form-control" name="mensaje" id="mensaje" onChange={handleInputChange} maxlength="500" cols="30" rows="10" placeholder="Escribe un mensaje..." required></textarea>
		</div>
		<div>
			<button className="btn btn-primary ml-4" type="submit" >Enviar</button>
		</div>
	</div>
</div>
</form>
        </Fragment>
        
    );
}
 
export default Formulario; */