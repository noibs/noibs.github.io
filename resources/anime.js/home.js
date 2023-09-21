
//Title animation
/*anime({
    targets: '.title',
    scale: ['0', '100%'],
    delay: 500,
})*/

anime({
    targets: '.title',
    duration: 800,
    //*delay: function(el, index) { return 600+index*150; },
    delay: 500,
    easing: 'easeInOutQuint',
    opacity: 1,
    scaleY: [8,1],
    scaleX: [0.5,1],
    translateY: ['-100%','0%']
});

//Paragragh animation

var textWrapper = document.querySelector('.desc');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.desc .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 600,
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  function runAnime() {
    anime({
      targets: '.title',
      duration: 800,
      //*delay: function(el, index) { return 600+index*150; },
      delay: 2000,
      easing: 'easeInOutQuint',
      opacity: 1,
      scaleY: [8,1],
      scaleX: [0.5,1],
      translateY: ['-100%','0%']
  });
  
  //Paragragh animation
  
  var textWrapper = document.querySelector('.desc');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.desc .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 600,
      delay: (el, i) => 50 * (i+1)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }