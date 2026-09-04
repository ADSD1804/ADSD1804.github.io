document.addEventListener("DOMContentLoaded", function () {
  const banner = document.createElement("div");

  banner.className = "banner";
  banner.innerHTML = `
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
    </ul>
    
    <a href="https://github.com/ADSD1804" target="_blank" class="github-link">
      <img src="../assets/github-white-icon.png" alt="Github" class="logo">
    </a>

    <a href="https://www.linkedin.com/in/andres-david-soto-duque-b496a9373?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="linkedin-link">
      <img src="../assets/LinkedIn-Logo.png" alt="LinkedIn" class="logo" style="width: 80px; height: 60px;">
    </a>
  `;

  document.body.appendChild(banner);

  function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  const content = document.querySelector(".container");

  animate({
    duration: 1000,

    timing(timeFraction) {
      return timeFraction;
    },

    draw(progress) {
      content.style.opacity = progress;
      content.style.transform = `translateX(${(1 - progress) * 1000}px)`;
    },
  });
});
