function insertNews() {
  if (window.location.pathname === '/') {
    document.getElementById('news-header').innerHTML = "Ich bin eine eingefügte Überschrift";
    document.getElementById('news-p').innerHTML = "Ich bin ein eingefügter Paragraph"
  }
};

export { insertNews };