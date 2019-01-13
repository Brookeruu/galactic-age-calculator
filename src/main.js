import { AgeCalculator } from './age-calculator.js';
import './styles.css';
import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $('#results').hide();
  $('#bday-form').submit(function(event) {
    event.preventDefault();


  let month = ((parseInt($('#inputMonth').val()))-1);
  let day = parseInt($('#inputDay').val());
  let year = parseInt($('#inputYear').val());
  let birthdate = new Date(year,month,day);
  let today = new Date();

  let ageCalc = new AgeCalculator(birthdate, today);

  // $('output-bday').text(((ageCalc.birthdate()).toDateString()));
  $('#output-bday').text(ageCalc.birthdate.toDateString());

  $('#earth-years').text(ageCalc.ageEarth());
  $('#venus-years').text(ageCalc.ageVenus());
  $('#mercury-years').text(ageCalc.ageMercury());
  $('#mars-years').text(ageCalc.ageMars());
  $('#jupiter-years').text(ageCalc.ageJupiter());
  $('#results').show();

  let lifeExpect = ageCalc.lifeExpectancy();
  console.log(lifeExpect);
  $("#earth-expectancy").text((`${lifeExpect[0]} more years`));
  $("#mercury-expectancy").text((`${lifeExpect[1]} more years`));
  $("#venus-expectancy").text((`${lifeExpect[2]} more years`));
  $("#mars-expectancy").text((`${lifeExpect[3]} more years`));
  $("#jupiter-expectancy").text((`${lifeExpect[4]} more years`));

  });
});
