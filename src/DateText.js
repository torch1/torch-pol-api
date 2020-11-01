import React from 'react';

export default function DateText({date_string}) {
	var d = Date.parse(date_string.replace(/ /g,"T"));
	var dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
	return (
		<span>{dtf.format(d)}</span>
	)

}