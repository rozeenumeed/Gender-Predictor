
let Name = document.querySelector("#name");
let InputWrapper = document.querySelector(".input-wrapper");
let ResultTitle = document.querySelector("#resultTitle");
let ResultText = document.querySelector("#resultText");
let disclaimer = document.querySelector(".disclaimer");
let PredictBtn = document.querySelector("#predictBtn");
let span = disclaimer.querySelector("span");
let Avatar = document.querySelector(".result-icon img");

function predict() {
    fetch(`https://api.genderize.io?name=${encodeURIComponent(Name.value.trim())}&apikey=c46687e6e90c9c15f975bbf70106a576`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.gender === null) {
                ResultTitle.textContent = "Not valid name, Try again";
                ResultText.textContent = "";
                Avatar.removeAttribute("src");
                return;
            } else {
                ResultTitle.textContent = data.gender;
            }

            ResultText.textContent =
                `${Math.round(data.probability * 100)}%`;

            span.textContent = ` ${data.count} `;
            span.style.fontWeight = "bold";

            if (data.gender === "female") {
                Avatar.src =
                    `https://api.dicebear.com/10.x/lorelei/svg?seed=${encodeURIComponent(data.name)}`;
            } else if (data.gender === "male") {
                Avatar.src =
                    `https://api.dicebear.com/10.x/notionists/svg?seed=${encodeURIComponent(data.name)}`;
            }
        })
        .catch(error => {
            console.log(error);
            ResultTitle.textContent = "Something went wrong";
        });
}

PredictBtn.addEventListener("click", function(event) {
    event.preventDefault();
    predict();
});