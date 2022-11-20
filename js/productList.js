

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

    let URI = '/product';

    if(data.id){
        URI = `/categories/${data.id}/products`
    }

    fetch(BASE_URL+URI)
    .then(response=>response.json)
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

}

loadCategories();
loadProducts();