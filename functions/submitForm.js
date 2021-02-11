import axios from 'axios';

export default function submitForm (event) {
    let nameInputValue = document.getElementById('userNameInput').value;
    let passwordInputValue = document.getElementById('userPasswordInput').value;
   // console.log(nameInputValue);
   // console.log(passwordInputValue);
    if (passwordInputValue == ''  || nameInputValue == '') {
        alert ('please fill all the fields');
    } else {
        axios.post('https://zwzt-zadanie.netlify.app/api/login', {
            username: nameInputValue,
            password: passwordInputValue,
        })
            .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
