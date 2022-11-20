const productDetails = document.getElementById('productDetails')
const addToCartBtn = document.getElementById('productDetails')
const goToCartBtn = document.getElementById('productDetails')


function loadProductDetails(){
    const productid = window.location.search.split('=')[1];

    fetch(BASE_URL+`/products/${productid}`)
    .then(response=>response.json())
    .then(data=>renderProductdetails(data))
}

function renderProductdetails(data){
    const productDetailsHtml = '<div class="product-name">'+data.name+'</div>'
    +'<div class="product-price fw-bold"> &#8377; '+data.cost+'</div>'
    +'<div class="product-description">'
    +'<div class="product-description-title fw-bold ">Description</div>'
    +'<div class="product-description-data">'+data.description + '</div>'
    +'</div';

    productDetails.innerHTML = productDetailsHtml;
}

loadProductDetails();