import React from 'react';

export default function DateText({date_string}) {
	const d = new Date(date_string)
	const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
	const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d) 

	return (
		<span>{`${mo}, ${da} ${ye}`}</span>
	)

}