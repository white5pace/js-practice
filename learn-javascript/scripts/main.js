let taskAnchors = document.querySelectorAll('.task__anchor');

for (let anchors of taskAnchors) {
  anchors.addEventListener('mouseover', function() {
    let linkIcon = document.createElement('i');
    linkIcon.classList.add('fas');
    linkIcon.classList.add('fa-link');
    linkIcon.classList.add('anchorIcon');
    this.prepend(linkIcon);
  });
  anchors.addEventListener('mouseout', function() {
    this.querySelector('.anchorIcon').remove();
  });
}
