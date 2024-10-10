import React from "react";
import mock01 from "../assets/images/Reflectify.png";
import mock02 from "../assets/images/Recipe Spark.png";
import mock03 from "../assets/images/BrainFlix.png";
import mock04 from "../assets/images/Instock.png";
import mock05 from "../assets/images/Bandsite.png";
import mock06 from "../assets/images/coffeeshop.png";
import mock07 from "../assets/images/Blog-Application.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://yoginak.github.io/Blogs/#/project/reflectify" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://yoginak.github.io/Blogs/#/project/reflectify" target="_blank" rel="noreferrer">
            <h2>Reflectify</h2>
          </a>
          <p>
            Developed mental wellness toolkit by integrating features like data
            visualization, personalized AI powered insights and self reflection
            tools using React, Bootstrap, Chart JS, Node JS, Express, MySQL and
            OpenAI API.
          </p>
        </div>
        <div className="project">
          <a href="https://yoginak.github.io/Blogs/#/project/recipespark" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://yoginak.github.io/Blogs/#/project/recipespark" target="_blank" rel="noreferrer">
            <h2>Recipe Spark</h2>
        </a>
          <p>
            A reponsive recipe website developed by using React, CSS, Javascript and Meal
            DB API.
          </p>
        </div>
        <div className="project">
          <a href="https://yoginak.github.io/Blogs/#/project/brainflix" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://yoginak.github.io/Blogs/#/project/brainflix" target="_blank" rel="noreferrer">
            <h2>BrainFlix</h2>
          </a>
          <p>
            BrainFlix is a fully responsive YouTube clone; showcasing
            dynamically filtered Next Video suggestions, page routing done with
            react-router and the ability to upload a mock-video to a self-built
            Node.js backend which served as the REST API for the application.
          </p>
        </div>
        <div className="project">
          <a href="" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <h2>Instock</h2>
         </a>
          <p>
            InStock is a fully responsive inventory management application that
            allows users to keep track of inventories spread across multiple
            warehouses. Users can add, edit, delete both warehouses and
            inventory items. The app itself was built with React and SASS on the
            frontend and Node, Express on the backend.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yoginak.github.io/Blogs/#/project/bandsite"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yoginak.github.io/Blogs/#/project/bandsite"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Bandsite</h2>
          </a>
          <p>
            Bandsite is a fully responsive front-end application for a fictional
            band by the name of 'The Bees Knees'. This project was built using
            HTML and vanilla JavaScript, along with Sass for all styling and
            visual responsiveness. Complete with dynamic data being pulled from
            an Express API hosted on Heroku with the added ability to be able to
            post, like and delete a comment.
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/yoginak/Blogs" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://github.com/yoginak/Blogs" target="_blank" rel="noreferrer">
            <h2>Blogs Application</h2>
          </a>
          <p>
          It is a responsive Single Page Application developed using React, designed to display my various projects and demos. Built as a personal initiative, it aims to highlight my journey as a developer.
          </p>
        </div>
        <div className="project">
          <a href="https://yoginak.github.io/Blogs/#/project/coffeeshop" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://yoginak.github.io/Blogs/#/project/coffeeshop" target="_blank" rel="noreferrer">
            <h2>Coffee Shop</h2>
          </a>
          <p>
            Coffeeshop aka. Nitro Coffee is a static, multi-page coffee shop
            website built using HTML and CSS, displaying various menu items,
            promotions and contact information for the business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
