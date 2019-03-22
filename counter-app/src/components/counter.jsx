import React, { Component } from "react";

class Counter extends Component {
  //#region Notas
  /*
    ELIMINARLO PARA QUE SOLO EXISTA UNA UNICA FUENTE DE INFORMACION.
    state = {
    value: this.props.counter.value
  };
  */
  /*
   * Diferencia entre props y state:
   * Props: incluye información que se le da al componente. Es tambien READONLY.
   * State: es información local o privada que se le asigna a un componente, por lo tanto ningun componente puede
   * acceder a dicha informacion.
   */
  /*
    Crear hoja de estilos:
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

  Forma de llamarlo:
    style={this.styles}
    style={{ fontSize: 30 }
  */
  /*
  constructor() {
    super();
    //console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  //#endregion

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Aqui se puede crear un llamado de tipo Ajax para poder introducir nueva información.
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    /*
     * Mostrar el # de contador.
     * {this.props.childre'n}
     * <h4>{this.props.id}</h4>
     */
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
