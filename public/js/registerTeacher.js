let courses = 0;

(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()


          axios.post('/registrarse/docente', {
            name: "clau"
          });

          $(".register-btn").html('<div class="loader"></div>').attr('disabled', true)
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

$('#add-course').on('click', (e) => {
  e.preventDefault()
  courses++
  let courseCard = `
  <div class="card created-card">
    <div class="card-header">
      <div class="remove-button"title="Eliminar"><i class="fas fa-trash"></i></div>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="materia-${courses}">Materia</label>
                <input type="text" class="form-control" id="materia-${courses}" name="materia-${courses}" placeholder="" value="" required>
                <div class="invalid-feedback">
                    *Se requiere nombre(s) valido.
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="title-${courses}">Titulo</label>
                <input type="text" class="form-control" id="title-${courses}" name="title-${courses}" placeholder="" value="" required>
                <div class="invalid-feedback">
                    *Se requiere apellido(s) valido.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <label for="price-${courses}">Precio de Clase</label>
                <div class="input-group mb-3 class-price">
                    <div class="input-group-prepend">
                        <span class="input-group-text">S/.</span>
                    </div>
                    <input id="price-${courses}" type="text" class="form-control" aria-label="Cantidad en Soles">
                    <div class="input-group-append">
                        <span class="input-group-text">/h</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="description-${courses}">Detalle</label>
            <textarea class="form-control" id="description-${courses}" rows="4" name="details-${courses}"></textarea>
        </div>
    </div>
  </div>
  `
  $('.course-card').append(courseCard)

  $('.remove-button').on('click', (e) => {
    $(e.target).closest('.created-card')[0].remove()

  })
})