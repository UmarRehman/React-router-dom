import React, { useState } from "react";

function Sign() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    menu: "",
    gender: "",
    question: "",
    question2: "",
    checkbox:[]
  });
  
  const [check, setCheck] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    setData((prev) => ({
      ...prev,
      [name]: value ,
    }));
    if (checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter((e) => e !== value));
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(data, check);
  };
  return (
    <div className="container my-5 py-5">
      <form onSubmit={handleSubmission}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            value={data.name}
            name="name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            value={data.email}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            value={data.password}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <select
          name="menu"
          className="form-select my-3"
          aria-label="Default select example"
          value={data.menu}
          onChange={handleChange}
        >
          <option>Zero</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="female"
            onChange={handleChange}
            name="gender"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="my-3">
          Qno 1:What is React Js?
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Language"
              onChange={handleChange}
              name="question"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Language
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Framework"
              onChange={handleChange}
              name="question"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Framework
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Library"
              onChange={handleChange}
              name="question"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Library
            </label>
          </div>
        </div>
        <div className="my-3">
          Qno 2:What is Node Js?
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Language"
              onChange={handleChange}
              name="question2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Language
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Framework"
              onChange={handleChange}
              name="question2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Framework
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Library"
              onChange={handleChange}
              name="question2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Library
            </label>
          </div>
        </div>
        <div className="">
          <input
            name="checkbox"
            value="Default"
            className="form-check-input"
            type="checkbox"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default
          </label>
        </div>
        <div className="">
          <input
            name="checkbox"
            className="form-check-input"
            type="checkbox"
            value="Checked"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked
          </label>
        </div>
        <div className="">
          <input
            name="checkbox"
            className="form-check-input"
            type="checkbox"
            value="Temporary"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Temporary
          </label>
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sign;
