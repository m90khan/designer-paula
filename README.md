### Sergio De Mallo---Website

<br />
<p align="center">
  <a href="https://m90khan.github.io/designer-paula/">
    <img src="Sergio-Cover.jpg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Sergio De Mallo---Website  </h3>

  <p align="center">
Designer Portfolio <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://m90khan.github.io/designer-paula/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snipet](#code)
- [Contact](#Contact)

---

### About the Project

- It is an designer portfolio from design to development.

Live: https://m90khan.github.io/designer-paula/
Layout: Flexbox (BEM Model)
Duration: 14 hrs - 2 days split
<img src="Sergio-Cover.jpg">
<img src="sergio.gif">

#### Process

- Due to project size besides other constraints. I proceeded with the design after initial requirements.
- I look for inspiration on various sites and narrow down two from which I begin design.
- I built two test cases and proceeded with a dark version for implementation

# Development

- Setup project with webpack
- Implementation of HTML structure, divide the structure into components
- Applied component-based styling
- Implementation animations
- Test and deployment

<img src="overview.jpg">

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://www.w3schools.com/whatis/img_js.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://greensock.com/uploads/set_resources_4/84c1e40ea0e759e3f1505eb1788ddf3c_greensock-logo.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```javascript
function playAudio(e) {
  e.preventDefault();
  if (!playBtn.classList.contains('active')) {
    playBtn.classList.add('active');
    play.play();
    playBtn.innerText = 'Stop';
    gsap.set([heading, '.heading'], {
      duration: 2,
      webkitTextFillColor: '#21bdb4',
      stagger: 1,
    });
  } else {
    playBtn.classList.remove('active');
    playBtn.innerText = 'Play';
    play.currentTime = 0;
    gsap.set([heading, '.heading'], {
      duration: 2,
      webkitTextFillColor: 'transparent',
      stagger: 1,
    });
    play.pause();
  }
}
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
