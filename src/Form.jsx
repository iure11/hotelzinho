import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/styles.css";
import "./css/stylesR.css";
import InputMask from 'react-input-mask';

export default function Form() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({ nome: false, telefone: false, msg: false });
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  function validar() {
    let hasErrors = false;

    const newErrors = {
      nome:  !/^[a-zA-ZÀ-ÿ ]+$/.test(nome),
    telefone: !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone),
    msg: msg === "",
    };

    setErrors(newErrors);

    for (const key in newErrors) {
      if (newErrors[key]) {
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setMostrarAlerta(false);
      return;
    }

    const templateParams = {
      from_name: nome,
      telefone: telefone,
      msg: msg,
    };

    emailjs
      .send("service_ynbniqi", "template_48vi1st", templateParams, "Dl9xegGf8QG26MJLZ")
      .then(
        (response) => {
          setMostrarAlerta(true);
          setNome("");
          setTelefone("");
          setMsg("");
        },
        (err) => {
          console.log("Erro: ", err);
          setMostrarAlerta(true);
        }
      );
  }

  return (
    <section className="sectionForm" id="contatos">
      {mostrarAlerta && (
        <div className="panelInfo">
          <div className="contentPanel">
            <p>{mostrarAlerta}</p>
            <p>Mensagem enviada com sucesso!</p>
            <button onClick={() => setMostrarAlerta(false)}>Fechar</button>
          </div>
        </div>
      )}

      <form action="" className="formulario">
        <h2 className="tituloForm">Fale Conosco</h2>
      
        <input
          type="text"
          value={nome}
          className={`nomeForm ${errors.nome ? "error" : ""}`}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
          {errors.nome && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Nome' é obrigatório.</span>}

          <InputMask
  mask="(99) 99999-9999"
  value={telefone}
  className={`telefoneForm ${errors.telefone ? "error" : ""}`}
  placeholder="Telefone"
  onChange={(e) => setTelefone(e.target.value)}
/>
        {errors.telefone && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Telefone' é obrigatório.</span>}


        <textarea
          name=""
          value={msg}
          cols="30"
          rows="10"
          className={`textForm ${errors.msg ? "error" : ""}`}
          placeholder="Digite sua mensagem aqui"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
                {errors.msg && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Mensagem' é obrigatório.</span>}

        <input className="botaoForm" type="button" value="Enviar" onClick={() => validar()} />
      </form>
    </section>
  );
}