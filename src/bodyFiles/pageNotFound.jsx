import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "../static/css/pageNotFound.css";
import Stars from "./handleStars";
import { useState, useEffect } from "react";
function NotFound() {
  return (
    <>
      <div id="Everything">
        <p id="Lost-Text">Page 404</p>
        <NavLink to={"/"} id="Home-Text">
          Go Home?
        </NavLink>
      </div>
      <div id="placeholder">
        <Stars />
      </div>
    </>
  );
}
export default NotFound;
