var ClozeCard = function(text, cloze, partial, fullText) {
	if (this instanceof ClozeCard) {
		this.cloze = cloze;
		this.partial = partial;
		this.fullText = fullText;
	} else {
		return new ClozeCard(text, cloze, partial, fullText);
	}

	

}







module.exports = ClozeCard;



// var steveJobs = new BasicCard(
// 	"Was fired from Apple, founded Pixar Studios, then rehired at Apple", "Steve Jobs"
// 	);
// //Question
// console.log(steveJobs.front);
// //Answer
// console.log(steveJobs.back);

// var steveJobsCloze = new ClozeCard(
// 	"Steve Jobs was fired from Apple, founded Pixar Studios, then rehired at Apple", "Steve Jobs"
// 	);
// //"Steve Jobs"
// console.log(steveJobsCloze.cloze);
// //"...Was fired from Apple, found Pixar..."
// console.log(steveJobsCloze.partial);
// //fullText
// console.log(steveJobsCloze.fullText);



// var brokenCloze = new ClozeCard("This doesn't work", "oops");

