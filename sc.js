window.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  let currentProjectIndex = 0;
  let currentImageIndex = 0;
  let slideshowInterval;

  function showImage(projectIndex, imageIndex) {
    const project = projects[projectIndex];
    const images = project.querySelectorAll(".image");
    const dots = project.querySelectorAll(".dot");

    images.forEach((image) => image.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    images[imageIndex].classList.add("active");
    dots[imageIndex].classList.add("active");
  }

  function nextImage() {
    const currentProject = projects[currentProjectIndex];
    const images = currentProject.querySelectorAll(".image");
    const totalImages = images.length;

    if (currentImageIndex === totalImages - 1) {
      // Move to the next project if it's the last image of the current project
      currentProjectIndex = (currentProjectIndex + 1) % projects.length;
      currentImageIndex = 0;
    } else {
      // Move to the next image within the current project
      currentImageIndex++;
    }

    showImage(currentProjectIndex, currentImageIndex);
  }

  function preloadImages() {
    projects.forEach((project) => {
      const images = project.querySelectorAll(".image");
      images.forEach((image) => {
        const src = image.getAttribute("src");
        new Image().src = src;
      });
    });
  }

  function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 3000); // Change slide every 3 seconds
  }

  preloadImages();
  showImage(currentProjectIndex, currentImageIndex);
  startSlideshow();
});
