import axios from 'axios';

export default function submitForm () {
    let nameInputValue = document.getElementById('userNameInput').value;
    let passwordInputValue = document.getElementById('userPasswordInput').value;
    if (passwordInputValue == ''  || nameInputValue == '') {
        alert ('please fill all the fields');
    } else {
        return axios.post('https://zwzt-zadanie.netlify.app/api/login', {
            username: nameInputValue,
            password: passwordInputValue,
        })
    }
}
