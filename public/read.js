document.getElementById("load").onclick = function () {
    const value = document.getElementById("movie-id").value;
    if (value === "") {
        axios.get('/movies').then(addList);//bring all results
    } else {
        axios
            .get(`/movies/${value}`)
            .then(addSingle)
            .catch((err) => {
                if (err.response.status === 404) {
                    notFound();
                }
            });//find one product
    }

};






function addList({ data }) {
    resetContentArea();
    const template = document.querySelector("#list-result");
    const clone = template.content.cloneNode(true);

    const ul = clone.querySelector("ul");
    data.forEach((d) => {
        const li = clone.querySelector("li").cloneNode(true);
        const id = li.querySelector("#movie-id");
        id.textContent = d.id;
        id.onclick = (e) => {
            document.getElementById("movie-id").value = e.currentTarget.textContent;
        };
        li.querySelector("#movie-name").textContent = d.name;
        li.querySelector("#movie-price").textContent = d.price;

        ul.appendChild(li);
    });

    results.appendChild(clone);

        
}

function addSingle({ data }) {
    resetContentArea();
    const template = document.querySelector("#result");

    const clone = template.content.cloneNode(true);
    clone.querySelector("#title").textContent = data.title;
    clone.querySelector("#price").textContent = data.price;
    clone.querySelector("#director").textContent = data.director;
    clone.querySelector("#rate").textContent = data.rate;

    results.appendChild(clone);
}

function notFound() {
    resetContentArea();

    const h2 = document.querySelector("h2.hidden");
    h2.className = "";
}

function resetContentArea() {
    document.querySelector("h2").className = "hidden";
    const currentProduct = document.getElementById("movie-result");
    if (currentProduct) {
        currentProduct.remove();
    }
    const productList = document.getElementById("movie-list");
    if (productList) {
        productList.remove();
    }
}
