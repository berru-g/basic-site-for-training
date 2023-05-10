
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

