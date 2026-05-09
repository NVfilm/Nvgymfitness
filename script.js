function calculateBMI(){

  let height =
  document.getElementById('height').value;

  let weight =
  document.getElementById('weight').value;

  if(height === '' || weight === ''){

    document.getElementById('result').innerHTML =
    'Please enter height and weight';

    return;
  }

  height = height / 100;

  let bmi =
  (weight / (height * height)).toFixed(1);

  let status = '';

  if(bmi < 18.5){

    status = 'Underweight';

  }

  else if(bmi >= 18.5 && bmi < 24.9){

    status = 'Normal Weight';

  }

  else if(bmi >= 25 && bmi < 29.9){

    status = 'Overweight';

  }

  else{

    status = 'Obese';

  }

  document.getElementById('result').innerHTML =

  `Your BMI is ${bmi} (${status})`;

}
