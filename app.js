import { route } from './router';
import submitForm from "./functions/submitForm";

/*route('/', 'home', function() {
  this.where = 'here';
});

route('/ex1', 'example1', function() {
  this.title = 'Example 1';
});

route('/ex2', 'example2', function() {
  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});
 */
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
    this.message = 'Please, enter your name, choose your password and submit';
    this.$on('.submitFormBtn', 'click', async event => {
        event.preventDefault();
        try {
            let result = await submitForm();
            console.log(result)
            location.href='/success';
        }
        catch {
            alert('wrong password');
        }
    })
});

route ('/success', 'success', function () {
    this.success = 'Success';
    this.submitted = 'You have submitted successfully';
})

route('*', '404', function () {});
