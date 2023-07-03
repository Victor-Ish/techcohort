//Creating a navbar toggler
const nav = document.querySelector('.btn-warning')
var navHeader = document.querySelector('.primary__wrapper ul')

function showMenu(){
    if (nav.hasAttribute('id')){
        var nodeEle = document.createTextNode('hello')
        var node = document.createElement('li')
        node.appendChild(nodeEle)
        navHeader.append(node)
        navHeader.classList.add('center')
    }
    
}

nav.addEventListener('click', showMenu)

const removeEle = document.querySelector('.btn-success')

function removeMenu(){
    var selectEle = navHeader.childNodes
    selectEle.forEach(item => {
        item.remove()
    });
}
removeEle.addEventListener('click', removeMenu)

const selectId = document.getElementsByClassName('card__item')
Array.from(selectId).forEach(function (idItem){
  var identity = idItem.hasChildNodes()
  console.log(identity)
})



var formInput = document.querySelectorAll('input').value

console.log(formInput.nodeName);


if (formInput === null || ' '){
    var msg = document.getElementsByClassName('info')
    msg.innerHTMl = '<strong>Please your info could not be validated, try again later</strong>';
    msg.classList.add(error);

}


var formSelect = formInput.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('click');
}
)

var inputCount = document.getElementsByTagName('input')[0];
 var jaxId = inputCount.value.length;
jaxId.addEventListener('submit', jax);

function jax(){ 
    return jaxId;
}
