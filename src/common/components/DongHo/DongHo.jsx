import React, { useState, useEffect, useRef } from "react";

export default function DongHo() {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hours, setHours] = useState();
  const [day, setDay] = useState();
  const [active, setActive] = useState(true);
  useEffect(() => {
    let deadline = new Date("Sep 30, 2019 15:37:25").getTime();
    if (active) {
      let i = 0;
      setInterval(() => {
        let now = new Date().getTime();
        let t = deadline - now;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        setMin(minutes);
        setDay(days);
        setHours(hours);
        setSec(seconds);
      }, 1000);
    }
  }, [active]);
  return (
    <div className="khoahoc__quancao pt-5 row  container m-auto">
      <div className="col-lg-4 khoahoc__quancao__img">
        <span>
          <img src="https://cyberlearn-21.web.app/img/countdown.png" alt="" />
        </span>
      </div>
      <div className="col-lg-4 khoahoc__quancao__content">
        <h4>SCRIBBLE STARTUP COURSE:</h4>
        <h5>SAVE UP TO 30% + FREE MATERIALS</h5>
        <p className="my-0 py-1">
          This course is the first of a two-course sequence: Introduction to
          Computer Science and Programming Using Python, and Introduction to
          Computational Thinking and Data Science.
        </p>
        <button className="btn btn-success">Lear More</button>
      </div>
      <div className="col-lg-4 khoahoc__quancao__time">
        <h5>HURRY UP! IT'S ONLY LEFT</h5>
        <ul className="nav__time">
          <li className="nav__time__item">
            <p>{day}</p>
          </li>
          <h1>:</h1>
          <li className="nav__time__item">{hours}</li> <h1>:</h1>
          <li className="nav__time__item">{min}</li> <h1>:</h1>
          <li className="nav__time__item">{sec}</li>
          <li className="nav__time__item nav__time__item__name">
            <p>Days</p>
          </li>
          <li className="nav__time__item nav__time__item__name">Hours</li>
          <li className="nav__time__item nav__time__item__name">Min</li>
          <li className="nav__time__item nav__time__item__name">Sec</li>
        </ul>
      </div>
    </div>
  );
}
