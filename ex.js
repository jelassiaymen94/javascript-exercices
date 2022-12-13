function closestToZero(numbers) {
	let closestValue = null;
	for (let num of numbers) {
		if (closestValue === null || Math.abs(num) < Math.abs(closestValue) || (Math.abs(num) === Math.abs(closestValue) && num > 0)) {
			closestValue = num;
		}
	}
	return closestValue === null ? 0 : closestValue;
}

console.log(closestToZero([8, 5, 10, -5]));

function solve(width, height, length, mass) {
	if (mass >= 20 || width >= 150 || height >= 150 || length >= 150 || width * height * length >= 1000000) {
		if (mass >= 20 && (width >= 150 || height >= 150 || length >= 150 || width * height * length >= 1000000)) {
			return "REJECTED";
		}
		return "SPECIAL";
	}

	return "STANDARD";
}

function promisify(callbackFunction) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			args.push((result, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});

			callbackFunction(...args);
		});
	};
}
