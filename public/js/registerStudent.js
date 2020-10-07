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

                    const data = getData()

                    postData(data)

                    $(".register-btn").html('<div class="loader"></div>').attr('disabled', true)
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())

const getData = () => {
    const givenName = $('#given-name').val()
    const surname = $('#surname').val()
    const username = $('#email').val()
    const dob = $('#dob').val()
    const phone = $('#phone').val()
    const docType = $('#doc-type').val()
    const docNum = $('#doc-num').val()
    const eduLevel = $('#edu-level').val()
    const school = $('#school').val()
    const password = $('#password').val()

    return {
        username,
        password,
        details: {
            givenName,
            surname,
            dob,
            phone,
            docType,
            docNum,
            eduLevel,
            school,
        }

    }
}

const postData = async data => {
    try {
        const res = await axios.post('/registrarse/estudiante', data);
        if (res.status == 200) {
            window.location = `${res.data.redirect}`
        }

    } catch (error) {
        console.log(error);
        $(".register-btn").html('Registrarse').attr('disabled', false)
    }

}