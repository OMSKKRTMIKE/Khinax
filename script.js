function showSurprise() {
  const cakeWrapper = document.getElementById('cakeWrapper');
  cakeWrapper.style.display = 'grid';
  gsap.to('.cake-topping', {
      yPercent: 0,
      opacity: 1,
      duration: 0.3
  });
  gsap.to('.candle-container', {
      opacity: 1,
      duration: 0.3
  });
  gsap.to('.flame-wrap', {
      scale: 1,
      ease: "back.out",
      duration: 0.3
  });
  gsap.to('.greeting', {
      scale: 1,
      ease: "back.out",
      duration: 0.3
  });
  gsap.to('.star', {
      opacity: 0.5,
      stagger: 0.05,
      duration: 0.3,
      onComplete: function() {
          gsap.to('.star', {
              scale: 0.25,
              repeat: -1,
              stagger: 0.1,
              yoyo: true,
              yoyoEase: "power1.out"
          });
      }
  });

  // Show the blow button after the surprise is shown
  document.querySelector('.blow-button').style.display = 'inline-block';
}

function blowCandles() {
  gsap.to('.flame-wrap', {
      scale: 0,
      ease: "power1.out",
      duration: 0.5
  });
  gsap.to('.star', {
      opacity: 0,
      duration: 0.5
  });
}
