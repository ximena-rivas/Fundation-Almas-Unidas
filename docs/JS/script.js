// Permitir sonido en el video al hacer interacción
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    document.addEventListener('click', () => {
      heroVideo.muted = false;
      heroVideo.play();
    });
  };
