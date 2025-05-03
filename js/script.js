
// let footer = `
// <a href="https://github.com/RominaFrenquelli?tab=repositories/" target="_blank"><img src="img/github.png" alt="github"></a>
// <a href="https://ar.linkedin.com/" target="_blank"><img src="img/R.png" alt="linkedIn"></a>
// `

// document.getElementById("idfooter").innerHTML = footer

document.addEventListener('DOMContentLoaded', () => {
    const btnModo = document.getElementById('modoToggle');
    const icono = document.getElementById('iconoModo');
    const cuerpo = document.body;
  
    // Aplicar modo oscuro si está guardado
    if (localStorage.getItem('modo') === 'oscuro') {
      cuerpo.classList.add('dark-mode');
      icono.textContent = '🌞';
    }
  
    btnModo.addEventListener('click', () => {
      cuerpo.classList.toggle('dark-mode');
      const modoOscuro = cuerpo.classList.contains('dark-mode');
  
      icono.textContent = modoOscuro ? '🌞' : '🌙';
      localStorage.setItem('modo', modoOscuro ? 'oscuro' : 'claro');
    });
  });