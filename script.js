let ul = document.querySelectorAll(".ul li");
let box = document.querySelector(".form-box");
let leftbar = document.querySelector(".leftbar");
let rightbar = document.querySelector(".rightbar");

let comp = [
  {
    input: "Name",
  },
  {
    input: "email",
  },
  {
    dob: "DOB",
  },
  {
    gender: "gender",
  },
  {
    Number: "Age",
  },
  {
    number: "Phone no",
  },
  {
    button: "Submit",
  },
];
comp.forEach((components) => {
  for (let x in components) {
    let div = document.createElement("div");
    div.classList.add("compo");
    div.innerText = components[x];
    leftbar.append(div);
  }
});


let li = [
  {
    type: "text",
    placeholder: "name",
  },
  {
    type: "email",
    placeholder: "Enter your email",
  },
  {
    type: "date",
    placeholder: "Enter your DOB",
  },
  {
    //   option :[male,female,others],
    type: "radio",
  },
  {
    type: "number",
    placeholder: "Enter your Phone",
  },
  {
    type: "number",
    placeholder: "Enter your Age",
  },
  {
    type: "button",
    text: "Submit",
  },
];
li.forEach((item) => {
  let input = document.createElement("input");
  input.type = item.type;
  if (item.placeholder) {
    input.placeholder = item.placeholder;
  }

  if (item.type === "button") {
    input.value = item.text;
  }
  rightbar.append(input);
});
