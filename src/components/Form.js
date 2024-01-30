
import React from "react";

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        estadoActual: "subscribe"
    }
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(){
    let estadoActual = this.state.estadoActual;
    if(estadoActual === "subscribe"){
        this.setState({
            estadoActual: "login"
        });
    }else{
        this.setState({
            estadoActual: "subscribe"
        })
    }
  }

  render() {
    let formTittle = "";
    let label2 = "";
    let inputType = "";
    let buttonTittle = "";
    let label4 = "";
    switch(this.state.estadoActual){
        case "login":
            formTittle = "Inicia Sesión";
            label2 = "Contraseña";
            inputType = "password";
            buttonTittle = "Suscrbirse";
            label4 = "Inicia sesión para un contenido más personalizado."
            break;
        case "subscribe":
            formTittle = "¡Suscríbete!";
            label2 = "Nombre";
            inputType = "text";
            buttonTittle = "Iniciar Sesión";
            label4 = "Suscríbete para recibir novedades sobre nuestros servicios.";
            break;
        default:
            this.setState({
                estadoActual: "subscribe"
            })
    }
    return(
        <form className="p-3 m-5">
            <h2>{formTittle}</h2>
            <article className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Ingrese su Email."></input>
            </article>
            <article className="form-group">
                <label>{label2}</label>
                <input type={inputType} className="form-control" placeholder={"Ingrese su "+label2+"."}></input>
            </article>
            {/* <article className="form-check">
                <input type="checkbox" className="form-check-input" id="t-y-c"></input>
                <label className="form-check-label" for="t-y-c">Leí y acepto las condiciones de usuario.</label>
            </article> */}
            <article id="buttons" className="p5">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <p>o</p>
                <div className="btn btn-primary" onClick={this.toggleState}>{buttonTittle}</div>
            </article>
            <label>{label4}</label>
        </form>
      );
  }
}


