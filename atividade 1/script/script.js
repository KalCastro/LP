var image = [10];
	image[0] = "1b";
	image[1] = "2b";
	image[2] = "3b";
	image[3] = "4b";
	image[4] = "5b";
	image[5] = "6b";
	image[6] = "7b";
	image[7] = "8b";
	image[8] = "9b";
	image[9] = "bf";

var count = 0;

function passa(){
	
	document.getElementById("imgs").setAttribute("src","image/" + image[count] + ".jpg");

	count ++;

	if(count == 10){

		count = 0;
	}
}