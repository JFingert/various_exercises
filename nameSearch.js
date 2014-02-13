var text = "hello you must me joshua - 
He was one of the twelve spies of Israel sent by Moses to explore the 
land of Canaan. (Numbers 13:1-16) After the death of Moses, he led the 
Israelite tribes in the conquest of Canaan, and allocated the land to the 
tribes. According to Biblical chronology, Joshua lived between 1355-1245 BCE,[4] 
or sometime in the late Bronze Age. According to Joshua 24:29, Joshua died at the 
age of 110.";
var myName = "joshua";
var hits = [];

for(var i=0; i<text.length; i++){

	if (text[i] === myName[0]){
		for (var j = i; j < (myName.length + i);j++) {
			if (text[j] === myName[j - i]){
				hits.push(text[j]);
			}
		}
	}
}
	if(hits===0){
		console.log("Your name wasn't found!");
	}
	else{
		console.log(hits);
	}