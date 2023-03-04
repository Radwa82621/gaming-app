import { Details } from "./details.js"

export class display {
    constructor() {
        this.categoryLinks = Array.from(document.querySelectorAll("nav ul li a"));
        for (let i = 0; i < this.categoryLinks.length; i++) {
            this.categoryLinks[i].addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                 e.target.classList.add("active");
                this.category = e.target.getAttribute("data-category");
                this.getGames();
            })
        }
this.clickDefault()
    }
    clickDefault(){
        let x=document.getElementById("default")
        x.click()
    }
    async getGames() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd05f7f8792msh7b7dc2b095eac1ap104713jsnd6e3d24bffe6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options)
        let response = await api.json()
        this.display(response);
    }
    display(response) {

        var cartona = '';
        for (var i = 0; i < response.length; i++) {
            cartona += `   <div class="col-md-4 col-lg-3 my-3">
            <div class="card p-1"  id=${response[i].id}>
                <img src=${response[i].thumbnail} alt="...">
                <div class="card-body">
                    <div class="game-title d-flex justify-content-between my-3 " >
                        <h5 class="card-title mb-0">${response[i].title}</h5>
                        <span class="badge  py-0 d-flex justify-content-center align-items-center">Free</span>

                    </div>
                  <p class="card-text text-muted">${response[i].short_description}</p>
                </div>
                <div class="card-footer text-white d-flex justify-content-between">
                    <span class="badge bg-secondary  d-flex justify-content-center align-items-center">${response[i].genre}</span>
                    <span class="badge bg-secondary  d-flex justify-content-center align-items-center">${response[i].platform}</span>

                  </div>
              </div>
        </div>`
        }
        document.getElementById("row").innerHTML = cartona;
        let details = new Details(response);

    }
}

