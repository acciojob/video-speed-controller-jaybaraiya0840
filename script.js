const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const speedSlider = document.querySelector('input[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('.skip');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause Toggle
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Update Volume
function updateVolume() {
  video.volume = this.value;
}
volumeSlider.addEventListener('input', updateVolume);

// Update Playback Speed
function updateSpeed() {
  video.playbackRate = this.value;
}
speedSlider.addEventListener('input', updateSpeed);

// Skip Forward/Backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
skipButtons.forEach(button => button.addEventListener('click', skip));

// Update Progress Bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}
video.addEventListener('timeupdate', updateProgress);

// Scrub Through Video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
progress.addEventListener('click', scrub);
