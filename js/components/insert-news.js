function insertNews() {
  if (window.location.pathname === '/') {
    document.getElementById('news-header').innerHTML = "Corona- Zeiten";
    document.getElementById('news-p').innerHTML = "Ich Liebe Hundebesitzer und Hundebesitzerinnen, Liebe Kunden <br>um weiterhin die Versorgung Ihrer Tiere zu gewährleisten, bleibt meine Praxis geöffnet.<br>Bitte kontaktieren Sie mich telefonisch oder per Email, damit wir die Termine sicher und unter Beachtung der gebotenen Maßnahmen vereinbaren können.<br>Ich wünsche Ihnen starke Nerven für diese schwere Zeit<br>Bleiben Sie und Ihre Tiere gesund<br>Nina Bayer"
  }
};

export { insertNews };