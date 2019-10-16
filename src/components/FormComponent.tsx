import React, { Component } from 'react';

interface FormState {
  datos: Array<any>
}

class FormComponent extends Component<{},FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      datos: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then((json:Array<any>) => {
      this.setState({
        datos: json
      });
    })
  }

  render() {
    return(
      <>
        <table>
          <tbody>
            
              {this.state.datos.map((value, index) => (
                <tr>
                  <td key={index}>{value.name}</td>
                </tr>
              ))}
            
          </tbody>
        </table>
      </>
    );
  }
}

export default FormComponent;