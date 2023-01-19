// let toggle = document.getElementById("chck");

// toggle.addEventListener("change", function() {
//     if (this.checked) {

//         // Mengambil title pada section0
//         let Slide1Title = document.querySelector(".title2the");
//         Slide1Title.innerHTML = "Arak Tradisional Bali";

//     } else {
//         // Mengambil title pada section0
//         let Slide1Title = document.querySelector(".title2the");
//         Slide1Title.innerHTML = "The Bali's Arak Traditional";
//     }
// });

let toggle = document.getElementById("chck");
let language = "english";

toggle.addEventListener("change", function() {
    if (this.checked) {
        // Muat data bahasa Indonesia
        language = "indonesia";
    } else {
        // Muat data bahasa Inggris
        language = "english";
    }
    updateLanguage();
});

function updateLanguage() {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Ubah konten halaman sesuai dengan data bahasa
            Object.entries(data).forEach(([key, value]) => {
                let elements = document.getElementsByClassName(key);
                for (let i = 0; i < elements.length; i++) {
                    elements[i].innerHTML = value;
                }
            });
            document.getElementById("name").placeholder = data["placeholder-name"];
            document.getElementById("emailofwhatsapp").placeholder = data["placeholder-emailofwhatsapp"];
            document.getElementById("message").placeholder = data["placeholder-message"];
        });
}

