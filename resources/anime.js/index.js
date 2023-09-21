anime({
    targets: '#foreground h2',
    translateX: ['-100vw', '0'],
    duration: 2000,
    delay: 3300,
    easing: 'spring(1, 80, 15, 0)'
})
anime({
    targets: '#foreground h3',
    translateX: ['100vw', '0'],
    duration: 2000,
    delay: 3300,
    easing: 'spring(1, 80, 15, 0)'
})
anime({
    targets: '#foreground hr',
    width: ['0px', '100px'],
    opacity: ['0', '1'],
    easing: 'spring(1, 80, 10, 0)',
    duration: 2000,
    delay: 3500,
    complete: function() {
        anime({
            targets: '#foreground hr',
            width: ['100px', '150px'],
            direction: 'alternate',
            delay: 5000,
            loop: true
        });
    }
});
document.getElementById('intro').style.transform = 'translate(-50%, -50%)';

// Adjust the scale value for mobile
if (window.innerWidth < 768) {
    anime({
        targets: '#intro',
        scale: ['0', '120%'], 
        rotateX: `${Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)}deg`, 
        rotateY: `${Math.floor(Math.random() * (25 - (-25) + 1)) + (-25)}deg`,
        rotateZ: `${Math.floor(Math.random() * (25 - (-25) + 1)) + (-25)}deg`,
        duration: 1500,
        delay: 500,
        direction: 'alternate'
    });
} else {
    anime({
        targets: '#intro',
        scale: ['0', '280%'],
        rotateX: `${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}deg`, 
        rotateY: `${Math.floor(Math.random() * (50 - (-50) + 1)) + (-50)}deg`,
        rotateZ: `${Math.floor(Math.random() * (50 - (-50) + 1)) + (-50)}deg`,
        duration: 1500,
        delay: 500,
        direction: 'alternate'
    });
}

anime({
    targets: '.button button',
    translateY: ['350vh', '0px'],
    opacity: ['0%','100%'],
    rotateX: ['35', '0'],
    rotateY: ['50', '0'],
    rotateZ: ['-35', '0'],
    delay: '3500',
    easing: 'spring(1, 80, 10, 0)'
})



