function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const skill = document.querySelector(`.skill[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  skill.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const skills = document.querySelectorAll('.skill');

window.addEventListener('keydown', e => {
	playSound(e.keyCode);
});

skills.forEach(skill => skill.addEventListener('click', () => {
	playSound(skill.getAttribute('data-key'));
}));

skills.forEach(skill => skill.addEventListener('transitionend', removeTransition));
