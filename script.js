let box = document.querySelector(".form-box");
let leftbar = document.querySelector(".leftbar");
let rightbar = document.querySelector(".rightbar");
let newbtn = document.querySelector(".newbtn");
let components = [
  {
    label: "Name",
    type: "text",
  },

  {
    label: "Email",
    type: "email",
  },
  {
    label: "DOB",
    type: "date",
  },

  {
    label: "Gender",
    type: "radio",
  },
  {
    label: "Age",
    type: "number",
  },
  {
    label: "Phone",
    type: "tel",
  },
  {
    label: "Submit",
    type: "button",
  },
];
components.forEach((item) => {
  let div = document.createElement("div");
  div.classList.add("compo");
  div.innerText = item.label;
  leftbar.append(div);
  div.addEventListener("click", () => showinput(item));
});

function showinput(item) {
  let data = document.createElement("div");
  data.classList.add("field");
  let delbtn = document.createElement("button");
  delbtn.classList.add("delbtn");
  delbtn.innerHTML = "Delete";

  data.append(delbtn);
  if (item.type !== "button") {
    let label = document.createElement("label");
    label.innerText = item.label;
    data.append(label);
  }
  if (item.type === "radio") {
    let gender = document.createElement("div");
    gender.classList.add("gender");
    gender.innerHTML = `<label> <input type="radio" name="Gender" > Male</label>
            <label> <input type="radio" name="Gender"> Female</label>
            <label> <input type="radio" name="Gender"> Others</label>`;
    data.append(gender);
    box.append(data);
    return;
  }
  delbtn.addEventListener("click", () => {
    data.remove();
  });

  let input = document.createElement("input");
  input.type = item.type;

  input.readOnly = true;

  if (item.type === "button") {
    input.value = "Submit";
  } else {
    input.placeholder = "Enter placeholder's text...";
  }

  console.log(item);

  data.append(input);
  box.append(data);
  data.addEventListener("click", () => editData(data));
}

function editData(data) {
  rightbar.innerHTML = `<h2>PROPERTIES</h2>
        <p>Select an element to edit its properties</p>
    <label class= "label">Label:<input placeholder = "Enter label" ></label>
    <label class= "placeholder" >Placeholder:<input placeholder = "Enter placeholder" ></label>`;

  let rightlabel = document.querySelector(".label input");
  let placeholder = document.querySelector(".placeholder input");
  let fieldLabel = data.querySelector("label");
  let fieldInput = data.querySelector("input");

  rightlabel.oninput = () => {
    if (fieldLabel) {
      fieldLabel.innerText = rightlabel.value;
    }
  };

  placeholder.oninput = () => {
    if (fieldInput) {
      fieldInput.placeholder = placeholder.value;
    } else {
    }
  };
}
newbtn.addEventListener("click", () => {
  box.innerHTML = "";
  rightbar.innerHTML = "";
});
