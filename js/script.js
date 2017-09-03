AOS.init();

$(window).on('load', function() {
  AOS.refresh();
});

particlesJS.load('particles-js', 'js/particles.js-master/demo/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
