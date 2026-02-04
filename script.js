let box = document.querySelector(".form-box");
let leftbar = document.querySelector(".leftbar");
let rightbar = document.querySelector(".rightbar");
let newbtn = document.querySelector(".newbtn");
let save = document.querySelector(".savebtn");

let components = [
  {
    label: "Inputs",
    type: "text",
  },

  {
    label: "DOB",
    type: "date",
  },
  {
    label: "Email",
    type: "email",
  },
  {
    label: "Gender",
    type: "radio",
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
  let label = document.createElement("label");
  if (item.type !== "button") {
    label.innerText = item.label;
    data.append(label);
  }
  if (item.type === "radio") {
    let gender = document.createElement("div");
    gender.classList.add("gender");
    gender.innerHTML = `
<label><input type="radio" name="Gender" value="Male"> Male</label>
<label><input type="radio" name="Gender" value="Female"> Female</label>
<label><input type="radio" name="Gender" value="Others"> Others</label>
`;

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

  //   console.log(item);

  data.append(input);
  box.append(data);
  data.addEventListener("click", () => editData(data));
  save.addEventListener("click", () =>
    saveform(label.innerText, input.placeholder),
  );
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
    fieldLabel.innerText = rightlabel.value;
  };

  placeholder.oninput = () => {
    fieldInput.placeholder = placeholder.value;
  };
}
newbtn.addEventListener("click", () => {
  box.innerHTML = "";
  rightbar.innerHTML = "";
});

function saveform(data, item) {
  let storage = JSON.parse(localStorage.getItem("form")) || [];

  let obj = {
    id: Date.now(),
    label: data,
    placeholder: item,
  };

  storage.push(obj);

  localStorage.setItem("form", JSON.stringify(storage));
  alert("Form saved successfully");
  box.innerHTML = ""
  rightbar.innerHTML = ""
  console.log("Saved forms:", storage);
}
