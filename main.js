(function(){
  var list = document.querySelector('ul'),
  form = document.querySelector('form'),
  item = document.querySelector('#myInput'),
  all = document.querySelector('#all'),
  completed = document.querySelector('#completed'),
  notCompleted = document.querySelector('#notCompleted'),
  deleteAll = document.querySelector('#deleteAll')
  ;


  
//button filter
all.addEventListener('click', () =>{
  getValues();
});

completed.addEventListener('click', () =>{
  const arr = Array.from(list.children)
  for (i = 0; i < list.childElementCount; i++) {
    if (arr[i].classList.contains('checked')) {
      arr[i].style.display = "";
    } else {
      arr[i].style.display = "none";
    }
  }
});

notCompleted.addEventListener('click', () =>{
  const arr = Array.from(list.children)
  for (i = 0; i < list.childElementCount; i++) {
    if (!arr[i].classList.contains('checked')) {
      arr[i].style.display = "";
    } else {
      arr[i].style.display = "none";
    }
  }
});

deleteAll.addEventListener('click', () =>{
  const arr = Array.from(list.children);
  for (i = 0; i < list.childElementCount+1; i++) {
    if (arr[i].classList.contains('checked')){
      console.log(arr[i])
      arr[i].parentNode.removeChild(arr[i])
    }
  }
  store()
});

list.addEventListener('click', function(ev) {
  var t = ev.target;
    if(!t.classList.contains('checked')){
      t.classList.add('checked');
    }else{
      t.classList.remove('checked')
    }
    store();
}, false);

list.addEventListener('click',(ev)=>{
  const t = ev.target;
  if(t.classList.contains('cross')){
    t.parentNode.remove(t);
    store();
  }
})

form.addEventListener('submit',function(ev){
  if (!item.value) {
      alert("You must write something!");
      return;
  } else 
  ev.preventDefault();
  list.innerHTML += '<li>' + item.value + '<button  class="cross">X</button></li>';
  store();
  item.value = "";
},false)

function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
    list.innerHTML = '<li>Make a to do list <button class="cross">X</button></li>'
  }
  else {
    list.innerHTML = storedValues;
  }
}
getValues();
})();