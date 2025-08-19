let btnInit = document.getElementById('navbar-bars');

btnInit.addEventListener('click',() => {
  
  const sideBar = document.querySelector('.conteiner-sidebar');
  
  sideBar.classList.contains('sideBarAtiva') 
   
   //se conter,remove
   ? sideBar.classList.remove('sideBarAtiva')
   
   //se não,add 
   : sideBar.classList.add('sideBarAtiva')
  
});

//reduzir a largura máxima dos parágrafos usando js,ao ativar o hover 