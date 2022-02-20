'use strict';

// Код валидации формы

function validateNumber(value, min, max) {
    let num = Number(value);

    if (isNaN(num)) {
        return false;
    }
    if (min && num < Number(min)) {
        return false;
    }
    if (max && num > Number(max)) {
        return false;
    }
    return true;
}

function validateRegexp(value, pattern, flags) {
    let regex = new RegExp(pattern, flags);

    return regex.test(value);
}

function validateValue(input) {
    if (input.dataset.validator === "letters") {
        return validateRegexp(input.value, "^[a-zа-яё]+$", "i");
    }
    else if (input.dataset.validator === "regexp") {
        return validateRegexp(input.value, input.dataset.validatorPattern);
    }
    else if (input.dataset.validator === "number") {
        return validateNumber(input.value, input.dataset.validatorMin, input.dataset.validatorMax);
    }
    else {
        return true;
    }
}

function checkInput(input) {
    if (input.dataset.required && !input.value) {
        return false;
    }
    // если есть валидатор, то независимо от наличия значения необходимо проверить поле
    if (input.dataset.validator && input.value) {
        return validateValue(input)
    }
    return true;
}

window.validateForm = function(params) {
    let form = document.getElementById(params.formId);
    let inputs = Array.from(
        document.querySelectorAll('#' + params.formId + " input")
    );

    form.addEventListener("blur", (event) => {
        let target = event.target;
        if (target.tagName === "INPUT" && !checkInput(target)) {
            target.classList.add(params.inputErrorClass);
        }
    }, true);

    form.addEventListener("focus", (event) => {
        let target = event.target;
        if (target.tagName === "INPUT") {
            target.classList.remove(params.inputErrorClass);
        }
    }, true);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.classList.remove(params.formInvalidClass);

        let hasError = false;
        inputs.forEach(input => {
            if (!checkInput(input)) {
                form.classList.remove(params.formValidClass);
                input.classList.add(params.inputErrorClass);
                hasError = true;
            }
        });

        hasError ? form.classList.add(params.formInvalidClass)
            : form.classList.add(params.formValidClass);
    });
}