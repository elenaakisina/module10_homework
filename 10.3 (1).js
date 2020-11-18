ageYou=prompt('Сколько вам лет?');

console.log(ageYou);

ageYourNumber= +ageYou;
console.log(typeof ageYourNumber);


if (typeof ageYourNumber !== 'number' || isNaN(ageYourNumber))  {
    console.log("упс, кажется вы ошиблись")
} else 
    
  if ( ageYourNumber % 2 == 0) {
  console.log("число четное") }
  else { console.log("число нечетное")}
