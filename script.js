
/*Swal.fire({
  position: 'bottom-end',
  icon: 'success',
  title: 'Mise à jour des offres',
  showConfirmButton: false,
  timer: 1500
})
*/
Swal.fire({
  imageUrl: 'https://placeholder.pics/svg/300x1500',
  imageHeight: 1500,
  imageAlt: 'A tall image'
})

/***Sweetalert2 librairie****/
function openBooking(element) {
  // Récupérer l'URL affiliée à partir de l'attribut data-affiliate-url de la balise parente
  const affiliateUrl = element.closest('#product').dataset.affiliateUrl;
  Swal.fire({
    title: 'Disponible chez notre Partner.',
    text: 'Ouvrir l\'offre dans Booking.com ?',
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(affiliateUrl, '_blank');
    }
  });
}

