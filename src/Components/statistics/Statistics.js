import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import React from 'react';

const Statistic = ({ title, statistic }) => {
  return (
    <div className={style.Statistics}>
      {title && <h2 className={style.Title}>{title}</h2>}
      <ul className={style.List}>
        {statistic.map(start => {
          return (
            <li key={start.id} className={style.Item}>
              <span className={style.Label}>{start.label}</span>
              <span className={style.Percentage}>{start.percentage}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

export default Statistic;
