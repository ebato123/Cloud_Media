
import React from "react";

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        languaje : this.props.lang,
        estadoActual: this.languaje === "en"? "subscribe" : "suscribirse"
    }
    this.toggleState = this.toggleState.bind(this);
  }


  toggleState(){
    let estadoActual = this.state.estadoActual;
    if(this.state.languaje === "es"){
        if(estadoActual === "suscribirse"){
            this.setState({
                estadoActual: "iniciarSesion"
            });
        }else{
            this.setState({
                estadoActual: "suscribirse"
            })
        }
    }if(this.state.languaje === "en"){
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
  }

  render() {
    let formTittle = "";
    let placeHolder1 = "";
    let placeHolder2 = "";
    let label2 = "";
    let label4 = "";
    let inputType = "";
    let buttonTittle1 = "";
    let buttonTittle2 = "";
    let estadoActual = this.state.estadoActual;
    let languaje = this.state.languaje;
    switch(languaje){
        case "en":
            switch(estadoActual){
                case "login":
                    formTittle = "Log In";
                    placeHolder1 = "Enter your email."
                    placeHolder2 = "Enter you password.";
                    inputType = "password";
                    buttonTittle1 = "Send";
                    buttonTittle2 = "Subscribe";
                    label2 = "Password"
                    label4 = "Log in for a more personalized content."
                    break;
                default:
                    formTittle = "¡Subscribe!";
                    placeHolder1 = "Enter your email."
                    placeHolder2 = "Enter you name.";
                    inputType = "text";
                    buttonTittle1 = "Send";
                    buttonTittle2 = "Log In";
                    label2 = "Name"
                    label4 = "Subscribe to get daily updates about us.";
                    break;
            }break;
        default:
            switch(estadoActual){
                case "iniciarSesion":
                    formTittle = "Inicia Sesión";
                    placeHolder1 = "Ingrese su email."
                    placeHolder2 = "Ingrese su contraseña.";
                    inputType = "password";
                    buttonTittle1 = "Enviar";
                    buttonTittle2 = "Suscrbirse";
                    label2 = "Contraseña"
                    label4 = "Inicia sesión para un contenido más personalizado."
                    break;
                default:
                    formTittle = "¡Suscríbete!";
                    placeHolder1 = "Ingrese su email."
                    placeHolder2 = "Ingrese su nombre.";
                    inputType = "text";
                    buttonTittle1 = "Enviar";
                    buttonTittle2 = "Iniciar Sesión";
                    label2 = "Nombre"
                    label4 = "Suscríbete para recibir novedades sobre nuestros servicios.";
                    break;
            }
    }
    return(
        <form className="p-3 m-5">
            <h2>{formTittle}</h2>
            <article className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder={placeHolder1}></input>
            </article>
            <article className="form-group">
                <label>{label2}</label>
                <input type={inputType} className="form-control" placeholder={placeHolder2}></input>
            </article>
            {/* <article className="form-check">
                <input type="checkbox" className="form-check-input" id="t-y-c"></input>
                <label className="form-check-label" for="t-y-c">Leí y acepto las condiciones de usuario.</label>
            </article> */}
            <article id="buttons" className="p5">
                <button type="submit" className="btn btn-primary">{buttonTittle1}</button>
                <p>o</p>
                <div className="btn btn-primary" onClick={this.toggleState}>{buttonTittle2}</div>
            </article>
            <label>{label4}</label>
        </form>
      );
  }
}


