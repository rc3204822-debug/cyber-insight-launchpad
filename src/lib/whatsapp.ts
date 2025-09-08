import { trackConversion } from './tracking';

export const openWhatsApp = (phoneNumber: string, message: string) => {
  // Rastrear conversão antes de abrir WhatsApp
  trackConversion();
  
  // Garantir que o número tenha o código do país
  const formattedNumber = phoneNumber.startsWith('55') ? phoneNumber : `55${phoneNumber}`;
  const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  
  console.log('Abrindo WhatsApp:', url);
  
  try {
    // Primeiro tenta abrir em nova janela
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    // Se a janela não abrir (bloqueio de popup), usa window.location
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.log('Popup bloqueado, redirecionando na mesma aba');
        window.location.href = url;
      }
    }, 100);
  } catch (error) {
    console.error('Erro ao abrir WhatsApp:', error);
    // Em caso de erro, redireciona na mesma aba
    window.location.href = url;
  }
};

export const WHATSAPP_NUMBER = "556133563925";