import React from 'react';
import'./CreateUser.css';

function CreateUser() {
  return (
    <div class="container text-center">
    <div class="row">
      <div class="col-7">
        <p class="text-start" ><b>Create Account</b></p>
          <div class="row">
              <div class="col">
                <label for="lastnameController" class="form-label">First Name</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
              </div>
              <div class="col">
                <label for="lastnameController" class="form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
              </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" class="form-control"  placeholder="Password"/>
          </div>
          <div class="mb-3">
            <label for="confirmPasswordController" class="form-label">Confirm Password</label>
            <input type="password" class="form-control"  placeholder="Confirm Password"/>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">Sign U</button>
          </div>



      </div>
      <div class="col-5">
        2 of 2
      </div>
    </div>
  </div>
  );
}

export default CreateUser;
