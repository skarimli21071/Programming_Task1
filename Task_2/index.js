let cardsDiv=document.querySelector(".cards")

async function GetData(params) {
    try {
        let result=await axios.get("https://northwind.vercel.app/api/suppliers")

        for (let i=0; i < result.data.length; i++) {
            let colDiv=document.createElement("div")
            let cardDiv=document.createElement("div")
            let bottomDiv=document.createElement("div")
            let topDiv=document.createElement("div")
            let H3=document.createElement("h3")
            let span=document.createElement("span")
            let buttton=document.createElement("button")

            colDiv.className="col"
            cardDiv.className="card"
            bottomDiv.className="card-bottom"
            topDiv.className="card-top"

            H3.textContent=result.data[i].name 
            span.textContent=result.data[i].description
            buttton.textContent="View"

            bottomDiv.appendChild(button)
            topDiv.appendChild(H3,span)
            cardDiv.appendChild(topDiv,bottomDiv)
            colDiv.appendChild(cardDiv)
            cardsDiv.appendChild(colDiv)
        }
    } catch (err) {
        console.log(err)
    }
}