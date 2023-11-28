export const Button = (props) => {
    const enviarMensagem = () => {
      alert('A sua mensagem foi enviada com sucesso.');
    };
  
    return (
      <div>
        <button onClick={enviarMensagem}>{props.label}</button>
      </div>
    );
  };

  Button.defaultProps = {
    label: 'Clique para enviar a mensagem'
  }
  
  export default Button;


