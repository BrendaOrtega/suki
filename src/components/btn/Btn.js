import React from "react";
import './Btn.css';


class Btn extends React.Component {
    render(){
        const {onClick} = this.props;
        return (

                <button onClick={onClick} className="btn" >{this.props.text}</button>
        );
    }
}

export default Btn;