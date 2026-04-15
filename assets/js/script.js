const links = document.querySelectorAll('.navbar ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.remove('active');
  });
});
function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('active');
}
