export default {
    css : [
        "@/assets/css/index.scss"
    ],
    modules: [
        '@nuxt/content'
      
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