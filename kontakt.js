var kontaktOmotac = document.querySelector('.animatedKontaktText');
kontaktOmotac.innerHTML = kontaktOmotac.textContent.replace(/\S/g, "<span class='slova'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animatedKontaktText .slova',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animatedKontaktText .slova',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });