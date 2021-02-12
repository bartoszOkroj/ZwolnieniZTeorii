import { route } from './router';
import submitForm from "./functions/submitForm";
route ('/ex3', 'example3', function () {
  this.title = 'Example 3';
  this.counter = 0;
  this.$on('.my-button2', 'click', () => {
    this.counter += 1;
    console.log(this.counter)
  });
});

route('/', 'homePage', function() {
    this.welcome = 'Welcome :d';
    this.message = 'Please, login in';
    this.errorMessage = ''
    this.$on('.submitFormBtn', 'click', async event => {
        event.preventDefault();
        try {
            let result = await submitForm();
            if(result.status === 200) {
                location.href = '#/success';
            } else {
                throw new Error (`Http error: ${result.status}`)
            }
        } catch (error) {
            this.errorMessage = 'Oops, sth went wrong. Try again, with diffrent password'
            this.$refresh();
        }
    })
});

route ('/success', 'success', function () {
    this.success = 'Success';
    this.submitted = 'You have submitted successfully';
})

route('*', '404', function () {});
