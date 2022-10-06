// Navigation Component

let navigation = document.getElementById('navigation')

navigation.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navigation">
        <div class="container-fluid">
            <a class="navbar-brand mx-4" href="home.html">
                <img src="https://api.iconify.design/fa6-regular/hand-back-fist.svg?color=white&width=40" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link mx-3" aria-current="page" href="what-is-aa.html">What is AA?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="what-can-i-do.html">What can I do?</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
`