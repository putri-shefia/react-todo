import React from "react";
import PropTypes from "prop-types";
import Button from "./button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">To Do List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
