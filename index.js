// Navigation Component

let navigation = document.getElementById('navigation')

navigation.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navigation">
        <div class="container-fluid">
            <a class="navbar-brand mx-4" href="futurehero">
                <img src="https://api.iconify.design/fa6-regular/hand-back-fist.svg?color=white&width=40" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id='link1' class="nav-link me-3" aria-current="page" href="what-is-aa.html">What is AA?</a>
                        </li>
                        <li class="nav-item">
                            <a id='link2' class="nav-link" href="what-can-i-do.html">What can I do?</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex align-items-center">
                    <a class="me-3" href="https://github.com/sophiaaachow/futurehero" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a class="me-4" href="https://www.figma.com/file/MjLgRlcnahGsHDsfHey4dT/FutureHero?node-id=0%3A1" target="_blank">
                        <i class="fa-brands fa-figma"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
`

let page = document.getElementsByTagName("div")[0].id

if (page == "whatIsAA") {
    let link = document.getElementById("link1")
    link.classList.add("active")
} else if (page == "whatCanIDo") {
    let link = document.getElementById("link2")
    link.classList.add("active")
}

// Animation Function

var id = null;
function heroMove() {
  var elem = document.getElementById("heroAnimation");   
  var pos = -window.screen.availHeight;
  var speed = 3;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 0 || pos == 1) {
        sleep(2000).then(() => {  if (pos < window.screen.availHeight)
            pos += speed; 
            elem.style.bottom = pos + 'px';  
            if (pos >= window.screen.availHeight) {
                pos = -window.screen.availHeight;
            }
        });
    } else {
      pos += speed; 
      elem.style.bottom = pos + 'px'; 
    }


  }
}

// Sleep Function

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }