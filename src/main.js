gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

if (window.innerWidth > 991) {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,
    effects: true,         
  });
}

let isShortHeight = window.screen.height < 1050;    

ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {

    gsap.to('#halan', {
      scrollTrigger: {
        trigger: '#section2',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '85vh',
      x: '18vw',
      width: '32vw',
      rotate: 90,
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.to('#halan', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
      y: '218vh',
      x: '0',
      width: '35vw',
      rotate: 35,
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.to('#halan', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '308vh',
      width: '42vw',
      rotate: 0,
      ease: 'power1.inOut',
      immediateRender: false
    });

     gsap.to('#halan', {
      scrollTrigger: {
        trigger: '#section5',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
      y: isShortHeight ? '360vh' : '344vh',
      width: '28vw',
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.to('#halan', {
      scrollTrigger: {
        trigger: '#section5',
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: true,
      },
      y: isShortHeight ? '432vh' : '419vh',
      width: '300px',
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.from('#section2 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section2',
        start: '-50% bottom',
        end: 'center center',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section3 .heading', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section4 img', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: 'power1.inOut',
    });

    gsap.from('#section6 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section6',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '40%',
      duration: 2,
      ease: 'power1.inOut',
    });

    let split = SplitText.create('#section1 .heading', {
      type: 'chars, words, lines',
      mask: 'lines'
    });

    gsap.from(split.chars, {
      yPercent: ()=> gsap.utils.random(-100, 100),
      rotation: ()=> gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: 'back.out(1.5)',
      stagger: {
        amount: 0.5,
        from: 'random'
      },
      duration: 1.5
    });

    gsap.from('#halan', {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'power1.inOut'
    })

  },
  
  // Mobile animations
  "(max-width: 990px)": function () {
    
    // Simple fade-in animations for mobile
    gsap.from('#section2 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section2',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.feature-box', {
      scrollTrigger: {
        trigger: '.feature-wrapper',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    gsap.from('#section3 .heading', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('#section4 img', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    gsap.from('#section5 .product', {
      scrollTrigger: {
        trigger: '#section5',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    gsap.from('#section6 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section6',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Hero text animation for mobile
    gsap.from('#section1 .heading', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });

    gsap.from('#halan', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1,
      ease: 'power2.out'
    });

  }
})

