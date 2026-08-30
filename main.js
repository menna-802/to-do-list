const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");

container.style.border = "3px solid red";

container.addEventListener("click", (eo) => {

    if (eo.target.className == "icon-trash icon") {
        eo.target.parentElement.parentElement.remove()

    }
    else if (eo.target.className == "icon-angry2 icon") {

    eo.target.classList.add("dn");

    const heart = `<span class="icon-heart"></span>`;

    const task = eo.target.parentElement.parentElement;
    task.querySelector(".task-test").classList.add("finish");

    eo.target.parentElement.innerHTML += heart;

       
   
    }
   else if (eo.target.className == "icon-heart") {

    const task = eo.target.parentElement.parentElement;
    task.querySelector(".task-test").classList.remove("finish");

 eo.target.classList.add("dn")

const addAngry=` <span class="icon-angry2 icon"></span>`
eo.target.parentElement.innerHTML  += addAngry

} else if (eo.target.classList.contains("icon-star")) {

    if (eo.target.classList.contains("yellow")) {
        eo.target.classList.remove("yellow");
    } 
    else {
        eo.target.classList.add("yellow");
        container.prepend(eo.target.parentElement);
    }





}



});

button.addEventListener("click", (eo) => {
    eo.preventDefault();

    const task = `
        <div class="task">
            <span class="icon-star icon"></span>

            <p lang="ar" class="task-test">
                ${input.value}
            </p>

            <div>
                <span class="icon-trash icon"></span>
                <span class="icon-angry2 icon"></span>
            </div>
        </div>
    `;

    container.innerHTML += task;
    input.value=""
});