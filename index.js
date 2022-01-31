let num = parseInt(prompt("Enter numbr:"));
for (num; num>0; num--){
	if(num<=50){
		console.log("The current value is at 50. Terminating the loop.")
		break;
	} else if(num%10==0){
		console.log("The number is divisible by 10. Skipping the number.")
	} else if(num%5==0){
		console.log(num)
	}
}

let word = "supercalifragilisticexpialidocious";
let consonants = '';

for (let i=0;i<word.length;i++){
	if (word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u'){
		continue;
	} else {
		consonants += word[i];
	}
}
console.log(word); 
console.log(consonants);