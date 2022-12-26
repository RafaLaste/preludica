<?php
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $mensagem = $_POST['mensagem'];

  $arquivo = "
    <html>
      <p><i>Dados da mensagem:</i></p>
      <p><b>Nome: </b>$nome</p>
      <p><b>Email: </b>$email</p>
      <p><b>Telefone: </b>$telefone</p>
      <p><b>Mensagem: </b>$mensagem</p>
    </html>
  ";

  // $destino = "ola@preludica.com";
  $destino = "rafael@8poroito.com.br";
  $assunto = "Nova mensagem pelo site";

  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  $response = mail($destino, $assunto, $arquivo, $headers);

  if ($response) {
    $message = json_encode(['type' => 'success', 'title' => 'Feito!', 'msg' => 'Mensagem enviada com sucesso.']); 
  } else {
    $message = json_encode(['type' => 'error', 'title' => 'Oops...', 'msg' => 'Por favor, preencha corretamente todos os campos.']); 
  }

  echo $message;

  // echo "<meta http-equiv='refresh' content='1;URL=../contato-obrigado/'>";

?>
