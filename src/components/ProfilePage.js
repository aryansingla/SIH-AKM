import React from "react";
import "./ProfilePage.css";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePage = (props) => {
  return (
    <>
      <div class="navbar-top">
        <div class="title">
          <h1>Your Profile</h1>
        </div>

        {/* <!-- Navbar --> */}
        <ul>
          <li>
            <a href="#sign-out">
              {/* <i class="fa fa-sign-out-alt fa-2x"></i> */}
              <FontAwesomeIcon icon={faSignOut} />

              {/* <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /> */}
              {/* <FontAwesomeIcon icon={faHome} /> */}
            </a>
          </li>
        </ul>
      </div>

      <div class="sidenav">
        <div class="profile">
          <img src="/photo/user.svg" alt="" width="100" height="100" />

          <div class="name">I am Name</div>
          <div class="job">Citizen of India</div>
        </div>
      </div>

      <div class="main">
        <div class="card">
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>I am Name</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>imdiv@gmail.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Delhi , India</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>imdivvv</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>imdiv123</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Mobile No.</td>
                  <td>:</td>
                  <td>9988776655</td>
                </tr>
                <tr>
                  <td>Aadhar</td>
                  <td>:</td>
                  <td>998877665511</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
