// Seleccionamos el botón
const toggleBtn = document.getElementById('theme-toggle');

// Función para alternar el tema
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');

  const isDark = html.classList.contains('dark');
  updateButton(isDark);

  // Guardamos preferencia en localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Función para actualizar el aspecto del botón
function updateButton(isDark) {
  if (isDark) {
    toggleBtn.textContent = '☀️';
    toggleBtn.className =
      'fixed bottom-4 right-4 bg-white text-gray-900 text-sm px-3 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors duration-500';
  } else {
    toggleBtn.textContent = '🌙'; 
    toggleBtn.className =
      'fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow hover:bg-gray-700 transition-colors duration-500';
  }
}

// Detectamos clics en el botón
toggleBtn.addEventListener('click', toggleTheme);

// Al cargar, aplicamos la preferencia guardada
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Prioridad: localStorage → preferencia del SO → claro por defecto
  const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  document.documentElement.classList.toggle('dark', useDark);
  updateButton(useDark);
});
