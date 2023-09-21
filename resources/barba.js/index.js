function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    anime.timeline()
        .add({
            targets: '.loading-screen',
            duration: 1200,
            width: '100%',
            left: '0%',
            easing: "easeInOutExpo"
        }).add({
            targets: '.loading-screen',
            duration: 1000,
            width: '100%',
            left: '100%',
            easing: 'easeInOutExpo',
            delay: 300
        }).add({
            targets: '.loading-screen',
            left: '-100%',
            easing: 'steps(1)'
        })
    }

$(function () {
    barba.init({
        sync: true,
        transitions: [
            {
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                }
            }
        ]
    });
});

function runAnimeAnimation() {
    // Define your Anime.js animation here
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