var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var apartment = document.querySelector(".apartment");
var phone = document.querySelector(".phone");

function changeHandler() {
  loadAddress();
}

function loadAddress() {
  var pin = document.querySelector(".pin_code").value;
  var address = document.querySelector(".address");
  var city = document.querySelector(".city");
  var state = document.querySelector(".state");
  var country = document.querySelector(".country");

  var url = `https://api.postalpincode.in/pincode/${pin}`;
  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",
    success: function (data) {
      let result = data[0].PostOffice[0];

      address.value = result.Name + ", " + result.Division;
      city.value = result.District;
      state.value = result.State;
      country.value = result.Country;
    },
    error: function (err) {
      console.log("error:" + err);
    },
  });
}

function formSubmission() {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    apartment === "" ||
    phone === ""
  ) {
    alert("Please enter all fields!");
  } else {
    alert("Form submitted successfully!");
  }
}
