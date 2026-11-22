// ============================================================
// TUDO QUE MUDA NO SITE FICA AQUI.
// As fotos são dos posts do Instagram do Ticão, salvas em fotos/CODIGO.jpg.
// "ig" é o código do post (o pedaço depois de /p/ ou /reel/ no link)
// e também o nome do arquivo na pasta fotos.
// Pra usar outra foto: coloque na pasta e use foto: "fotos/nome.jpg" no lugar de ig.
// ============================================================

window.SITE = {
  nome: "Ticão Carpinteiro",
  cidade: "Caraguatatuba e região",
  whatsapp: "5512997822851",
  telefone: "(12) 99782-2851",
  instagram: "tico.carpinteiro",
  anos: 30,
};

// Fotos que rodam na abertura
window.HERO = ["BzvnTnehsq1", "C-vJ3VMOBV4", "CX0tbQArKUR", "CUK8eWUre_F"];

// Foto da seção "Sobre"
window.SOBRE_FOTO = "Dax9GRFRoOx";

window.SERVICOS = [
  { id: "escada",    nome: "Escadas",                ig: "CX0tbQArKUR", texto: "Retas, em L, caracol e flutuantes, desenhadas pro seu espaço." },
  { id: "telhado",   nome: "Telhados",               ig: "C-vJ3VMOBV4", texto: "Madeiramento completo, tesouras, caibros, ripas e telha." },
  { id: "deck",      nome: "Decks",                  ig: "DL5ONooOpzX", texto: "Deck de piscina, varanda e jardim em madeira de lei." },
  { id: "pergolado", nome: "Pergolados e quiosques", ig: "CUK8eWUre_F", texto: "Estruturas pra área externa, com sombra e acabamento fino." },
  { id: "portao",    nome: "Portões",                ig: "CWIkUXLriLD", texto: "Portões de madeira maciça, sociais e de garagem." },
  { id: "banco",     nome: "Bancos e móveis",        ig: "BkQeyiBBhoi", texto: "Bancos de jardim, cadeiras e peças sob medida." },
  { id: "porta",     nome: "Portas e painéis",       ig: "B1ecnzpnOMI", texto: "Portas, painéis e divisórias ripadas." },
];

// Galeria de trabalhos (cat = id do serviço)
window.TRABALHOS = [
  { cat: "escada",    ig: "CX0tbQArKUR", titulo: "Escada caracol com patamar" },
  { cat: "escada",    ig: "CjImw8eAr1_", titulo: "Escada com corrimão de madeira" },
  { cat: "escada",    ig: "CV8JWXRrLj0", titulo: "Escada com estrutura metálica" },
  { cat: "escada",    ig: "C9sUqQkOPxP", titulo: "Escada reta com corrimão" },
  { cat: "escada",    ig: "B8xMqYVn-z6", titulo: "Escada em L" },
  { cat: "escada",    ig: "CGuUnQTn4fP", titulo: "Escada com degraus encaixados" },
  { cat: "telhado",   ig: "C-vJ3VMOBV4", titulo: "Telhado cerâmico" },
  { cat: "telhado",   ig: "DcUjzQ3tshw", titulo: "Telhado colonial" },
  { cat: "telhado",   ig: "CiR_PBrAOrd", titulo: "Telhado com várias águas" },
  { cat: "telhado",   ig: "CM5WoUfH19k", titulo: "Estrutura de madeira em montagem" },
  { cat: "telhado",   ig: "CUvZBuYgFSu", titulo: "Madeiramento com manta térmica" },
  { cat: "telhado",   ig: "CIBCD5AHuGj", titulo: "Estrutura de laje e cobertura" },
  { cat: "deck",      ig: "DL5ONooOpzX", titulo: "Deck na borda da piscina" },
  { cat: "deck",      ig: "CkOTWPwgpDb", titulo: "Deck de madeira" },
  { cat: "pergolado", ig: "CUK8eWUre_F", titulo: "Quiosque de madeira" },
  { cat: "pergolado", ig: "BzvnTnehsq1", titulo: "Área gourmet com pergolado" },
  { cat: "pergolado", ig: "CKpcBPwHS_o", titulo: "Pergolado de entrada" },
  { cat: "pergolado", ig: "DSNIMbeDiIv", titulo: "Pergolado com vista" },
  { cat: "pergolado", ig: "DRLG8wcD_2v", titulo: "Pergolado na piscina" },
  { cat: "portao",    ig: "CWIkUXLriLD", titulo: "Portão de madeira maciça" },
  { cat: "banco",     ig: "BkQeyiBBhoi", titulo: "Banco de jardim" },
  { cat: "banco",     ig: "Cix2z9mgWo8", titulo: "Cadeira e deck de varanda" },
  { cat: "porta",     ig: "B1ecnzpnOMI", titulo: "Painel ripado na área gourmet" },
];
