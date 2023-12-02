var email=document.getElementById("email");
var password=document.getElementById("password");
var no=document.getElementById("phno");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");

var regex=/^([0-9])?$/
function validate(){
    if(no.value.trim()=="" ){
        err3.innerText="field cannot be empty";
        err3.style.color="red"
        no.style.border="2px solid red";
        return false
    }
    else if(regex.test(email.value)){
        err3.innerText="please enter proper number";
        err3.style.color="red" ; 
        no.style.border="2px solid red";
        return false 
    }
    else{
        err3.innerText="";

        return true;
    }
}
  var regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
    if(email.value.trim()=="" ){
        err1.innerText="field cannot be empty";
        err1.style.color="red"
        email.style.border="2px solid red";
        return false
    }
    else if(regex.test(email.value)){
        err1.innerText="please enter proper email";
        err1.style.color="red" ; 
        email.style.border="2px solid red";
        return false 
    }
    else{
        err1.innerText="";

        return true;
    }

}
// function validatePassword() {
//     var newPassword = document.getElementById('changePasswordForm').newPassword.value;
//     var minNumberofChars = 8;
//     var maxNumberofChars = 16;
//     var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//     alert(newPassword); 
//     if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
//         return false;
//     }
//     if(!regularExpression.test(newPassword)) {
//         alert("password should contain atleast one number and one special character");
//         return false;
//     }
// }
// function validatePhone(){
//     if($(".phone").val() == ""){
//           phoneerror = "Please enter phone number";
//               } else if ($(".phone").val().length !== 10){
//             phoneerror = "Must be 10 Digits";
//             } else if(!($.isNumeric($(".phone").val())) && $(".phone").val() != ""){
//                 phoneerror = "this field cannot contain letters";
    
//             }else {
//                 phoneerror = "";
//             }
//             console.log(phoneerror);
//             return phoneerror;
//         }
        function ValidateUSPhoneNumber(phoneNumber) {
            var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{1}/;
            var phone = phoneNumber.match(regExp);
            if (phone) {
              alert('yes');
              return true;
            }
            alert('no');
            return false;
          }


