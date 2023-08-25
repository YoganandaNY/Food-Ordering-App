import User from "./User";
import UseClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Contructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT EP-01");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Upadate");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    // console.log("Parent Render");

    return (
      <div className="m-auto max-w-screen-md">
        <h1 className="m-2 p-2 font-bold text-3xl text-center">About Us</h1>
        <h2 className="text-center">
          I'm a Front End Developer with five years of experience in web
          development. I've worked on a variety of projects for clients in the
          education, travel, and healthcare industries. I'm passionate about
          creating great user experiences and have a strong understanding of
          usability and accessibility standards.
        </h2>
        <div className="mx-4">
          <div className="flex mt-10 mb-2 ">
            <h2 className="block font-semibold text-blue-600">Email : </h2>
            <p className="mx-2">Yoganandajn@gmail.com</p>
          </div>
          <div className="flex mt-2 mb-2">
            <h2 className="block font-semibold text-blue-600">Contact : </h2>
            <p className="mx-2">8105497468</p>
          </div>
          <div className="flex">
            <h2 className="block font-semibold text-blue-600">
              Tech Stack/Skills :{" "}
            </h2>
            <p className="mx-2">
              React, Redux, Angular, Typescript, JavaScript, HTML, CSS, Tailwind{" "}
            </p>
          </div>
        </div>
        {/* <User /> */}
        {/* <UseClass name={"First"} location={"Ramanagar"} /> */}
        {/* <UseClass name={"second"} />
                <UseClass name={"Third"}  />
                <UseClass name={"Fourth"} /> */}
      </div>
    );
  }
}

export default About;

/*
- Parent Contructor
- Parent Render
    
    - First Child Contructor
    - Fitst Child Render

    - Second Child Contructor
    - Second child Render

    - Third Child Contructor
    - Third child Render

    - Fourth Child Contructor
    - Fourth child Render

    - First Child Component Did Mount
    - Second Child Component Did Mount
    - Third Child Component Did Mount
    - Fourth Child Component Did Mount  
    
- Parent Child Component Did Mount    
*/

// import User from "../components/User";
// import UseClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"This is Yogananda (function)"}/>

//             {/* <UseClass name={"This is Yogananda (class)"} location = {"Ramanagar"}/> */}
//         </div>
//     )
// };

// export default About;
