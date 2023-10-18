let productIdCounter = 1; 
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productImage = document.getElementById("productImage").files[0];

    if (productName && !isNaN(productPrice) && productPrice > 0 && productImage) {
        const productId = productIdCounter++; 
        const reader = new FileReader();
        reader.onloadend = function() {
            const product = {
                id: productId,
                name: productName,
                price: productPrice.toFixed(2),
                image: reader.result
            };

            const productList = document.getElementById("productList");
            const listItem = document.createElement("li");
            const img = document.createElement("img");
            img.src = product.image;
            listItem.appendChild(img);
            listItem.innerHTML += `${product.name} - R$ ${product.price} <button class="removeButton" data-id="${product.id}">Remover</button>`;
            productList.appendChild(listItem);

            document.getElementById("productName").value = "";
            document.getElementById("productPrice").value = "";
            document.getElementById("productImage").value = "";

            const removeButtons = document.querySelectorAll(".removeButton");
            removeButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const productId = parseInt(this.getAttribute("data-id"));
                    
                    productList.removeChild(this.parentElement);
                });
            });

           
        };
        reader.readAsDataURL(productImage);
    } else {
        alert("Por favor, insira um nome de produto válido, um preço maior que zero e uma imagem.");
    }
});

