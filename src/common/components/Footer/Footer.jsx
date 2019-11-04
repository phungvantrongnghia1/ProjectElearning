import React from "react";

export default function Footer() {
  return (
    <div className="footer container-fluid mx-0 px-0 bg-dark mt-5">
      <div className="row container mx-auto text-white py-5">
        <div className="col-lg-4">
          <h2 className="mt-2 mb-3">ABOUT US</h2>
          <p>
            Praesent quis risus nec mi feugiat vehicula. Sed nec feugiat arcu.
            Ut ligula metus, dapibus in sagittis lobortis, rhoncus nec libero.
          </p>
          <div className="row">
            <span className="col-2 col-sm-2 col-lg-2 ">
              <i className=" fas fa-map-marked-alt    "></i>
            </span>
            <span className="col-lg-10 col-sm-10 ">Line 1</span>
          </div>
          <div className="row py-3">
            <span className="col-2 col-sm-2 col-lg-2 ">
              <i className=" fas fa-phone-volume    "></i>
              <i className=" fas fa-phone-volume    "></i>
            </span>
            <span className="col-lg-10 col-sm-10">(84+)23 5656223</span>
          </div>
          <div className="row">
            <span className="col-2 col-sm-2 col-lg-2 ">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="col-lg-10 col-sm-10">depdev@gmail.com</span>
          </div>
        </div>
        <div className="col-lg-4">
          <h2 className="mt-2 mb-3">NEW COURSES</h2>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Branding like a professional in</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Become a Professional Graphic</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Sketch 3 from A to</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> French for Beginners to Advanced</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Typography and Lettering for Logo</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Adobe InDesign CS6 Tutorial Beginners</span>
          </p>
          <p className="my-0 py-1">
            <span className="caret">
              <i className="fas fa-caret-right    "></i>
            </span>
            <span> Sketch 3 from A to</span>
          </p>
        </div>
        <div className="col-lg-4">
          <h2 className="mt-2 mb-3">WORKING HOURS</h2>
          <div className="py-1">
            <span>Monday</span> <span className="float-right">9am - 6pm</span>
          </div>
          <div className="py-1">
            <span>Tuesday</span>
            <span className="float-right">9am - 6pm</span>
          </div>
          <div className="py-1">
            <span>Wednesday</span>
            <span className="float-right">9am - 6pm</span>
          </div>
          <div className="py-1">
            <span>Thursday</span>
            <span className="float-right">9am - 6pm</span>
          </div>
          <div className="py-1">
            <span>Friday</span> <span className="float-right">9am - 6pm</span>
          </div>
          <div className="py-1">
            <span>Staturday</span> <span className="float-right">Closed</span>
          </div>
          <div className="py-1">
            <span>Sunday</span> <span className="float-right">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
