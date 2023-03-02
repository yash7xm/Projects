const s = document.querySelector(".input-text");
const btn = document.querySelector(".input-btn");
const list = document.querySelector(".res");

btn.addEventListener('click',create);


function create(event){
    event.preventDefault();
    list.innerHTML = "";
    const str=s.value;
    Permutaions(str,"");
    const line = document.createElement('hr');
    list.appendChild(line);
    Combinations(str,"");
    s.value="";
}

function generate(event){
    const permudiv = document.createElement('div');
    permudiv.classList.add('permu-div');
    const item = document.createElement('li');
    item.classList.add('item-list');
    item.innerText = event;
    permudiv.appendChild(item);
    list.appendChild(permudiv);
}

function Combinations(event,p){
    if(event.length==0){
        generate(p);
        return;
    }
    Combinations(event.substring(1),p.concat(event[0]));
    Combinations(event.substring(1),p);
}

function Permutaions(event,p){
    if(event.length==0){
        generate(p);
        return;
    }
    for(let i=0; i<event.length; i++){
        let left=event.substring(0,i);
        let right=event.substring(i+1);
        Permutaions(left.concat(right),p.concat(event[i]));
    }
}
