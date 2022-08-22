export default function cn (entries) {
	return Object.entries(entries)
		.filter(entry => entry[1])
		.map(entry => entry[0])
		.join(' ');
}
