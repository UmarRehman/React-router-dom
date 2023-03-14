import React, { useState } from "react";

function Form() {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    lname: "",
  });

  const handleOnchange = (e) => {
    setform((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      
    }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, "form value");
  };

  return (
    <div>
      <div className="row ">
        <div className="col-8 container content">
          <h1>Welcome To Joyn Digital</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={(e) => handleOnchange(e)}
                type="text"
                className="form-control"
                value={form.name}
                name="name"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                LastName
              </label>
              <input
                onChange={(e) => handleOnchange(e)}
                value={form.lname}
                type="password"
                name="lname"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => handleOnchange(e)}
                value={form.email}
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                onChange={(e) => handleOnchange(e)}
                value={form.password}
                type="password"
                name="password"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
