window.addEventListener("load", formSetup, false);

/// ARRAYS ///

let input_names = ["input_1", "input_2", "input_3", "input_4", "input_5"];

let hint_text = [
  "Please enter your first name!",
  "Please enter your last name!",
  "Please enter a valid email address! (must contain @)",
  "Please enter a valid phone number! (must contain -)",
  "Please enter a valid sulley address! (http://students.cah.ucf.edu/~ke23)",
];

let blur_text = [
  "You didn't enter a valid name!",
  "You didn't enter a valid last name!",
  "You didn't enter a valid email address!",
  "You didn't enter a valid phone number!",
  "You didn't enter a valid student address!",
];

let id_value = ["first_name", "last_name", "email", "phone", "sulley"];

let invalid_names = [
  "invalid_img",
  "invalid_img_2",
  "invalid_img_3",
  "invalid_img_4",
  "invalid_img_5",
];

// Check Mark Icon //
var check_img = document.createElement("img");
check_img.setAttribute("src", "img/checkmark.png");
var check_img_2 = document.createElement("img");
check_img_2.setAttribute("src", "img/checkmark.png");
var check_img_3 = document.createElement("img");
check_img_3.setAttribute("src", "img/checkmark.png");
var check_img_4 = document.createElement("img");
check_img_4.setAttribute("src", "img/checkmark.png");
var check_img_5 = document.createElement("img");
check_img_5.setAttribute("src", "img/checkmark.png");

// Invalid Icon //
var invalid_img = document.createElement("img");
invalid_img.setAttribute("src", "img/false.png");
var invalid_img_2 = document.createElement("img");
invalid_img_2.setAttribute("src", "img/false.png");
var invalid_img_3 = document.createElement("img");
invalid_img_3.setAttribute("src", "img/false.png");
var invalid_img_4 = document.createElement("img");
invalid_img_4.setAttribute("src", "img/false.png");
var invalid_img_5 = document.createElement("img");
invalid_img_5.setAttribute("src", "img/false.png");

/// MAIN FUNCTION ///

function formSetup() {
  var input_valid_1 = false;
  var input_valid_2 = false;
  var input_valid_3 = false;
  var input_valid_4 = false;
  var input_valid_5 = false;

  var submit_button = document.getElementById("submit");
  submit_button.addEventListener("click", submitForm, false);
  validateData();

  // ON FOCUS LOOP //
  for (let i = 0; i < 5; i++) {
    var id_name = document.getElementById(id_value[i]);
    id_name.onfocus = function () {
      var input = document.getElementById(input_names[i]);
      var span = input.getElementsByTagName("span");
      span[0].firstChild.nodeValue = hint_text[i];
    };
  }

  // VALIDATE DATA FUNCTION //
  function validateData() {
    for (let i = 0; i < 5; i++) {
      var id_name = document.getElementById(id_value[i]);

      // ON BLUR FUNCTION
      id_name.onblur = function () {
        var input = document.getElementById(input_names[i]);
        var span = input.getElementsByTagName("span");

        // RegEx
        var regEx_name = /^[a-zA-Z]+$/;
        var regEx_email = /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-zA-Z]+)$/;
        var regEx_phone = /^\d\d\d-\d\d\d-\d\d\d\d$/;
        var regEx_students = /http:\/\/([a-zA-Z0-9.]+)\/~([a-zA-Z0-9.\/]+)/;

        input_call = this.value;

        // Access div #inform //
        var last_div = document.getElementById("inform_1");
        var last_div_2 = document.getElementById("inform_2");
        var last_div_3 = document.getElementById("inform_3");
        var last_div_4 = document.getElementById("inform_4");
        var last_div_5 = document.getElementById("inform_5");

        /// INPUT VALIDATION ///
        switch (this.id) {
          // Name Validation
          case "first_name":
            if (input_call.match(regEx_name)) {
              last_div.appendChild(check_img);
              span[0].firstChild.nodeValue = "";
              input_valid_1 = true;
              invalid_img.remove();
            } else {
              span[0].appendChild(invalid_img);
              span[0].firstChild.nodeValue = "";
              input_valid_1 = false;
              check_img.remove();
            }
            break;
          // Last Name Validation
          case "last_name":
            if (input_call.match(regEx_name)) {
              last_div_2.appendChild(check_img_2);
              span[0].firstChild.nodeValue = "";
              input_valid_2 = true;
              invalid_img_2.remove();
            } else {
              span[0].appendChild(invalid_img_2);
              span[0].firstChild.nodeValue = "";
              input_valid_2 = false;
              check_img_2.remove();
            }
            break;
          // Email Validation
          case "email":
            if (input_call.match(regEx_email)) {
              last_div_3.appendChild(check_img_3);
              span[0].firstChild.nodeValue = "";
              input_valid_3 = true;
              invalid_img_3.remove();
            } else {
              span[0].appendChild(invalid_img_3);
              span[0].firstChild.nodeValue = "";
              input_valid_3 = false;
              check_img_3.remove();
            }
            break;
          // Phone Validation
          case "phone":
            if (input_call.match(regEx_phone)) {
              last_div_4.appendChild(check_img_4);
              span[0].firstChild.nodeValue = "";
              input_valid_4 = true;
              invalid_img_4.remove();
            } else {
              span[0].appendChild(invalid_img_4);
              span[0].firstChild.nodeValue = "";
              input_valid_4 = false;
              check_img_4.remove();
            }
            break;
          // Student Validation
          case "sulley":
            if (input_call.match(regEx_students)) {
              last_div_5.appendChild(check_img_5);
              span[0].firstChild.nodeValue = "";
              input_valid_5 = true;
              invalid_img_5.remove();
            } else {
              span[0].appendChild(invalid_img_5);
              span[0].firstChild.nodeValue = "";
              input_valid_5 = false;
              check_img_5.remove();
            }
            break;
        }
      };
    }
  }

  /// SUBMIT FORM ///
  function submitForm(event) {
    event.preventDefault();

    // Set up needed variables //
    var submit_btn = document.getElementById("survey_results");
    var span = submit_btn.getElementsByTagName("span");
    var badge = document.getElementById("badge");

    // Question 1 Radiobuttons //
    var buttons_1 = document.querySelectorAll(
      `input[name="defining_character"]`
    );
    var checked_button_1 = document.querySelector(
      'input[name="defining_character"]:checked'
    );

    // Question 2 Radiobuttons //
    var buttons_2 = document.querySelectorAll(`input[name="fatal_flaw"]`);
    var checked_button_2 = document.querySelector(
      'input[name="fatal_flaw"]:checked'
    );

    // Get value from checked buttons //
    var selected_btn_1;
    for (let button_1 of buttons_1) {
      if (button_1.checked) {
        selected_btn_1 = button_1.value;
        break;
      }
    }

    var selected_btn_2;
    for (let button_2 of buttons_2) {
      if (button_2.checked) {
        selected_btn_2 = button_2.value;
        break;
      }
    }

    // SUBMIT VALIDATION //
    if (
      input_valid_1 == true &&
      input_valid_2 == true &&
      input_valid_3 == true &&
      input_valid_4 == true &&
      input_valid_5 == true &&
      checked_button_1 != null &&
      checked_button_2 != null
    ) {
      // Show results //
      var show = document.getElementById("hide");
      show.style.display = "block";
      var show_2 = document.getElementById("badge_link");
      show_2.style.display = "block";
      var title = document.getElementById("survey_3");
      title.style.marginLeft = "405px";

      // Information //
      span[0].firstChild.nodeValue =
        "Your full name is " +
        document.form.elements["first_name_2"].value +
        " " +
        document.form.elements["last_name_2"].value +
        ".\r\nYour email is " +
        document.form.elements["email_address"].value +
        ".\r\nYour phone number is " +
        document.form.elements["phone_number"].value +
        ".\r\nAnd, finally, your student address is " +
        document.form.elements["sulley_address"].value +
        ".\r\n \r\nAccording to your answers, your defining character is being " +
        selected_btn_1 +
        " and your fatal flaw is " +
        selected_btn_2 +
        ". \r\n\r\nBased on these answers, you are...";

      // MR PEANUTBUTTER //
      if (selected_btn_1 == "positive") {
        badge.setAttribute("src", "img/mr_peanutbutter.png"); // Badge Image
        span[1].firstChild.nodeValue = "\r\nMR PEANUTBUTTER\r\n";
        span[2].firstChild.nodeValue = "Access the badge: ";
        a_link.setAttribute(
          "href",
          "https://students.cah.ucf.edu/~po171501/dig3716c/assignment2/img/mr_peanutbutter.png"
        );
      }

      // TODD //
      else if (selected_btn_1 == "creative") {
        badge.setAttribute("src", "img/todd_chavez.jpeg"); // Badge Image
        span[1].firstChild.nodeValue = "\r\nTODD\r\n";

        span[2].firstChild.nodeValue = "Access the badge: ";
        a_link.setAttribute(
          "href",
          "https://students.cah.ucf.edu/~po171501/dig3716c/assignment2/img/todd_chavez.jpeg"
        );
      }

      // DIANE //
      else if (selected_btn_1 == "ambitious") {
        badge.setAttribute("src", "img/diane.jpeg"); // Badge Image
        span[1].firstChild.nodeValue = "\r\nDIANE\r\n";
        span[2].firstChild.nodeValue = "Access the badge: ";
        a_link.setAttribute(
          "href",
          "https://students.cah.ucf.edu/~po171501/dig3716c/assignment2/img/diane.jpeg"
        );
      }

      // BOJACK //
      else if (selected_btn_1 == "witty") {
        badge.setAttribute("src", "img/bojack.jpeg"); // Badge Image
        span[1].firstChild.nodeValue = "\r\nBOJACK\r\n";
        span[2].firstChild.nodeValue = "Access the badge: ";
        a_link.setAttribute(
          "href",
          "https://students.cah.ucf.edu/~po171501/dig3716c/assignment2/img/bojack.jpeg"
        );
      }
    } else {
      badge.setAttribute("src", "");
      span[1].firstChild.nodeValue = "";
      span[2].firstChild.nodeValue = "";
      var show = document.getElementById("hide");
      show.style.display = "block";
      var title = document.getElementById("survey_3");
      title.style.marginLeft = "260px";

      var show_2 = document.getElementById("badge_link");
      show_2.style.display = "none";
      span[0].firstChild.nodeValue =
        "Something is invalid!\r\nMake sure to input all information and answer all of the questions!";
    }
  }
}
