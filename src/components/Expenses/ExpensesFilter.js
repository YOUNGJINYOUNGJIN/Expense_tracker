import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownCahngeHandler = (event) => {
        props.onChangeFilter(event.target.value); // props를 통해 부모 컴포넌트에 전달
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownCahngeHandler}> {/* 두 값 모두 value를 설정하고 선택된 값을 다루는 함수를 설정 */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;