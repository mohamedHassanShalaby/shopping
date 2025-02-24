import React from "react";

export const ProductSortBox = ({ sortItem, setSortItem }) => {
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
  };
  return (
    <div className="product-sort">
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="nosort"
        />
        <label htmlFor="nosort">بدون ترتيب</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low">من الاقل الى الاعلى</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high">من الاعلى الى الاقل</label>
      </div>
    </div>
  );
};
