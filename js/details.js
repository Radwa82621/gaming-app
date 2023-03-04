export class Details {
    constructor(response) {
        this.response = response;
        this.cards = Array.from(document.querySelectorAll(".card"))
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].addEventListener("click", (e) => {
                this.id = this.cards[i].getAttribute("id")
                this.displayDetails()

            })
        }

    }
    async displayDetails() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd05f7f8792msh7b7dc2b095eac1ap104713jsnd6e3d24bffe6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let detailsAPI = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options)
        let details = await detailsAPI.json()
        document.querySelector("#home").classList.add("d-none");
        document.querySelector("#details").classList.remove("d-none");
        document.getElementById("detailsTitle").innerHTML = ("Details Game")
        document.getElementById("detailsName").innerHTML = details.title
        document.getElementById("detailsCategory").innerHTML = details.genre
        document.getElementById("detailsStatus").innerHTML = details.status
        document.getElementById("detailsPlatform").innerHTML = details.platform
        document.getElementById("detailsImg").src = details.thumbnail
        document.getElementById("disc").innerHTML = details.description
        document.getElementById("gameLink").href = details.game_url

       document.getElementById("close").addEventListener("click",()=>{
        document.querySelector("#details").classList.add("d-none");
        document.querySelector("#home").classList.remove("d-none");
       })




    }



}
