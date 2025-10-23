/* dynamic-styles.js - demostraciones de carga dinámica de CSS */

// 1) Cambiar estilos usando element.style (propiedad style)
const jsDemo = document.getElementById('jsStyleDemo');
setTimeout(() => {
  jsDemo.style.background = 'linear-gradient(90deg,#def,#cde)';
  jsDemo.style.color = '#053';
  jsDemo.style.padding = '10px';
  jsDemo.style.borderRadius = '6px';
  jsDemo.textContent = 'Estilo aplicado mediante element.style en JS.';
}, 1000);

// 2) Cargar un <link> dinámico
function loadStylesheet(href, onLoad){
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = () => onLoad && onLoad(null, link);
  link.onerror = (e) => onLoad && onLoad(e);
  document.head.appendChild(link);
  return link;
}

document.getElementById('loadLinkBtn').addEventListener('click', () => {
  loadStylesheet('css/dynamic.css', (err) => {
    if (err) return alert('Fallo al cargar dynamic.css');
    document.getElementById('dynamic-link-demo').textContent = 'dynamic.css cargado y aplicado.';
  });
});

// 3) Fetch + inject
async function fetchAndInject(href){
  try{
    const res = await fetch(href);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const cssText = await res.text();
    const st = document.createElement('style');
    st.textContent = cssText;
    st.setAttribute('data-injected-from', href);
    document.head.appendChild(st);
    document.getElementById('fetch-inline-demo').textContent = 'CSS inyectado desde ' + href;
  }catch(e){
    alert('Error fetch CSS: ' + e.message);
  }
}

document.getElementById('fetchCssBtn').addEventListener('click', () => fetchAndInject('css/fetched.css'));

// 4) Shadow DOM example
const host = document.getElementById('shadow-host');
const shadowRoot = host.attachShadow({mode:'open'});
const shadowContainer = document.createElement('div');
shadowContainer.innerHTML = `
  <style>
    .shadow-box { background:#222; color:#fff; padding:12px; border-radius:6px }
  </style>
  <div class="shadow-box">Soy un cuadro en Shadow DOM — mis estilos están encapsulados.</div>
`;
shadowRoot.appendChild(shadowContainer);

// 5) Preload demo: show that preload was used in head by checking for link[rel='preload']
window.addEventListener('load', () => {
  const preloadLinks = Array.from(document.querySelectorAll("link[rel='preload'][as='style']"));
  // mark them visually
  preloadLinks.forEach(l => {
    const el = document.createElement('div');
    el.className = 'demo-box';
    el.style.marginTop = '8px';
    el.textContent = 'Preload usado para: ' + l.href;
    document.body.appendChild(el);
  });
});
