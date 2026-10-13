// Issue #6 · Modo oscuro.
// Usa la preferencia guardada o, si no hay, la del sistema operativo.

const raiz = document.documentElement;
const boton = document.getElementById('boton-tema');

function aplicarTema(tema) {
  raiz.dataset.tema = tema;
  boton.textContent = tema === 'oscuro' ? '☀️ Modo claro' : '🌙 Modo oscuro';
  boton.setAttribute('aria-pressed', tema === 'oscuro');
}

let temaGuardado = null;
try {
  temaGuardado = localStorage.getItem('tema');
} catch (e) {}

const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
aplicarTema(temaGuardado || (prefiereOscuro ? 'oscuro' : 'claro'));

boton.addEventListener('click', () => {
  const nuevoTema = raiz.dataset.tema === 'oscuro' ? 'claro' : 'oscuro';
  aplicarTema(nuevoTema);
  try {
    localStorage.setItem('tema', nuevoTema);
  } catch (e) {}
});
