if ($('.datepicker').length) {
  $('.datepicker').datepicker({
    language: "es",
    format: "dd/mm/yyyy",
    autoclose: true
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})