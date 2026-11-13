const form = document.querySelector(".appointment-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs = form.querySelectorAll("input, select, textarea");

    let isEmpty = false;

    inputs.forEach(function(item){

        if(item.value.trim() == ""){

            isEmpty = true;

        }

    });

    if(isEmpty){

        alert("Please fill all the fields.");

    }

    else{

        alert("Appointment Booked Successfully!");

        form.reset();

    }

});
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

if(password && toggle){

    toggle.addEventListener("click", function(){

        if(password.type === "password"){

            password.type = "text";
            toggle.innerHTML = "🙈";

        }

        else{

            password.type = "password";
            toggle.innerHTML = "👁";

        }

    });

}
const search = document.getElementById("searchDoctor");

if(search){

    search.addEventListener("keyup", function(){

        let value = search.value.toLowerCase();

        let cards = document.querySelectorAll(".doctor-card");

        cards.forEach(function(card){

            let name = card.querySelector(".doctor-name")
                           .innerText
                           .toLowerCase();

            if(name.includes(value)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

}