(function(){
    var list = document.querySelector('ul'),
    form = document.querySelector('form'),
    item = document.querySelector('#myInput'),
    span = document.querySelector('span');;

list.addEventListener('click', function(ev) {
    var t = ev.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
}, false);

form.addEventListener('submit',function(ev){
    if (!item.value) {
        alert("You must write something!");
        return;
    } else 
    ev.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
},false)

span.addEventListener('click',function(ev){
    if (!item.value) {
        alert("You must write something!");
        return;
    } else 
    ev.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
},false)

function store() {
    window.localStorage.myitems = list.innerHTML;
}

function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Make a to do list</li>'
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();