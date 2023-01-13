export default {
    css : [
        "@/assets/css/index.scss"
    ],
    modules: [
        '@nuxtjs/color-mode', 
      
    ],
    gsap: {
        extraPlugins: {
        scrollTo: true,
        scrollTrigger: true,
        vue: true,
        plugins: [
          'ScrollTrigger'
        ]
    },
        extraEases: {
        expoScaleEase: true
        }
    },
  }