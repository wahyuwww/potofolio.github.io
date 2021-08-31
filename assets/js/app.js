function popUpModal() {
  $(".pop-up-box").removeClass("d-none");
}

function closePopUp() {
  $(".pop-up-box").addClass("d-none");
}

function copyLink() {
  const urlLink = document.getElementById("link-url");

  urlLink.select();
  urlLink.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
