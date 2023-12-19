window.onload = async function () {
    try {
        var data = await fetch('https://fakestoreapi.com/products');
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }

        var json = await data.json();
        var cardsdiv = document.getElementById("carddiv");
        json.forEach(function (element) {
            cardsdiv.innerHTML += `
                <div class="card">
                    <img src=${element.image} class="cardImg">
                    <div class="desc">
                        <span id="description">${element.title}</span>
                        <span id="price">${element.price}$</span>
                        <span id="category">${element.category}</span>
                    </div>
                </div>
            `;
        });
        console.log(cardsdiv.innerHTML);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
