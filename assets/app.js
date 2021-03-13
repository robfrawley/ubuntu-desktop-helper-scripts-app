/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// import bootstrap javascript
import 'bootstrap';

// import bootstrap custom file input javascript
import bsCustomFileInput from 'bs-custom-file-input';

// initialize bootstrap custom file input
bsCustomFileInput.init();

// start the Stimulus application
import './bootstrap';

// main document ready block
$(document).ready(function() {

});
