window.addEventListener("scroll",function(){var s=document.getElementById("sticky-header"),t=document.getElementById("back-top");s&&(window.scrollY<400?s.classList.remove("sticky"):s.classList.add("sticky")),t&&(window.scrollY,t.style.display="block",t.style.opacity=1)});



// Função para remover o link específico
function removeLink() {
  const link = document.querySelector('a[href*="https://elfsight.com/event-calendar-widget"]');
  if (link) {
      link.remove();
  }
}

// Monitorar mudanças no DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
          removeLink();
      }
  });
});

// Configurar o observer para monitorar o body
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Remover o link se já estiver presente no carregamento da página
document.addEventListener('DOMContentLoaded', removeLink);
