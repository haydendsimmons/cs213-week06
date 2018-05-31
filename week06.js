function ageValidate(fieldID, errorID) {
    document.getElementById(fieldID).oninput = function () {
        var age = document.getElementById(fieldID);
        var ageVal = age.value;
        var error = document.getElementById(errorID);
        var valid = false;

        if (ageVal < 0 || ageVal > 118) {
            valid = false;
        }

        else {
            valid = true;
        }

        if (valid) {
            error.style.display = 'none';
        }
        else {
            error.style.display = 'inline';
        }
    }
}

function ssnValidate(fieldID, errorID) {
    document.getElementById(fieldID).oninput = function () {
        var ssn = document.getElementById(fieldID);
        var ssnVal = ssn.value;
        var error = document.getElementById(errorID);
        var valid = false;
        var ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;

        if (ssnPattern.test(ssnVal) == true) {
            valid = true;
        }

        else {
            valid = false;
        }

        if (valid) {
            error.style.display = 'none';
        }
        else {
            error.style.display = 'inline';
        }
    }
}

function dateValidate(fieldID, errorID)
{
    document.getElementById(fieldID).oninput = function () {
        var date = document.getElementById(fieldID);
        var dateVal = date.value;
        var error = document.getElementById(errorID);
        var valid = false;
        var datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        if (datePattern.test(dateVal) == true) {
            valid = true;
        }

        else {
            valid = false;
        }

        if (valid) {
            error.style.display = 'none';
        }
        else {
            error.style.display = 'inline';
        }
    }
}

function stateValidate(fieldID, errorID)
{
    document.getElementById(fieldID).oninput = function () {
        var state = document.getElementById(fieldID);
        var stateVal = state.value;
        var error = document.getElementById(errorID);
        var valid = false;
        var statePattern = /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/;

        if (statePattern.test(stateVal) == true) {
            valid = true;
        }

        else {
            valid = false;
        }

        if (valid) {
            error.style.display = 'none';
        }
        else {
            error.style.display = 'inline';
        }
    }
}

ageValidate('age1', 'ageError1');
ageValidate('age2', 'ageError2');
ssnValidate('ssn1', 'ssnError1');
ssnValidate('ssn2', 'ssnError2');
dateValidate('date1', 'dateError1');
dateValidate('date2', 'dateError2');
stateValidate('state1', 'stateError1');
stateValidate('state2', 'stateError2');
