import React from "react";

class UseClass extends React.Component {
  constructor(props) {
    super(props);
    //All the state variables write it inside the object it's big object

    // this.state = {
    //     count :  0,
    //     count1 : 2
    // }

    // console.log(props);  // Object

    // console.log(this.props.name + "Child Contructor");

    this.state = {
      userInfo: {
        name: "Raghunandan",
        location: "Kolar",
      },
    };
  }

  // We Make an Api Call
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    //Api Call
    const data = await fetch("https://api.github.com/users/Yoganand");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    //console.log("Component Did Updated");
  }

  componentWillUnmount() {
    //console.log("Component Will Unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count, count1} = this.state;

    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        {/* <h1>Count : {count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                        count1 : this.state.count1 + 1
                    });
                }}>Count Increases</button> */}
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Conatct : @Yogananda27</h3>
      </div>
    );
  }
}

export default UseClass;

/*****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE ----
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ComponentDid Update
 *
 * ----- UNMOUNTING -----
 *
 *      ComponentDid Unmount
 *
 *
 */
