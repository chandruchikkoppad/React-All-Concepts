import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      id="login"
      style={{
        background: "inherit",
        width: "100%",
        height: "70vh",
        color: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "larger",
      }}
    >
      <form>
        <fieldset>
          <legend>Login To Your Account</legend>
          <table>
            <tr>
              <td>
                <label htmlFor="user">User Name</label>
              </td>
              <td>
                <input type="text" id="user" placeholder="Enter User Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password</label>
              </td>
              <td>
                <input
                  type="text"
                  id="pass"
                  placeholder="Enter your password"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="log-button">
                <button type="submit" style={{}}>
                  <Link to="/">Submit</Link>
                </button>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
