import React from 'react';

export default props => {
    const {details} = props;

    console.log('Misc Details Props: ', details);

    console.log('Objects Keys: ', Object.keys(details))

    const additionalInfo = Object.keys(details).map((key) => {
        return (
            <tr>
                <td></td>
                <td></td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Additional Information</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo}
            </tbody>
        </table>
    )
}