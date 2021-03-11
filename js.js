let a = [1, 2, 3,[21,22,6], 8, 24, [6, 7, 9, 12], 15];
let body = document.querySelector('body');




function createList(arr) {
    let ul = document.createElement('ul');
   for(let i = 0; i < arr.length; i++){
      
       let li = document.createElement('li');
       li.innerText = `${arr[i]}`;
       ul.appendChild(li);
       if(Array.isArray(arr[i])){
           li.innerText ="";
           li.appendChild(createList(arr[i]));
       }

   }
   return ul;  
}



 body.appendChild(createList(a));

