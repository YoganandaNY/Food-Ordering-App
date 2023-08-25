import UseClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component{
    constructor(props){
        super(props);

        console.log("Parent Contructor");
    }

    componentDidMount(){

        console.log("Parent ComponentDidMount");

    }

    render() {

        console.log("Parent Render");
        
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UseClass name={"This is Yogananda (class)"} location = {"Ramanagar"} />
            </div>
        )
    }
};

export default AboutClass;