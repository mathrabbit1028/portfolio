const birthDate = new Date('2007-10-28');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();

if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

document.getElementById("age").innerText = `만 ${age}세`;
console.log(age)

// ======================================================================== //

let currentIndex = 0;
const slideContainer = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
    if (index < 0) index = index + totalSlides;
    if (index >= totalSlides) index = index % totalSlides;
    currentIndex = index;
    slideContainer.style.transform = `translateX(-${100 * index}vw)`;
}
function prevSlide() { showSlide(currentIndex - 1); }
function nextSlide() { showSlide(currentIndex + 1); }

// ======================================================================== //

const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");
let photoIndex = 0;

gallery.addEventListener("click", () => {
    images[photoIndex].classList.remove("active");
    photoIndex = (photoIndex + 1) % images.length;
    images[photoIndex].classList.add("active");
});

// ======================================================================== //

const synth = new Tone.Synth().toDestination();
const whitepianoKeys = document.querySelectorAll('.white-key');
const blackpianoKeys = document.querySelectorAll('.black-key');
let currentNote = null;

whitepianoKeys.forEach(key => {
  key.addEventListener('mousedown', async () => {
    await Tone.start();
    const note = key.dataset.note;
    synth.triggerAttack(note);
    currentNote = note;
  });

  key.addEventListener('mouseup', () => {
    if (currentNote) {
      synth.triggerRelease();
      currentNote = null;
    }
  });

  key.addEventListener('mouseleave', () => {
    if (currentNote) {
      synth.triggerRelease();
      currentNote = null;
    }
  });
});
blackpianoKeys.forEach(key => {
  key.addEventListener('mousedown', async () => {
    await Tone.start();
    const note = key.dataset.note;
    synth.triggerAttack(note);
    currentNote = note;
  });

  key.addEventListener('mouseup', () => {
    if (currentNote) {
      synth.triggerRelease();
      currentNote = null;
    }
  });

  key.addEventListener('mouseleave', () => {
    if (currentNote) {
      synth.triggerRelease();
      currentNote = null;
    }
  });
});