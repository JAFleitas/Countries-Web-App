import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import { useSelector, useDispatch } from "react-redux";
import { get_countries } from "../../actions";
import style from "./Countries.module.css";
import ContainerFilters from "../ContainerFilter/ContainerFilters";

import Loading from "../loading/Loading";
import Paginado from "../Paginado/Paginado";

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();
  // uso el filtro del estado global y un useEfect para poder volver a renderizar los paises, ya el que el sort solo ordena el array
  const filtro = useSelector((state) => state.filtro);
  useState(() => console.log(filtro), [filtro]);

  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);
  const loading = useSelector((state) => state.loading);

  //PAGINADO
  const inicio = useSelector((state) => state.inicio);
  const fin = useSelector((state) => state.fin);

  const display = countries
    .slice(inicio, fin)
    .map((c) => (
      <Country
        name={c.name}
        flag={c.flag[1]}
        continent={c.continent}
        key={c.id}
        id={c.id}
      />
    ));

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.filtros}>
          <ContainerFilters />
        </div>

        <div className={style.containerCountries}>
          {loading ? <Loading /> : display}
        </div>
      </div>

      {<Paginado />}
    </div>
  );
};
export default Countries;
