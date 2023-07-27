// Sourced from https://gist.github.com/letsgetrandy/1e05a68ea74ba6736eb5

export const EXCEPTIONS = {
	'are': 'were',
	'eat': 'ate',
	'go': 'went',
	'have': 'had',
	'inherit': 'inherited',
	'is': 'was',
	'run': 'ran',
	'sit': 'sat',
	'visit': 'visited'
}

export const getPastTense = (verb, exceptions = EXCEPTIONS) => {
	if (exceptions[verb]) {
		return exceptions[verb]
	}
	if ((/e$/i).test(verb)) {
		return verb + 'd'
	}
	if ((/[aeiou]c$/i).test(verb)) {
		return verb + 'ked'
	}
	// for american english only
	if ((/el$/i).test(verb)) {
		return verb + 'ed'
	}
	if ((/[aeio][aeiou][dlmnprst]$/).test(verb)) {
		return verb + 'ed'
	}
	if ((/[aeiou][bdglmnprst]$/i).test(verb)) {
		return verb.replace(/(.+[aeiou])([bdglmnprst])/, '$1$2$2ed')
	}
	return verb + 'ed'
}
