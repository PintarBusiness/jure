const form = document.getElementById("kontakt-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {
    const fullName = document.getElementsByName("ime")[0];
    const priimek = document.getElementsByName("priimek")[0];
    const email = document.getElementsByName("email")[0];
    const zadeva = document.getElementsByName("zadeva")[0];
    const sporocilo = document.getElementsByName("sporočilo")[0];

    const bodyMessage = `Ime: ${fullName.value}<br>Priimek: ${priimek.value}<br>Email: ${email.value}<br>Zadeva: ${zadeva.value}<br>Sporočilo: ${sporocilo.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jurepintar.business@gmail.com",
        Password: "AFB54B15399C014D26AE126EBE4BA6C0BA9A",
        To: 'jurepintar.business@gmail.com',
        From: "jurepintar.business@gmail.com",
        Subject: zadeva.value,
        Body: bodyMessage
    }).then(function (message) {
        const successMessage = document.createElement("div");
        successMessage.innerText = "Sporočilo je bilo uspešno poslano!";
        successMessage.classList.add("success-message");
        document.querySelector('.gumbkontakt').parentNode.appendChild(successMessage);

        document.querySelector('.gumbkontakt').innerText = "Sporočilo poslano";
        document.querySelector('.gumbkontakt').setAttribute('disabled', true);

        // Pošljiči vnešene podatke
        fullName.value = '';
        priimek.value = '';
        email.value = '';
        zadeva.value = '';
        sporocilo.value = '';

        // Dodajemo razred, ki sproži učinek prikaza
        successMessage.classList.add("show");
    }).catch(function (error) {
        console.error("Napaka pri pošiljanju sporočila:", error);
        alert("Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.");
    });
}



