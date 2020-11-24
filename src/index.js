function diamond(size) {
	let isOdd = size % 2 === 0 ? false : true;
	let isPositive = size > 0 ? true : false;
	let finalDiamond = '';

	if (isOdd && isPositive) {
		let index = 1;
		let asterisk = '*';
		let space = ' ';
		let diamond = '';

		while (index < size) {
			diamond += `${space.repeat((size - index) / 2)}${asterisk.repeat(index)}\n`;
			index += 2;
		}

		index = size;
		let i = 0;

		while (index >= 1) {
			diamond += `${space.repeat(i)}${asterisk.repeat(index)}\n`;
			i++;
			index -= 2;
		}

		finalDiamond = diamond;
	} else {
		return null;
	}
	console.log(finalDiamond);
	return finalDiamond;
}

module.exports = {diamond};
