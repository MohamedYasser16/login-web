var productNameInput = document.getElementById("Productname");
var productPriceInput = document.getElementById("ProductPrice");
var productCategoryInput = document.getElementById("Productcategory");
var productDescriptionInput = document.getElementById("Productdescription");
var productPhotesInput = document.getElementById("Productphotos");
var rowItem = document.getElementById("row");
var addButton = document.getElementById("addButton");
var searchInput = document.getElementById("searchInput");
// console.log(productNameInput,productPriceInput,productCategoryInput,productDescriptionInput);

var upIndex;
var num = 0;
var str = ``;

var containerProduct = [];

if (localStorage.getItem("product")) {
  containerProduct = JSON.parse(localStorage.getItem("product"));
  showProduct();
}



function addproduct() {
  if (num == 1) {
    // update data ;

    containerProduct[upIndex].pname = productNameInput.value;
    containerProduct[upIndex].pPrice = productPriceInput.value;
    containerProduct[upIndex].pCategory = productCategoryInput.value;
    containerProduct[upIndex].pDesc = productDescriptionInput.value;
    containerProduct[upIndex].pPhoto =  productPhotesInput.value ;

    change_2();

    console.log(containerProduct[upIndex]);
  } else {
    var product = {
      pname: productNameInput.value,
      pPrice: productPriceInput.value,
      pCategory: productCategoryInput.value,
      pDesc: productDescriptionInput.value,
      pPhoto: productPhotesInput.value,
    };
    containerProduct.push(product);
  }
  localStorage.setItem("product", JSON.stringify(containerProduct));
  console.log(containerProduct);
  showProduct();
  clearInput();
}



showProduct()


function showProduct() {
  str = ``;

  for (var i = 0; i < containerProduct.length; i++) {

   var imgname = containerProduct[i].pPhoto.split("\\") ;
   console.log(imgname[imgname.length-1]);
   
    str += `<div class="col-sm-4 col-md-3 p-3">
<div class="item border border-1 border-black rounded rounded-2 p-3">
 <img class="w-100 mb-3" src="img/${imgname[imgname.length-1]}" alt="product img">
<p class="h5 "> name : <br> <span class="h6 text-secondary">${containerProduct[i].pname}</span> </p>
<p class="h5 "> price : <br><span class="h6 text-secondary"> ${containerProduct[i].pPrice} .LE</span>  </p>
<p class="h5 "> category : <br><span class="h6 text-secondary"> ${containerProduct[i].pCategory}</span>  </p>
<p class="h5 "> desription :<br> <span class="h6 text-secondary"> ${containerProduct[i].pDesc}</span>  </p>

<button type="button" onclick="deleteItem(${i})" class="btn btn-outline-warning w-100 my-2 "> delete <i class="fa-solid fa-trash-can"></i> </button>
<button type="button" onclick="takeItem(${i})" class="btn btn-outline-success w-100 my-2 "> update <i class="fa-regular fa-pen-to-square"></i> </button>

</div>
</div> `;
  }

  rowItem.innerHTML = str;
}


// function showProduct() {
//   str += `<div class="col-sm-4 col-md-3 p-3">
// <div class=" border border-1 border-black rounded rounded-2 p-3">
// <img class="w-100 mb-2" src="imges/R.jpg" alt="product img">
// <p class="h5 "> name : <span class="h6 text-secondary">${productNameInput.value}</span> </p>
// <p class="h5 "> price : <span class="h6 text-secondary"> ${productPriceInput.value}</span>  </p>
// <p class="h5 "> category : <span class="h6 text-secondary"> ${productCategoryInput.value}</span>  </p>
// <p class="h5 "> desription : <span class="h6 text-secondary"> ${productDescriptionInput.value}</span>  </p>
// <button type="button" onclick="deleteItem(${i})" class="btn btn-outline-warning w-100 my-2 "> delete <i class="fa-solid fa-trash-can"></i> </button>
// <button type="button" class="btn btn-outline-success w-100 my-2 "> update <i class="fa-regular fa-pen-to-square"></i> </button>
// </div>
// </div> `;
// rowItem.innerHTML=str ;
// }

function clearInput() {
  productNameInput.value = null;
  productPriceInput.value = null;
  productCategoryInput.value = null;
  productDescriptionInput.value = null;
  productPhotesInput.value = null;
}

function deleteItem(del) {
  containerProduct.splice(del, 1);
  console.log(containerProduct);

  localStorage.setItem("product", JSON.stringify(containerProduct));
  showProduct();
}

function change() {
  addButton.innerHTML = "update value";
  num = 1;
}
function change_2() {
  addButton.innerHTML = "add product";
  num = 0;
}

function takeItem(up) {
  upIndex = up;
  change();
  productNameInput.value = containerProduct[up].pname;
  productPriceInput.value = containerProduct[up].pPrice;
  productCategoryInput.value = containerProduct[up].pCategory;
  productDescriptionInput.value = containerProduct[up].pDesc;
  // productPhotesInput.value = containerProduct[up].pPhoto;
}


// searchInput

function searchinput() {
 
 var str2 = `` ; 
for ( var o = 0 ; o < containerProduct.length ; o++ ) {
// console.log(searchInput.value.toLowerCase()  , containerProduct[o].pname.toLowerCase() );
var imgname = containerProduct[o].pPhoto.split("\\") ;
   console.log(imgname[imgname.length-1]);
  if ( containerProduct[o].pname.toLowerCase().includes( searchInput.value.toLowerCase() ) )
      {
        str2 += `<div class=" col-sm-4 col-md-3 p-3">
<div class="item  border border-1 border-black rounded rounded-2 p-3">
 <img class="w-100 mb-3" src="img/${imgname[imgname.length-1]}" alt="product img">
<p class="h5 "> name : <br><span class="h6 text-secondary">${containerProduct[o].pname}</span> </p>
<p class="h5 "> price :<br> <span class="h6 text-secondary"> ${containerProduct[o].pPrice}</span>  </p>
<p class="h5 "> category :<br> <span class="h6 text-secondary"> ${containerProduct[o].pCategory}</span>  </p>
<p class="h5 "> desription :<br> <span class="h6 text-secondary"> ${containerProduct[o].pDesc}</span>  </p>
<button type="button" onclick="deleteItem(${o})" class="btn btn-outline-warning w-100 my-2 "> delete <i class="fa-solid fa-trash-can"></i> </button>
<button type="button" onclick="takeItem(${o})" class="btn btn-outline-success w-100 my-2 "> update <i class="fa-regular fa-pen-to-square"></i> </button>
</div>
</div>`
      }

}

rowItem.innerHTML=str2;

}
