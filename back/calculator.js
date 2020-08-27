const calculator = (a) => {
	var type = "";
	var health = 0;
	var untact = 0;

	if (a.length > 0) {
		health = 11 - a[0] - a[2] - 3 * a[6] - a[7];
		untact = 9 - 2 * a[1] - 2 * a[3] - a[4] - a[5];
	} else {
		health = Math.floor(Math.random() * 7);
		untact = Math.floor(Math.random() * 7);
	}

	switch (health) {
		case 0:
			if (untact < 2) {
				type = "dentist";
				break;
			} else if (untact < 4) {
				type = "flight";
				break;
			} else if (untact < 6) {
				type = "poop";
				break;
			} else {
				type = "mask";
				break;
			}
		case 1:
			if (untact < 2) {
				type = "dentist";
				break;
			} else if (untact < 4) {
				type = "flight";
				break;
			} else if (untact < 6) {
				type = "poop";
				break;
			} else {
				type = "mask";
				break;
			}

		case 2:
			if (untact < 2) {
				type = "travel";
				break;
			} else if (untact < 4) {
				type = "unemployed";
				break;
			} else if (untact < 6) {
				type = "youtuber";
				break;
			} else {
				type = "ingukgong";
				break;
			}

		case 3:
			if (untact < 2) {
				type = "karaoke";
				break;
			} else if (untact < 4) {
				type = "freshmen";
				break;
			} else if (untact < 6) {
				type = "employee";
				break;
			} else {
				type = "developer";
				break;
			}

		case 4:
			if (untact < 2) {
				type = "pediatric";
				break;
			} else if (untact < 4) {
				type = "surgeon";
				break;
			} else if (untact < 6) {
				type = "hero";
				break;
			} else {
				type = "hwata";
				break;
			}
		case 5:
			if (untact < 2) {
				type = "pediatric";
				break;
			} else if (untact < 4) {
				type = "surgeon";
				break;
			} else if (untact < 6) {
				type = "hero";
				break;
			} else {
				type = "hwata";
				break;
			}
		case 6:
			if (untact < 2) {
				type = "pediatric";
				break;
			} else if (untact < 4) {
				type = "surgeon";
				break;
			} else if (untact < 6) {
				type = "hero";
				break;
			} else {
				type = "hwata";
				break;
			}

		default:
			type = "hero";
	}

	return type;
};

export default calculator;
