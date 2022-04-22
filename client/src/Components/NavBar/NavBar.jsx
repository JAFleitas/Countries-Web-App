import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { get_countries } from "../../actions";
import { Link } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar = () => {
  const [namePais, setNamePais] = useState({ name: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_countries(namePais.name));
  }, [namePais, dispatch]);

  const handleChange = (e) => {
    setNamePais({ name: e.target.value });
  };

  return (
    <div className={style.container}>
      <header>Henry's Countries App</header>
      <div className={style.input}>
        <input
          value={namePais.name}
          onChange={(e) => handleChange(e)}
          placeholder="Paises"
        />
      </div>

      <div className={style.actividad}>
        <Link to="/create_activity">
          <button>Crear Actividad</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
