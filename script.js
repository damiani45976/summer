window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".scroll-top").classList.add("show");
    } else {
        document.querySelector(".scroll-top").classList.remove("show");
    }
}
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const myModal = bootstrap.Modal.getInstance(document.getElementById('staticBackdropautoriz'));
myModal.hide();

//data-bs-dismiss="modal"
