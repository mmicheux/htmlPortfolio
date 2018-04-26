let headingSelector = 'h1';

function calculateTextshadow(elementSelector, value, measurement, arrayOfColors){
  let element = document.querySelector(`${elementSelector}`);

  let txtShadow = arrayOfColors.map((color, idx) => {
    return (((value * (idx + 1)).toString() + measurement + ' ').repeat(3) + color).toString();
  });

  element.style.textShadow = txtShadow ;
}

calculateTextshadow(headingSelector, 5,'vw', ['#f1fffd','#eff4ff','#f7efff','#ffeff7','#fff7f7']);