import React, {Component} from 'react';
import Coffee from './components/Coffee';
import Glass from './components/Glass';
import Saucer from './components/Saucer';

export default class App extends Component{

    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    //
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    //
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps');
    // }
    //
    // componentWillUnmount(){
    //     console.log('componentWillUnmount');
    // }

    // penggunaan fungsi bawaan STATE
    constructor(){ // Constructor adalah bawaan Component React
        super(); // Super adalah bawaan Component React
        this.state = {
            number: 1
        }
    }

    // action event
    handleClick(){
        const number = this.state.number + 1; // const bisa di ganti dengan 'let', ini adalah cara passing data
        this.setState({ // setState adalah bawaan Component React
            number: number // jika nama sama
        })
    }

    render(){
        console.log('render');
        return(
            <div>
                <Coffee
                    bean="robusta"
                    waterVolume={1}
                    type="expresso"
                />
                <Glass
                    color="red"
                />
                <Saucer
                    width={100}
                />
                <button onClick={()=> this.handleClick()}>Click Me!</button>

                <p>View Event : {this.state.number}</p> {/*cara menampilkan state*/}
            </div>
        )
    }
}