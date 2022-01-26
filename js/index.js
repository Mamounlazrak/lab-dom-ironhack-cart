// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = price.innerHTML * quantity.value;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsList = document.getElementsByClassName('product');
  const total = document.querySelector('#total-value span');
  console.log(total);
  let sum = 0;
  for (let i = 0; i < productsList.length; i++) {
    sum += updateSubtotal(productsList[i]);
    // sum += productsList[i].querySelector('.subtotal span').innerHTML; NOT WORKING BECAUSE --> NB + STRING = STRING while NB * STRING = NB !!! 
    console.log(total);
  }
  total.innerHTML = sum;



  // ITERATION 3


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(target.parentNode.parentNode);
  document.querySelector('#total-value span').innerHTML -= target.parentNode.parentNode.querySelector('.subtotal span').innerHTML;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  console.log(target.parentNode);



  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let newProductName = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0];
  let newPrice = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1];
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = ` <td class="name">
  <span>${newProductName.value}</span>
</td>
<td class="price">$<span>${newPrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td> `;
newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
let parent = document.querySelector('#cart tbody');
parent.appendChild(newRow);
newProductName.value = '';
newPrice.value = 0; 

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeList = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeList.length; i++) {
    removeList[i].addEventListener('click', removeProduct);
  }

  const CreateBtn = document.getElementById('create');
  CreateBtn.addEventListener('click', createProduct);



  //... your code goes here
});
