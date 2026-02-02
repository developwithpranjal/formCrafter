let box = document.querySelector(".form-box");
let leftbar = document.querySelector(".leftbar");
let rightbar = document.querySelector(".rightbar");

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

  if (item.type !== "button") {
    let label = document.createElement("label");
    label.innerText = item.label;
    data.append(label);
  }
  if (item.type === "radio") {
    let gender = document.createElement("div");
    gender.classList.add("gender");
    gender.innerHTML = `<label><input type="radio" name="Gender"> Male</label>
            <label> <input type="radio" name="Gender"> Female</label>
            <label> <input type="radio" name="Gender"> Others</label>`;
            data.append(gender);
            box.append(data)
            return;
  }
  let input = document.createElement("input");
  input.type = item.type;

  if (item.type === "button") {
    input.value = "Submit";
  } else {
    input.placeholder = "Enter " + item.label;
  }

  console.log(item);

  rightbar.innerHTML = `<h2>PROPERTIES</h2>
        <p>Select an element to edit its properties</p>
    <label class= "label">Label:<input placeholder = "Enter Label"></label>
    <label class= "placeholder" >Placeholder:<input placeholder = "Enter placeholder"></label>`;
  data.append(input);
  box.append(data);
}
