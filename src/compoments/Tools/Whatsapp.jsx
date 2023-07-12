import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import logo from '/Logo.png';

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            accountName='Crescer e Aprender'
            statusMessage='ONLINE'
            chatMessage='Bem-vindo ao hotelzinho Crescer e Aprender'
            placeholder='Digite sua mensagem'
            allowEsc={true}
            allowClickAway={true}
            darkMode={true}
            phoneNumber='+553434988394316'
            avatar={logo}
        />
    );
}
