import React from "react";

function FooterLists(props) {
  const { header, items } = props;
  return (
    <div className="footer_list_container">
      <div className="footer_list_header">{header}</div>
      {items.map((value) => (
        <div className="footer_list_items">{value}</div>
      ))}
    </div>
  );
}

export default FooterLists;
