const openBtn = document.getElementById('navbar-bars');

openBtn.addEventListener('click',() =>{
  
  const sideBar = document.querySelector('.conteiner-sidebar');
  
  sideBar.classList.add('sideBarAtiva')
  
  openBtn.style.display = "none";
  
  const exitBtn = document.getElementById('navbar-exit');
  
  exitBtn.classList.add('showExit');
  
  exitBtn.addEventListener('click',() =>{
    
    exitBtn.classList.remove('showExit');
    
    openBtn.style.display = "inline-block";
    
    sideBar.classList.remove('sideBarAtiva'); 
    
  }); 
  
});

window.addEventListener('resize',() => {
  
  console.log('Janela redimensionada!'); 
  
});