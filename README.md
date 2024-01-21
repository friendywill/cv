<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
![Version][Repo-tag]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://friendysystems.com">
    <img src="img/logo.png" alt="Logo" width="80" height="80"> <!-- TODO: ADD LOGO -->
  </a>

  <h3 align="center">Friendywill's CV / Resume Website!</h3>

  <p align="center">
    My resume
    <br />
    <a href="https://friendysystems.com"><strong>Explore the website!</strong></a>
    <br />
    <br />
    |
    <a href="https://github.com/friendywill/friendlycv/issues">Report Bug</a>
    |
    <a href="https://github.com/friendywill/friendlycv/issues">Request Feature</a>
    |
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE RESUME -->
## The Resume

[![Resume Screen Shot](resume-screenshot)](https://example.com)

<!-- TODO: ADD DESCRIPTION AND SCREENSHOT -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- TODO: ADD FRAMEWORKS/LIBRARIES -->
<!-- TODO: ADD DOCKER LOGO -->

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

**Please note, I am using Windows 11, WSL and the Ubuntu image.**

### Prerequisites

* Docker `sudo apt install docker.io`
* npm "[How To](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)"

### Installation

<!-- TODO: ADD INSTALLATION INSTRUCTIONS -->

#### Docker Deploy

To deploy this website for local development, just run:

```bash
docker build -t cv-website .

docker run -p 80:3000 cv-website
```

To open this website, go to your browser and type in `localhost`.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [x] Start README
* [ ] Build Website
* [ ] Finish README
* [ ] Deploy Website

See the [open issues](https://github.com/friendywill/friendlycv/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Of course, use this project for your own resumes if you like! This project exists mostly to showcase my developments skills for potential employers.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the Creative Commons Zero v1.0 Universal. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

William Friend - [@william-friend](https://www.linkedin.com/in/william-friend/) - <william.friend@friendysystems.com>

Project Link: [https://github.com/friendywill/friendycv](https://github.com/friendywill/friendycv)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Img Shields](https://shields.io)
* [React Icons](https://react-icons.github.io/react-icons/search)
* [Best README Template](https://friendysystems.com)
* [Next.js Example with docker](https://github.com/vercel/next.js/blob/canary/examples/with-docker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/friendywill/cv.svg?style=for-the-badge
[contributors-url]: https://github.com/friendywill/cv/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/friendywill/cv.svg?style=for-the-badge
[forks-url]: https://github.com/friendywill/cv/network/members
[stars-shield]: https://img.shields.io/github/stars/friendywill/cv.svg?style=for-the-badge
[stars-url]: https://github.com/friendywill/cv/stargazers
[issues-shield]: https://img.shields.io/github/issues/friendywill/cv.svg?style=for-the-badge
[issues-url]: https://github.com/friendywill/cv/issues
[license-shield]: https://img.shields.io/github/license/friendywill/cv.svg?style=for-the-badge
[license-url]: https://github.com/friendywill/cv/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/william-friend
[resume-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://docker.com/
 <!-- TODO: ADD IMAGE -->
