// Mensagens associadas aos botões
const buttonMessages = [
    "Mensagem 1", // Mensagem que será enviada quando o botão 0 for clicado
    "Mensagem 2", // Mensagem para o botão 1, se houver
    // Adicione mais mensagens conforme necessário
];

function sendToWhatsApp(buttonElement) {  
    const botaoIndex = buttonElement.getAttribute("data-index"); // Obtém o índice do botão clicado
    console.log("Índice do botão:", botaoIndex);  
    console.log("Mensagem:", buttonMessages[botaoIndex]);  
    
    const recipientNumber = ""; // Número do destinatário no WhatsApp
    const message = encodeURIComponent(`Olá, que horas você vem me pegar?`); // A mensagem que será enviada
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`; // URL de envio para WhatsApp
    
    window.open(whatsappUrl, '_blank'); // Abre o WhatsApp para enviar a mensagem
}
  