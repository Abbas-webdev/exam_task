let index = 0;
  const track = document.getElementById("carousel-track");
  const card = track.children[0];
  const cardWidth = card.offsetWidth + 16; // kart eni + margin
  const totalCards = track.children.length;
  const visibleCards = 3;

  function move(step) {
    index += step;
    if (index > totalCards - visibleCards) index = 0;
    if (index < 0) index = totalCards - visibleCards;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }


  