import React from "react";


function App() {
  //  variables 
  // const message = "Javascript is so cool!";
  const [message, setMessage] = React.useState("Javascript is so cool!")


  // methods 
  function handleClick() {
    setMessage("my new message");
  }

  // template 
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </div>
  );
}

export default App; 
