import React from 'react';
import PropTypes from 'prop-types';

const GradeItem=({name,grade,sex,kor,eng,mat,sic}) =>{
    const sco= parseInt(kor+ eng+ mat+ sic);
    const ave= parseInt(sco/4);
    return(
            <tr>
                <td>{name}</td>
                <td>{grade}</td>
                <td>{sex}</td>
                <td>{kor}</td>
                <td>{eng}</td>
                <td>{mat}</td>
                <td>{sic}</td>
                <td>{sco}</td>
                <td>{ave}</td>
            </tr>
    );
};
GradeItem.propTypes= {
    name: PropTypes.string,
    grade: PropTypes.number,
    sex: PropTypes.string,
    kor: PropTypes.number,
    eng: PropTypes.number,
    mat: PropTypes.number,
    sic: PropTypes.number,
    soc: PropTypes.number,
    ave: PropTypes.number
}
GradeItem.defaultProps={
    kor: 0,
    eng: 0,
    mat: 0,
    sic: 0
}

export default GradeItem;