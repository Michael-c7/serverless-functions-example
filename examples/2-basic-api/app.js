// const { default: axios } = require("axios")

const result = document.querySelector('.result')




const fetchData = async () => {
    try {
        const { data } = await axios.get("/api/2-basic-api")
        const products = data.map((item) => {
            const { image:{url}, name, price } = item
            return `
                <article class="product">
                    <img src=${url} alt=${name}/>
                    <div class="info">
                    <h5>utopia sofa</h5>
                    <h5 class="price">$${price}</h5>
                    </div>
                </article>
            `
        }).join("")

        console.log(data)
        result.innerHTML = products
    } catch(error) {
        result.innerHTML = `<h4>there was an error</h4>`

    }
}


fetchData()