import { Component } from "react";


class Person extends Component {
  // Define appropriate lifecycle method to show alert here

     componentWillUnmount(){
      const {removePerson,person}=this.props;
      if(removePerson){
        const {email}=person
      alert(`A person with email ${email} was removed from the Network!`)
      }
     
     }

  render() {
    const { img, email, index, removePerson } = this.props;
    return (
      <div className="person">
        <b onClick={()=>{removePerson(index)}}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
