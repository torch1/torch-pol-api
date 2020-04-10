import React from 'react';

export default function NumberText({number, style}) {
	const numberFormat = new Intl.NumberFormat('en-US');
	return (<span style={{...style}}>{numberFormat.format(number)}</span>);
} 