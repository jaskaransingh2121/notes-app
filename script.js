let input = document.getElementById("input")
let Add = document.getElementById("addnote")
let list = document.getElementById("noteslist")

let notes = JSON.parse(localStorage.getItem("notes")) || []

function rendernotes() {
    list.innerHTML = "";
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${note} <button class="deleteBtn" data-index="${index}">Delete</button>`;
        list.appendChild(li);
    });

Add.addEventListener("click", () => {
    let text = input.value.trim();
    if (text) {
        notes.push(text)
        localStorage.setItem("notes", JSON.stringify(notes))
        input.value = ""
        rendernotes();
    }
})
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    let index = e.target.getAttribute("data-index");
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    rendernotes();
  }
});
}
rendernotes();