$(".multi-item-carousel .carousel-item").each(function () {
  var next = $(this).next();
  if (!next.length) next = $(this).siblings(":first");
  next.children(":first-child").clone().appendTo($(this));
});
$(".multi-item-carousel .carousel-item").each(function () {
  var prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(":last");
  prev.children(":nth-last-child(2)").clone().prependTo($(this));
});

document.getElementById("b1").addEventListener("click", function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure you want to make this transfer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#3da614",
      cancelButtonText: "No",
      cancelButtonColor: "#d33",
      reverseButtons: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Success!",
          "Your new Balance: 250 ETH",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "Transaction cancelled");
      }
    });
});
