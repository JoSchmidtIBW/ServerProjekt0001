
// These variables will stay in the local scope of this module (in this case, person.js)
var firstName, lastName, age;

// Make sure your argument name doesn't conflict with variables set above

 let setFirstName;
setFirstName = function (fname) {
    firstName = fname;
};
//export default setFirstName;

let setLastName;
setLastName = function (lname) {
    lastName = lname;
};
//export default setLastName;

let setAge;
setAge = function (yrsold) {
    age = yrsold;
};
//export default setAge;

// You're returning an object with property values set above
 let getPersonInfo;
getPersonInfo = function () {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
};
//export default = {getPersonInfo,setFirstName,setLastName,setAge};
export { getPersonInfo,setFirstName,setLastName,setAge};