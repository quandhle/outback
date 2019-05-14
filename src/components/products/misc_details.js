import React from 'react';
import {toWords} from '../../helpers';

const MiscDetails = props => {
    const {details} = props;
    const additionalInfo = Object.keys(details).map((key) => {
        let values = details[key];

        if (Array.isArray(values)) {
            values = values.join(', ');
        }

        return (
            <tr key={key}>
                <td>{toWords(key)}</td>
                <td>{values}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Technical Specs</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo}
            </tbody>
        </table>
    )
}

export default MiscDetails;
