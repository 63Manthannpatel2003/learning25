import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home 
              </Link>
            </li>
            <li class="nav-item active">
            <Link class="nav-link" to="/movies">
                Movies
              </Link>
              </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/series">
              Series
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/sports">
              Sports
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/formdemo1">
              FORM DEMO 1
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/formdemo2">
              FORM DEMO 2
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/formdemo3">
              FORM DEMO 3
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/formdemo4">
              FORM DEMO 4
              </Link>
            </li>
            <li class="nav-item active">
            <Link class ="nav-link" to="/formdemo5">
              FORM DEMO 5
              </Link>
            </li>
             
            
          </ul>
        </div>
      </nav>
    </div>
  );
};