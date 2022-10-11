import React from "react";
import ReactDOM from "react-dom";

function Email({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

ReactDOM.render(
  <Mailto email="madrodgerflynn@gmail.com" subject="Hey There" body="Hello">
    Shoot Me an Email
  </Mailto>
);
export default Email;
