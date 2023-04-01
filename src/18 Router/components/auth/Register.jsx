import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        color: "Navy",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "larger",
      }}
      id="register"
    >
      <form>
        <fieldset>
          <legend>New User ! Create a Account</legend>
          <table>
            <tr>
              <td>
                <label htmlFor="user">First Name</label>
              </td>
              <td>
                <input type="text" id="user" placeholder="Enter First Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="user">Last Name</label>
              </td>
              <td>
                <input type="text" id="user" placeholder="Enter Last Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="user">Email Id</label>
              </td>
              <td>
                <input type="text" id="user" placeholder="Enter Email ID" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="user">Mobile Number</label>
              </td>
              <td>
                <input
                  type="text"
                  id="user"
                  placeholder="Enter Mobile Number"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="user">Adress</label>
              </td>
              <td>
                <textarea
                  type="text"
                  id="user"
                  placeholder="Enter Complete Adress"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Set Password</label>
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
                  <Link to="/">Register</Link>
                </button>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
