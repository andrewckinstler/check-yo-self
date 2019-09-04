document.querySelectorAll('.form').forEach(function(form) {
  form.addEventListener('keyup', disableClear);
});


function disableClear() {
  if (document.querySelector('.title') === '' || document.querySelector('.item') === '') {
    document.querySelector('.clear').disabled = true;
  };
};
