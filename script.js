function makePhrases() {
    var words1 = ["24/7", "Multi-Tier", "30,000 Foot", "B-to-B", "Win-Win"];
    var words2 = ["Empowered", "Value-Sdded", "Oriented", "Focused", "Aligned"];
    var words3 = ["Process", "Solution", "Tipping-Point", "Strategy", "Vision"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    // alert(phrase);
    let header = document.querySelector('h1');
    header.textContent = phrase;
    body.append(header);
  }
  makePhrases();
  