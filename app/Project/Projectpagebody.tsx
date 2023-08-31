"use client";
import React from "react";
import Projectcard_Web from "./(PojectCard)/Projectcard_Web";
import Projectcard_Mobile from "./(PojectCard)/Projectcard_Mobile";
import { useSelector } from "react-redux";
import {
  opctionchoose_data,
  SearchQuery_data,
} from "../../Redux-store/Redux-action";
import Server_card from "./Server_card";
function Projectpagebody() {
  const NavTag = useSelector(opctionchoose_data);
  const Search_query = useSelector(SearchQuery_data);

  

  return (
    <div>
      Proj 2
    </div>
  );
}

export default Projectpagebody;
