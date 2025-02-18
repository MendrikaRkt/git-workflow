 // Accéder à la caméra de l'utilisateur
 async function startLiveVideo() {
    try {
      // Demande d'accès à la caméra et au micro
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true, // Demande uniquement la vidéo
        audio: false // Pas de capture audio dans cet exemple
      });

      // Afficher le flux vidéo dans l'élément vidéo HTML
      const videoElement = document.getElementById('videoElement');
      videoElement.srcObject = stream;
    } catch (error) {
      console.error('Erreur lors de l\'accès à la caméra:', error);
      alert('Impossible d\'accéder à la caméra.');
    }
  }

  // Lancer la vidéo en direct dès que la page est chargée
  window.onload = startLiveVideo;