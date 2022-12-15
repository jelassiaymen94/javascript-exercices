function solve(weight0, weight1, weight2) {
	// Create an array of weights
	const weights = [weight0, weight1, weight2];

	// Find the index of the heaviest weight
	const heaviestIndex = weights.reduce((maxIndex, weight, index) => {
		if (weight > weights[maxIndex]) {
			return index;
		}
		return maxIndex;
	}, 0);

	// Return the index of the heaviest weight
	return heaviestIndex;
}
