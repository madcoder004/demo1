function calculateFlames(name1, name2) {
    name1 = name1.toLowerCase().replace(/ /g, "");
    name2 = name2.toLowerCase().replace(/ /g, "");
    for (let i = 0; i < name1.length; i++) {
      if (name2.includes(name1[i])) {
        name1 = name1.replace(name1[i], "");
        name2 = name2.replace(name1[i], "");
        i--;
      }
    }
    const count = name1.length + name2.length;
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
    while (flames.length > 1) {
      const split = count % flames.length - 1;
      if (split >= 0) {
        flames.splice(split, 1);
      } else {
        flames.splice(flames.length - 1, 1);
      }
    }
    return flames[0];
  }
  function showResult() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const result = calculateFlames(name1, name2);
    document.getElementById("result").innerHTML = "The Flames result is: " + result;
  }
  
