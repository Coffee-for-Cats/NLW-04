//JavaScirpt

// UUID => Universally unique indentifier
// function enviarEmail(para, id, assunto, texto) {
//     console.log(para, id, assunto, texto);
// }
// class EnviarEmailParaUsuario {
//     send() {
//         enviarEmail("lucas@gmail.com", 9999, "olá", "tudo bem?")
//     }
// }



//TypeScript

interface DadosDosEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: DadosDosEmail) {
    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "lucas@gmail.com",
            id: "9999",
            assunto: "olá",
            texto: "tudo bem?"
        })
    }
}