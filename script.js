const form = document.getElementById('formNum');
const n1 = document.getElementById('num-A');
const n2 = document.getElementById('num-B');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const a = document.getElementById('num-A').value;
    const b = document.getElementById('num-B').value;

    const aInt = parseInt(a);
    const bInt = parseInt(b);

    const messageSuccess = `B é maior que A`;
    const messageErro = `B é menor que A`;
    const messageEqual = `Os valores são iguais`;

    if(aInt > bInt){
        document.querySelector('.menssagem').innerHTML = messageErro;
        document.querySelector('.menssagem').style.display = 'block';
        n1.value = ' ';
        n2.value = ' ';
    }else if (aInt < bInt){
        document.querySelector('.menssagem').innerHTML = messageSuccess;
        document.querySelector('.menssagem').style.display = 'block';
        document.querySelector('.menssagem').style.backgroundColor = 'green'; 
        n1.value = ' ';
        n2.value = ' ';
    }else {
        document.querySelector('.menssagem').innerHTML = messageEqual;
        document.querySelector('.menssagem').style.display = 'block';
        document.querySelector('.menssagem').style.backgroundColor = 'orange';
        n1.value = ' ';
        n2.value = ' ';
    }

});



