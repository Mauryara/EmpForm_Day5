import { html, css, LitElement } from "lit";
// import { validate } from "class-validator";
class EmpForm extends LitElement {
  static styles = css`
    .form-center {
      color: #fff;
    }

    h1 {
      font-family: "Times New Roman", Times, serif;
      margin-top: 6px;
      font-weight: 900;
      text-align: center;
    }

    form {
      width: 900px;
      border: 2px solid #fff;
      border-radius: 10px;
      padding: 30px;
      margin: 25px auto;
      background: linear-gradient(to top, #812b6aad 0%, #02025ce1 100%);
    }
    

    label {
      display: inline;
      margin-top: 10px;
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
    }

    input[type="text"],
    input[type="email"] {
      padding: 5px;
      margin-top: 5px;
      border: 1px solid #fff;
      border-radius: 3px;
      height: 20px;
      background-color: #ffffffc9;
      color:black;
    }

    input[type="text"]:hover {
      background-color: #fff;
      color:black;
    
      
    }
    input[type="email"]:hover {

      background-color: #fff;
      color:black;
    }

    button {
      display: block;
      width: 40%;
      border-radius: 6px;
      border-color: #fff;
      background-color: #ffffffc9;
      color: black;
      padding: 14px 28px;
      font-size: 20px;
      cursor: pointer;
      text-align: center;
      margin: 20px auto;
    }
    button:hover{
      background-color: #fff;

    }


    button:focus {
      border-radius: 3px;
      -webkit-box-shadow: 0 0 5px 2px #fff;
      -moz-box-shadow: 0 0 5px 2px #fff;
      box-shadow: 0 0 5px 2px #fff;
    }

    select {
      width: 100%;
      height: 27px;
      margin: 5px 0 0;
      padding: 5px;
      background: white;
      border-color: #fff;
      border-radius: 4px;
      height: 33px;
      background-color: #ffffffc9;
      color:black;
      /* text-align: center; */
    }
    select:hover {
      background-color: #fff;
      color: black;
      border:2px solid black;
    }

    .error {
      font-family: Arial;
      color: #fd3131;
      font-size: 13px;
      font-weight: bold;
    }
    input {
      width: 282px;
    }
    ::placeholder {
      color: black;
    }
  
    table {
      border-collapse: separate;
      border-spacing: 9px 1em;
    }

    select:focus {
      border-radius: 4px;
      -webkit-box-shadow: 0 0 5px 2px #fff;
      -moz-box-shadow: 0 0 5px 2px #fff;
      box-shadow: 0 0 5px 2px #fff;
    }
    input:focus {
      border-radius: 3px;
      -webkit-box-shadow: 0 0 5px 2px #fff;
      -moz-box-shadow: 0 0 5px 2px #fff;
      box-shadow: 0 0 5px 2px #fff;
    }
  `;

  static properties = {
    fullName: { type: String },
    employeeCode: { type: String },
    officialEmail: { type: String },
    personalEmail: { type: String },
    designation: { type: String },
    department: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zip: { type: String },
    nameerrorMessage: { type: String },
    empcodeErrorMessage: { type: String },
    officialEmailErrorMessage: { type: String },
    personalEmailErrorMessage: { type: String },
    designationErrorMessage: { type: String },
    addressLine1ErrorMessage: { type: String },
    addressLine2ErrorMessage: { type: String },
    landmarkErrorMessage: { type: String },
    zipErrorMessage: { type: String },
  };

  constructor() {
    super();
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
    this.nameerrorMessage = "";
    this.empcodeErrorMessage = "";
    this.officialEmailErrorMessage = "";
    this.personalEmailErrorMessage = "";
    this.designationErrorMessage = "";
    this.addressLine1ErrorMessage = "";
    this.addressLine2ErrorMessage = "";
    this.landmarkErrorMessage = "";
    this.zipErrorMessage = "";
  }

  render() {
    return html`
      <div class="form-center">
        <form @submit="${this.handleSubmit}">
          <h1>Employee Registration Form</h1>
          <table>
            
              <td>
                <label for="fullName"> Full Name *</label>
               </td>
              <td>
              
                <input 
                clearable
                placeholder="Enter Your Full Name"
                  type="text"
                  id="fullName"
                  .value="${this.fullName}"
                  @input="${this.validateName}"
                  required
                />
                <br />
               <span class="error">${this.nameerrorMessage}</span>
              </td>

              <th>
                <label for="employeeCode">Employee Code * </label>
              </th>
              <td>
                <input
                placeholder="Enter Your Employee Code"
                  type="text"
                  id="employeeCode"
                  .value="${this.employeeCode}"
                  @input="${this.validateName}"
                  required
                /><br />
                <span class="error" >${this.empcodeErrorMessage}</span>
              </td>
            
            </tr>
            <tr>
              <td>
                <label for="officialEmail">Official Email *</label>
              </td>
              <td>
                <input
                placeholder="you@annalect.com"
                  type="email"
                  id="officialEmail"
                  .value="${this.officialEmail}"
                  @input="${this.validateName}"
                  required
                /><br />
                <span class="error"> ${this.officialEmailErrorMessage}</span>
              </td>
             

              <td>
                <label for="personalEmail">Personal Email *</label>
              </td>
              <td>
                <input
                placeholder="you@gmail.com"
                  type="email"
                  id="personalEmail"
                  .value="${this.personalEmail}"
                  @input="${this.validateName}"
                  required
                /><br />
                <span class="error"> ${this.personalEmailErrorMessage}</span>
              </td>
           
            </tr>

            
              <td>
                <label> Designation * </label>
              </td>
              <td>
                <select
                
                  id="designation"
                  .value="${this.designation}"
                  @input="${this.validateName}"
                  required
                >
                <option value="">Select an option</option>

                <option value="Manager">Manager</option>
                <option  value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                </select>
              
              </td>
              <!-- ${this.designationErrorMessage} -->

              <td>
                <label> Department * </label>
              </td>
              <td>
                <select
                  id="department"
                  .value="${this.department}"
                  @input="${this.validateName}"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </td>
            </tr>

            <!-- <tr>
              <td><h2>Address</h2></td>
            </tr> -->

            <tr>
              <td>
                <label for="addressLine1">Address Line 1 *</label>
              </td>
              <td>
                <input
                placeholder="Enter Your Address"
                  type="text"
                  id="addressLine1"
                  .value="${this.addressLine1}"
                  @input="${this.validateName}"
                  required
                
                /><br />
                <span class="error"> ${this.addressLine1ErrorMessage}</span>
              </td>
            

              <td>
                <label for="addressLine2">Address Line 2</label>
              </td>
              <td>
                <input
                placeholder="Enter Your Address (Optional)"
                  type="text"
                  id="addressLine2"
                  .value="${this.addressLine2}"
                  @input="${this.validateName}"
                /><br />
                <span class="error"> ${this.addressLine2ErrorMessage}</span>
              </td>
            
            </tr>

            <tr>
              <td>
                <label for="landmark">Landmark *</label>
              </td>
              <td>
                <input
                placeholder="Enter Landmark "
                  type="text"
                  id="landmark"
                  .value="${this.landmark}"
                  @input="${this.validateName}"
                  required
                /><br />
                <span class="error"> ${this.landmarkErrorMessage}</span>
              </td>
           

              <td>
                <label for="city">City *</label>
              </td>
              <td>
                <input
                placeholder="Enter City "
                  type="text"
                  id="city"
                  .value="${this.city}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="state">State *</label>
              </td>
              <td>
                <input
                placeholder="Enter State"
                  type="text"
                  id="state"
                  .value="${this.city}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
              <td>
                <label for="country">Country *</label>
              </td>
              <td>
                <input
                placeholder="Enter Country"
                  id="country"
                  type="text"
                  .value="${this.country}"
                  @input="${this.validateName}"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="zip">Zip Code *</label>
              </td>
              <td>
                <input
                placeholder="Enter Zipcode"
                  id="zip"
                  type="text"
                  .value="${this.zip}"
                  @input="${this.validateName}"
                  required
                /><br />
                <span class="error"> ${this.zipErrorMessage}</span>
              </td>
            </tr>
          </table>
          

          <button>Submit</button>
        </form>
      </div>
    `;
  }

  // validateName(event) {

  // }

  handleSubmit(event) {
    event.preventDefault();
    alert("success ...");
    const empData = {
      fullName: this.fullName,
      employeeCode: this.employeeCode,
      officialEmail: this.officialEmail,
      personalEmail: this.personalEmail,
      designation: this.designation,
      department: this.department,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      landmark: this.landmark,
      city: this.city,
      state: this.state,
      country: this.country,
      zip: this.zip,
    };
    this.saveAddressToLocalStorage(empData);
  }

  saveAddressToLocalStorage(empData) {
    const existingEmpData = JSON.parse(localStorage.getItem("empData")) || [];
    existingEmpData.push(empData);
    localStorage.setItem("empData", JSON.stringify(existingEmpData));
    this.clearForm();
    console.log("Address saved to local storage:", empData);
  }

  clearForm() {
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
  }

  validateName(e) {
    const inputName = e.target.id;
    this[inputName] = e.target.value;
    const formdata = e.target.value;
    const inputdata = formdata.replaceAll(" ", "");
    const formid = e.target.id;
    const letters = /^[A-Za-z]+$/;
    switch (formid) {
      case "fullName": {
        console.log(inputdata);
        console.log(inputdata.length);
        if (inputdata == "") {
          this.nameerrorMessage = "Can't be empty";
          break;
        }
         else if (inputdata.length < 3) {
          console.log(formdata.length);
          this.nameerrorMessage = "Please Enter Minimum 3 characters";
          break;
        } 
        else if (inputdata.length > 40) {
          this.nameerrorMessage = "Length can't be more than 40 characters";
          break;
        } else if (!inputdata.match(letters)) {
          this.nameerrorMessage = "Please enter valide full name";
          break;
        } else {
          this.nameerrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "employeeCode": {
        let pattern = "[A-Za-z][0-9]{6}";
        if (inputdata == "") {
          this.empcodeErrorMessage = "Can't be empty";
          break;
        }  else if (inputdata.length > 7) {
          console.log(formdata.length);
          this.empcodeErrorMessage = "Please enter 1 alphabet and 6 digits i.e-A123456";
          break;
        } 
        else if (!inputdata.match(pattern)) {
          this.empcodeErrorMessage =
            "Please enter 1 alphabet and 6 digits i.e-A123456";
          break;
        } else {
          this.empcodeErrorMessage = "";
          console.log("EmpCode is Right in Pattern");
          break;
        }
      }
      case "officialEmail": {
        let pattern = /^\S+@(annalect)\.com$/;
        if (inputdata == "") {
          this.officialEmailErrorMessage = "Can't be empty";
          break;
        } else if (!inputdata.match(pattern)) {
          this.officialEmailErrorMessage = "Invalid";
          break;
        } else {
          this.officialEmailErrorMessage = "";
          console.log("Official Email Id is currect");
          break;
        }
      }
      case "personalEmail": {
        let pattern = /^\S+@(gmail)\.com$/;
        // let pattern2=  /^[^\s@]+@yahoo\.com$/ ;
        // boolean result = inputdata.match(pattern)

        if (inputdata == "") {
          this.personalEmailErrorMessage = "Can't be empty";
          break;
        } else if (!inputdata.match(pattern)) {
          this.personalEmailErrorMessage = "Invalid";
          break;
        } else {
          this.personalEmailErrorMessage = "";
          // console.log(inputdata == pattern);
          // console.log(inputdata)
          // inputdata.match(pattern)

          // // console.log("Personal Email Id is currect : " + formdata.localeCompare(pattern));
          // // console.log("Personal Email Id is currect : " + formdata.localeCompare(pattern2));

          break;
        }
      }
      case "designation": {
        if (inputdata === "") {
          this.designationErrorMessage = "Please choose a designation";
          break;
        } else {
          console.log("ok");
        }
      }
      case "department": {
        console.log("department");
        console.log(document.getElementById(fullName).value);
        break;
      }
      case "addressLine1": {
        if (inputdata == "") {
          this.addressLine1ErrorMessage = "Can't be empty";
          break;
          // } else if (inputdata.length < 15) {
          //   console.log(formdata.length);
          //   this.addressLine1ErrorMessage = "Please Enter Minimum 15 characters";
          //   break;
        } else if (inputdata.length > 80) {
          this.addressLine1ErrorMessage =
            "Length can't be more than 80 characters";
          break;
        } else if (!inputdata.match(letters)) {
          this.addressLine1ErrorMessage = "Please enter valide input";
          break;
        } else {
          this.addressLine1ErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "addressLine2": {
        if (inputdata == "") {
          this.addressLine2ErrorMessage = "";
          break;
        }
        // else if (inputdata.length < 15) {
        //   console.log(formdata.length);
        //   this.addressLine2ErrorMessage = "Please Enter Minimum 15 characters";
        //   break;
        // }
        else if (inputdata.length > 80) {
          this.addressLine2ErrorMessage =
            "Length can't be more than 80 characters";
          break;
        } else if (!inputdata.match(letters)) {
          this.addressLine2ErrorMessage = "Please enter valide input";
          break;
        } else {
          this.addressLine2ErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "landmark": {
        if (inputdata == "") {
          this.landmarkErrorMessage = "Can't be empty";
          break;
        } else if (inputdata.length > 50) {
          this.landmarkErrorMessage = "Length can't be more than 50 characters";
          break;
        } else {
          this.landmarkErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "city": {
        if (inputdata == "") {
          this.cityErrorMessage = "Can't be empty";
          break;
        }
      }
      case "state": {
        if (inputdata == "") {
          this.stateErrorMessage = "Can't be empty";
          break;
        }
      }
      case "country": {
        if (inputdata == "") {
          this.countryErrorMessage = "Can't be empty";
          break;
        }
      }
      case "zip": {
        let pattern = "[0-9]{6}";
        if (inputdata == "") {
          this.zipErrorMessage = "Can't be empty";
          break;
        } else if (inputdata.length > 6) {
          console.log(formdata.length);
          this.zipErrorMessage = "Please Enter Maximum 6 digits";
          break;
        } else if (!inputdata.match(pattern)) {
          this.zipErrorMessage = "Please enter 6 digits only and no alphabets";
          break;
        } else {
          this.zipErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      default: {
        console.log("hi ");
      }
      // case (fullName.trim() === "" || fullName.length > 40):
      //   this.nameerrorMessage = "Please enter a valid full name (maximum length 40 characters)";
      //   break;
      // default:
      //   this.nameerrorMessage = "";
      //   this.fullName = fullName;
      //   break;
    }
  }
}

customElements.define("emp-form", EmpForm);
