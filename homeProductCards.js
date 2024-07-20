import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector(".productContainer");


export const showProductContainer = (products) => {
    if(!products) return false;
    else {
        products.forEach((currPro) => {
            const { id, name, category, brand, price, stock, image, description } = currPro;
            
            //* Step 1 : Create a div(col-md-3, item, jost) and id(productTemplate) 
            const mainDiv = document.createElement("div");
            mainDiv.classList.add("col-md-3");
            mainDiv.classList.add("item");
            mainDiv.classList.add("jost");
            mainDiv.setAttribute("id", `card${id}`);


            //* Step 2 : Create a div(productCategory) and add category to it
            const productCategoryDiv = document.createElement("div");
            productCategoryDiv.classList.add("productCategory");
            productCategoryDiv.textContent = category;
            mainDiv.appendChild(productCategoryDiv);


            //* Step 3 : Create a div(productImage) and add image to it 
            const productImageDiv = document.createElement("div");
            productImageDiv.classList.add("productImage");

            const itemImg = document.createElement("img");
            itemImg.classList.add("img-fluid");
            itemImg.classList.add("myItemImage");
            itemImg.src = image;
            itemImg.alt = name;

            productImageDiv.appendChild(itemImg);
            mainDiv.appendChild(productImageDiv);


            //* Step 4 : Create a div(productTitle) and add title to it 
            const productTitleDiv = document.createElement("div");
            productTitleDiv.classList.add("productTitle");
            productTitleDiv.textContent = name;
            mainDiv.appendChild(productTitleDiv);


            //* Step 5 : Create a div(rating) and add rating 
            const productRatingDiv = document.createElement("div");
            productRatingDiv.classList.add("productRating");
            for(let i = 1 ; i <= 5 ; i++) {
                const iTag = document.createElement("i");
                iTag.classList.add("fa-solid");
                iTag.classList.add("fa-star");
                productRatingDiv.appendChild(iTag);
            }
            mainDiv.appendChild(productRatingDiv);


            //* Step 6 : Create a div(productDescription) and add description to it
            const productDescriptionDiv = document.createElement("div");
            productDescriptionDiv.classList.add("productDescription");
            productDescriptionDiv.textContent = description;
            mainDiv.appendChild(productDescriptionDiv);


            //* Step 7 : Create a div(productPrice) and add pricing 
            const productPriceDiv = document.createElement("div");
            productPriceDiv.classList.add("productPrice");

            const discountedPriceDiv = document.createElement("div");
            discountedPriceDiv.classList.add("discountedPrice");
            discountedPriceDiv.textContent = `₹ ${price}`;
            productPriceDiv.appendChild(discountedPriceDiv);

            const actualPriceDiv = document.createElement("div");
            actualPriceDiv.classList.add("actualPrice");
            actualPriceDiv.textContent = `₹ ${price * 4}`;
            productPriceDiv.appendChild(actualPriceDiv);

            mainDiv.appendChild(productPriceDiv);


            //* Step : 8 Create a div(productStock)  and add stocks
            const productStockDiv = document.createElement("div");
            productStockDiv.classList.add("productStock");
            
            const para = document.createElement("p");
            para.textContent = "Total Stocks Available: ";
            
            const spanTag = document.createElement("span");
            spanTag.classList.add("stockValue");
            spanTag.textContent = stock;
            
            para.appendChild(spanTag);
            productStockDiv.appendChild(para);

            mainDiv.appendChild(productStockDiv);


            //* Step : 9 Create a div(quantityWanted) and add quantity 
            const quantityWantedDiv = document.createElement("div");
            quantityWantedDiv.classList.add("row");
            quantityWantedDiv.classList.add("quantityWanted");

            const col_xl_5 = document.createElement("div");
            col_xl_5.classList.add("col-xl-5");

            const pTag = document.createElement("p");
            pTag.textContent = `Quantity(Pieces)`;
            col_xl_5.appendChild(pTag);
            quantityWantedDiv.appendChild(col_xl_5);


            const col_xl_7 = document.createElement("div");
            col_xl_7.classList.add("col-xl-7");
            col_xl_7.classList.add("quantitySetter");

            const incBtn = document.createElement("button");
            incBtn.classList.add("increment");
            incBtn.textContent = "+";

            const pTag2 = document.createElement("p");
            pTag2.classList.add("quantityValue");
            pTag2.textContent = 0;

            const decBtn = document.createElement("button");
            decBtn.classList.add("decrement");
            decBtn.textContent = "-";

            col_xl_7.appendChild(incBtn);
            col_xl_7.appendChild(pTag2);
            col_xl_7.appendChild(decBtn);

            quantityWantedDiv.appendChild(col_xl_7);

            mainDiv.appendChild(quantityWantedDiv);


            //* Step 10 : Create a div(productCart) and add a button add to cart 
            const productCartDiv = document.createElement("div");
            productCartDiv.classList.add("productCart");

            const cartBtn = document.createElement("button");
            cartBtn.classList.add("addToCart");

            const iFraTag = document.createElement("i");
            iFraTag.classList.add("fa-solid");
            iFraTag.classList.add("fa-cart-shopping");
            cartBtn.appendChild(iFraTag);
            cartBtn.append(' Add To Cart');
            productCartDiv.appendChild(cartBtn);
            
            mainDiv.appendChild(productCartDiv); 

            //* Last Step :- 
            productContainer.appendChild(mainDiv);


            //todo -> Adding a click functionality to our div
            const quantitySet = document.querySelector(".quantitySetter");
            quantitySet.addEventListener('click', (event) => {
                homeQuantityToggle(event, currPro.id, currPro.stock);
            })
        })
    }
}