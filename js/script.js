const topo = document.querySelector("#voltar");
topo.addEventListener('click', ()=>{
    window.scroll({
        top:0,
        behavior:"smooth",
    });
});
