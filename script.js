let btnJoin = document.getElementById('btnJoin');
let blockJoin = document.getElementById('block-form');

btnJoin.addEventListener('click', () =>{
    blockJoin.scrollIntoView({ block: "center", behavior: "smooth" });
})