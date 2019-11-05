document.addEventListener("DOMContentLoaded", function () {
  function addEventModalOpen(modal, btnOpen, cb) {
    btnOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      cb && cb();
    });
  }

  function addEventModalClose(modal, btnClose) {
    btnClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    })
  }

  //modal map
  var openMapBtn = document.querySelector(".js-open-map");
  var popupMap = document.querySelector(".js-popup-map");
  var popupMapClose = document.querySelector(".js-popup-map .js-popup-close");

  if (popupMap) {
    addEventModalOpen(popupMap, openMapBtn);
    addEventModalClose(popupMap, popupMapClose);
  }

  //modal write-us
  var openWriteUsBtn = document.querySelector(".js-open-write-us");
  var popupWriteUs = document.querySelector(".js-popup-write-us");
  var popupWriteUsClose = document.querySelector(".js-popup-write-us .js-popup-close");

  if (popupWriteUs) {
    var inputName = document.querySelector("#your-name");

    addEventModalOpen(popupWriteUs, openWriteUsBtn, function () {
      inputName.focus();
    });
    addEventModalClose(popupWriteUs, popupWriteUsClose);
  }

  //modal add to cart
  var openAddCartBtns = document.querySelectorAll(".js-open-add-cart");
  var popupAddCart = document.querySelector(".js-popup-add-cart");
  var popupAddCartClose = document.querySelectorAll(".js-popup-add-cart .js-popup-close");

  if (popupAddCart) {
    for (var j = 0; j < popupAddCartClose.length; j++) {
      addEventModalClose(popupAddCart, popupAddCartClose[j]);
    }

    for (var i = 0; i < openAddCartBtns.length; i++) {
      addEventModalOpen(popupAddCart, openAddCartBtns[i])
    }
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      popupMap && popupMap.classList.remove("modal--show");
      popupAddCart && popupAddCart.classList.remove("modal--show");
      popupWriteUs && popupWriteUs.classList.remove("modal--show");
    }
  });
});
