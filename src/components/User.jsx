import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { Uid } = useParams();
  return <div className="bg-rose-900 p-4 text-amber-300"> User ID: {Uid}</div>;
}
