

const categoryList = document.getElementById('categoryList')
const productList = document.getElementById('productList')
const searchInput = document.getElementById('searchInput')

const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
const clear = document.getElementById('clear')

let query = ''

function loadCategories(){
    fetch(BASE_URL+'/categories')
    .then(response=>response.json())
    .then((data)=>{
        renderCategories(data)
    }).catch(error=>console.log(error));
}

function loadProducts(){
    const data = {}

    if(window.location.search){
        data.id = window.location.search.split("=")[1];
    }

    let URI = '/products';

    if(data.id){
        URI = `/categories/${data.id}/products`
    }

    fetch(BASE_URL+URI)
    .then(response=>response.json())
    .then(data=>renderProducts(data))
    .catch((err)=>console.log(err));
}


function renderCategories(categories){
    let categoryListHtml = '';
    for(i=0; i<categories.length; i++){
        categoryListHtml += '<a class=d-flex text-decoration-none href=productList.html?categoryId='+ categories[i].id+
                            '">' + categories[i].name + '<a>';
    }

    categoryList.innerHTML = categoryListHtml;

}

function renderProducts(products){
    let productListHtml = '';
    for(i=0; i<products.length; i++){
        productListHtml += '<a class="product-item text-decoration-none display-inline-block" href="productDetails.html?productId='+ products[i].id+'">'+
        '<div class="product-img" >'+
        '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyo9nJzFOjaljGsUvoAUOy1ZoolUywgb4wGlI_XflUvVAJVsfRHGsy6k2Lp7NjXuDgZJI&usqp=CAU" >'+
        '</div>'
        +'<div class="product-name text-center" >'+ products[i].name+'</div>'
        +'<div class="product-price text-center">&#8377; '+products[i].cost+'</div>'
        +'</a>';
                            
    }

    productList.innerHTML = productListHtml;
}

loadCategories();
loadProducts();



//events

searchInput.addEventListener('keyup',searchproduct)
minPrice.addEventListener('change',searchproduct)
maxPrice.addEventListener('change',searchproduct)
clear.addEventListener('click',clearAllFilters)


//function
function clearAllFilters(){
    window.location.reload();
}

function searchproduct(){
    const data = {
        name: searchInput.value,
        minCost: minPrice.value,
        maxCost: maxPrice.value
    }

    if(window.location.search){
        data.id = window.location.search.split("=")[1];
    }

    let URI = '/products?';
    fetch(BASE_URL + URI + new URLSearchParams(data))
    .then(response=>response.json())
    .then(data=>renderProducts(data))
}