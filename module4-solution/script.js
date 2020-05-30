var m="message";
console.log("Global "+m);
var names=['Ram','sai','sun','john','Jai'];
for (var i=0; i< names.length;i++){
	namearray=[];
	namearray=names[i];
	if (namearray[0]=='j' || namearray[0]=='J'){
		console.log("Goodbye "+"J"+namearray);
	}
	else{
		console.log("Hello "+namearray);
	}
}
