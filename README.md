# Conversor De Texto Em Voz

Este projeto é um **Conversor de Texto em Voz** interativo e avançado, desenvolvido com HTML, CSS e JavaScript. Ele oferece uma série de funcionalidades, como salvar textos, histórico de leituras, reconhecimento de voz, exportação de áudio, tradução de textos, exportação para PDF e muito mais!

## Funcionalidades

1. **Converter Texto em Voz**  
   O usuário pode digitar ou colar um texto e ouvi-lo em voz alta. A voz é personalizável, permitindo ajustar a velocidade e o tom.

2. **Salvar e Gerenciar Textos**  
   Os textos podem ser salvos no **LocalStorage** do navegador, para que possam ser reutilizados mesmo após o fechamento do navegador. É possível visualizar, editar ou excluir textos salvos.

3. **Histórico de Leituras e Favoritos**  
   O histórico dos últimos textos lidos é armazenado, permitindo que o usuário revisite os textos já lidos. Também é possível marcar textos como favoritos para acesso rápido.

4. **Reconhecimento de Voz para Entrada de Texto**  
   O usuário pode ditar o texto utilizando a **API de Reconhecimento de Voz** do navegador, tornando a interação mais acessível e conveniente.

5. **Exportar Texto para Arquivo de Áudio (MP3)**  
   O usuário pode gerar um arquivo de áudio com o texto convertido em voz e fazer o download para ouvir offline.

6. **Tradução Automática de Texto**  
   O texto pode ser traduzido para diferentes idiomas antes de ser lido em voz alta, facilitando a compreensão de conteúdos em outras línguas.

7. **Temas Personalizáveis e Acessibilidade**  
   O projeto oferece diferentes opções de temas, ajustando a interface para o horário do dia, e fornece controles de acessibilidade como ajuste de contraste e tamanhos de fonte.

8. **Exportar para PDF**  
   O usuário pode exportar o texto em formato PDF, com um layout bonito e personalizável.

9. **Feedback Visual e Animações**  
   O projeto fornece feedback visual durante o processamento das ações (como "Texto copiado" ou "Áudio pronto para download") e animações para melhorar a experiência do usuário.

10. **API para Buscar Textos Populares**  
    O projeto pode buscar textos populares da **Wikipedia** ou de outras fontes públicas para ouvir conteúdos de interesse.

## Como Usar

### 1. **Pré-requisitos**

Este projeto é baseado em tecnologias web modernas, e você só precisa de um navegador moderno para utilizá-lo. Não há necessidade de instalar nada em seu computador, pois ele funciona diretamente no navegador.

### 2. **Rodando o Projeto**

- Clone ou baixe o repositório.
- Abra o arquivo `index.html` diretamente no seu navegador.

### 3. **Funcionalidades**

- **Escrever ou Colar Texto**: Digite ou cole o texto que deseja converter em voz na área de texto.
- **Ler Texto**: Clique no botão "Ler Texto" para que o navegador leia o texto.
- **Salvar Texto**: Clique em "Salvar Texto" para armazenar o texto no seu **LocalStorage** e poder acessá-lo novamente mais tarde.
- **Reconhecimento de Voz**: Clique em "Ativar Reconhecimento de Voz" e comece a falar para ditar o texto.
- **Escolher a Voz**: No menu de seleção de voz, escolha a voz de sua preferência.
- **Configurações de Voz**: Ajuste o tom e a velocidade da voz com os controles deslizantes.
- **Favoritar Texto**: Marque textos como favoritos para fácil acesso.
- **Traduzir Texto**: Use o botão de tradução para traduzir o texto antes de ouvir.
- **Exportar para PDF**: Exporte o texto como um arquivo PDF com layout bonito.

### 4. **LocalStorage**

Os textos salvos são armazenados localmente no navegador, utilizando a API `localStorage`. Isso significa que seus textos estarão disponíveis mesmo após fechar o navegador, mas somente no dispositivo em que foram salvos.

### 5. **Exportação de Áudio**

A exportação para **áudio MP3** pode ser implementada utilizando bibliotecas JavaScript como **Recorder.js**, mas não foi completamente implementada aqui. Se desejar adicionar essa funcionalidade, você pode integrar uma biblioteca para gravar o áudio gerado e permitir o download do arquivo.

### 6. **Reconhecimento de Voz**

O projeto utiliza a **API de Reconhecimento de Voz** do navegador para permitir que o usuário dite o texto. No momento, o reconhecimento funciona apenas com navegadores que suportam esta API, como o Google Chrome.

### 7. **Tradução e Exportação para PDF**

A tradução do texto e a exportação para PDF estão em estágio inicial de desenvolvimento. Funcionalidades como essas podem ser facilmente adicionadas usando APIs externas como o **Google Translate API** para tradução, e bibliotecas como **jsPDF** para exportação de PDFs.

## Estrutura de Arquivos

