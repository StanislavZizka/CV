/*js for popup in education section*/

function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id){
    document.getElementById(id).style.display = "none";
}

/*contact form*/
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    status.textContent = "odesílání....";

    const formData = new FormData(form);


    try{
        const response = await fetch("https://formspree.io/f/mldbobya", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            
        }
    });

    if (response.ok) {
        status.textContent = "Zpráva byla úspešně odeslána!";
        form.reset();
    } else {
        status.textContent = "Chyba při odesílání.";
    }
}catch (error) {
        status.textContent = "Chyba připojení.";
    }   
});