import React from "react";
import './Btn.css';


class Btn extends React.Component {
    render(){
        return (

                <button className="btn" >{this.props.text}</button>
        );
    }
}

export default Btn;