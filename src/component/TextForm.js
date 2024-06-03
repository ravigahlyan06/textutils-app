import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the text", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
    document.getSelection().removeAllRanges();
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#b1aeae" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleClearClick}
          >
            Convert to clear{" "}
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleCopy}
          >
            Copy Text{" "}
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleExtraSpace}
          >
            Remove Extra Space{" "}
          </button>
        </div>
      </div>
      <div
        className="container my-2"
      
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minute read
        </p>
        <h2>Preview</h2>
        <p className="border 10px solid black">
          {text.length > 0 ? text : " Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
