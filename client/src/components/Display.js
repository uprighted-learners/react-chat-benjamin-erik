import React, { useEffect, useState } from "react";
import Form from "./Form";
import Sidebar from "./Sidebar";

function Display() {
  // poll every 10 seconds for new database updates?
  // setTimeout()

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("one trigger");
    // fire a fetch from a route to the database established in server file
    fetch("/read")
      .then((message) => message.json())
      .then((res) => setPosts(res));
  }, []);

  
  // also need to convert posts into format readable by react (currently an array of objects)

  console.log(posts);

  return (
    <div id="display-container">
      <p>{posts}</p>

      <div className="chat-header">
        <h1>Hello, Chat!</h1>
      </div>
      <div id="main-container">
        <Sidebar />
        <div className="chat-container"></div>
      </div>
      <div className="chat-footer">
        <Form />
      </div>
    </div>
  );
}

export default Display;
