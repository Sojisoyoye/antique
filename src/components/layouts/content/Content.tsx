import React from "react";
import "./Content.css";
import Plywood1 from "../../../images/plywood1.jpg";
import Image2 from "../../../images/closet3.jpg";
import Image3 from "../../../images/bathroom.jpg";
import Image4 from '../../../images/mdf1.jpeg';
import Image5 from '../../../images/hdfplywood2.jpg';
import Image6 from '../../../images/marine.jpg';
import Image7 from '../../../images/commercial.jpg';
import Image8 from '../../../images/highgloss.jpg';



export const Content = () => {
  return (
    <div className="container text-center">
      <h2>Shop by Types</h2>
      <p>Select from our wide range of product types and categories</p>

      <div className="row mt-2 mb-2">
        <div className="col-lg-4">
            <img src={Image4} alt="mdf" className="catImg" />
            <h2 className="catText">Melamine MDF Board</h2>
        </div>
        <div className="col-lg-4">
            <img src={Image5} alt="hdf" className="catImg"/>
            <p className="catText">HDF Board</p>
        </div>
        <div className="col-lg-4">
            <img src={Image6} alt="marine" className="catImg"/>
            <p className="catText">Marine Plywood</p>
        </div>
       
      </div>

      <div className="row mt-2 mb-2">
        <div className="col-lg-4">
            <img src={Image8} alt="hdf" className="catImg"/>
            <p className="catText">High gloss Board</p>
        </div>
        <div className="col-lg-4">
            <img src={Image7} alt="commercial" className="catImg"/>
            <p className="catText">Commercial Plywood</p>
        </div>
        {/* <div className="col-lg-4">
            <img src={Image6} alt="marine" className="catImg"/>
            <p className="catText">Marine Plywood</p>
        </div> */}
      </div>

      <hr className=""></hr>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">What is Lorem Ipsum?</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={Plywood1}
            alt="img"
            className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Lorem ipsum dolor sit ame.
            <span className="text-muted"> Duis aute irure.</span>
          </h2>
          <p className="text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={Image2}
            alt="img"
            className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Products packaging for events.</h2>
          <p className="text">
            We offer products package in a well presentable manner for your
            events. Let your loved ones have what if feels to enjoy fresh farm
            products
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={Image3}
            alt=""
            className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
