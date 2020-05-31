import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valueOld: '',
            changed: false,
            length: 0,
            inp:0
        }
    }

    input1Change = (e) => {

        let next = this.state;
        next.value = e.target.value;
        next.changed = next.value !== next.valueOld;
        next.length = e.target.value.length;
        this.setState(next);

    };

  button1Click =(e) => {
      e.preventDefault();
      let plused=Number(this.state.value);
if(plused>0){
      this.setState({
          inp: plused
      })}
else {this.setState({
    inp: 'no no no'
})}

    };
    sum= (e) => {
        e.preventDefault();
        let plused = this.state.inp;
        plused = Number(plused) + 1;
        this.setState({
            inp: plused
        })
    };
    sum100= (e) => {
        e.preventDefault();
        let plused = this.state.inp;
        plused = Number(plused) + 100;
        this.setState({
            inp: plused
        })
    };
    subtraction= (e) => {
        e.preventDefault();

        let plused = this.state.inp;

    plused = Number(plused) - 1;

if(plused>0) {
    this.setState({
        inp: plused
    })
}
else {this.setState({
    inp: 0
})}
    };
    subtraction100= (e) => {
        e.preventDefault();

        let plused = this.state.inp;

        plused = Number(plused) - 100;


        if(plused>0) {
            this.setState({
                inp: plused
            })
        }
        else {this.setState({
            inp: 0
        })}
    };
    render() {


        return (
            <div>

<div>{this.state.inp}</div>


                            <div >
                                <button onClick={this.sum}>додати 1</button>
                                <button onClick={this.subtraction}>відняти 1</button>
                                <button onClick={this.sum100}>додати 100</button>
                                <button onClick={this.subtraction100}>відняти 100</button>

                                <input
                                    type="text"
                                    placeholder="..."
                                    ref={ref =>  ref}
                                    onChange={this.input1Change}
                                    value={this.state.value}
                                />

                    <button
                        type="button"
                        onClick={this.button1Click}
                        disabled={!this.state.changed}
                    >Go!</button>

                            </div>

                        </div>



        );
    }
}

export default App;
