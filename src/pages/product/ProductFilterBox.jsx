import React from "react";

export const ProductFilterBox = ({ filterItem, setFilterItem }) => {
  const onChangeHandler = (e) => {
    setFilterItem(e.target.id);
  };
  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">بدون فلتر</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="laptop"
        />
        <label htmlFor="laptop">لابتوب</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile">جوال</label>
      </div>
    </div>
  );
};
