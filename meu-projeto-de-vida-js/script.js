function changePokeImage() {
  let randomNumber = Math.ceil(Math.random() * 500);
  img = document.getElementById("poke-image");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomNumber}.svg`;

  img.style.transform = 'rotateY(360deg)'
}
