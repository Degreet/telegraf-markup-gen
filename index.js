module.exports = function genMarkup(els, elsInLine) {
	const result = [[]];

	els.map((el) => {
		const last = result[result.length - 1];

		if (last.length >= elsInLine) {
			result.push([el]);
		} else {
			last.push(el);
		}
	});

	return result;
};
