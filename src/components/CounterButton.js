import React, { Component } from 'react';

class  CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {  
       if (this.state.count !== nextState.count6) {
           return true
       }
       return false
    }

    updateCount = () => {
       this.setState(state => {
          return {count: state.count + 1}
        
        }) 
    }

    render() {
        console.log('CountButton')
       return (
           <button color={this.props.color} onClick={this.updateCount} >
                count: {this.state.count}
           </button>
       )
    }
}

export default CounterButton;