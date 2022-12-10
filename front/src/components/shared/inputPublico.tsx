import React, { useEffect, useState } from "react";

type Props = {
  user: any;
  setUser: any;
  nome: string;
  placeholder: string;
};

export default function inputPublico(props: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tipo, setTipo] = useState("text");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    props.setUser({ ...props.user, [name]: value });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (props.nome === "password") {
      setTipo("password");
    }
  }, []);

  return (
    <input
      name={props.nome}
      onChange={inputTextHandler}
      type={tipo}
      id={props.nome}
      placeholder={props.placeholder}
    />
  );
}
