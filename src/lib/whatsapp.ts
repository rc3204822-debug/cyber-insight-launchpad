import { trackConversion } from './tracking';

export const openWhatsApp = (phoneNumber: string, message: string) => {
  // Rastrear conversão antes de abrir WhatsApp
  trackConversion();
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  try {
    // Tenta abrir em nova janela
    const newWindow = window.open(url, '_blank');
    
    // Se a janela não abrir (bloqueio de popup), redireciona na mesma aba
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
      window.location.href = url;
    }
  } catch (error) {
    // Em caso de erro, redireciona na mesma aba
    window.location.href = url;
  }
};

export const WHATSAPP_NUMBER = "5561982844543";