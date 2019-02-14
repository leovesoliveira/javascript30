function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const skill = document.querySelector(`.skill[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  skill.classList.add('playing');
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => skill.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
