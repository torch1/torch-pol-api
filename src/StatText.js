import React from 'react';
import NumberText from './NumberText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function StatText ({name, stat_number, fa_icon_name, icon_style })  {
	return (
		<span>
	<FontAwesomeIcon style={{color: "#A5A5A5", fontSize: 13, marginRight: 4, ...icon_style}} icon={fa_icon_name} />
    <NumberText style={{color: '#4f5f6f', fontWeight: 'bold', fontSize: 14}} number={stat_number}/><span style={{display: 'block', fontSize: 10, textTransform: 'capitalize', marginTop: 0}}>{name}</span>
    </span>
        )


}