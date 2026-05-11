export const userImpact = [
  { value: "18", label: "ações registradas", tone: "green" },
  { value: "720", label: "pontos acumulados", tone: "orange" },
  { value: "8", label: "reportes enviados", tone: "green" },
  { value: "24", label: "descartes corretos", tone: "green" }
] as const;

export const collectiveImpact = [
  { value: "128", label: "reportes analisados" },
  { value: "342", label: "descartes corretos registrados" },
  { value: "27", label: "pontos de descarte mapeados" },
  { value: "1.240 kg", label: "resíduos encaminhados corretamente" }
] as const;

export const collectionNeighborhoods = ["Centro", "Barra Velha", "Itaguassu", "Perequê", "Zona Sul"] as const;

export const collectionSchedule = [
  {
    type: "Orgânico e rejeito",
    days: "Segunda, quarta e sexta",
    time: "Coloque na rua até 18h",
    detail: "Restos de comida, papel higiênico, fraldas e resíduos sem reciclagem."
  },
  {
    type: "Reciclável",
    days: "Terça e quinta",
    time: "A partir das 9h",
    detail: "Papel, papelão, plástico, metal e vidro limpos e secos sempre que possível."
  },
  {
    type: "Volumosos e entulho",
    days: "Sábado",
    time: "Somente com agendamento",
    detail: "Móveis pequenos, madeira e entulho ensacado. Não deixe na calçada sem confirmação."
  }
] as const;

export const nextCollection = {
  neighborhood: "Centro",
  type: "Reciclável",
  day: "Hoje",
  time: "a partir das 9h",
  detail: "Separe papel, plástico, metal e vidro limpos antes de colocar para coleta."
} as const;

export const disposalPoints = [
  {
    name: "Ecoponto Barra Velha",
    distance: "2,8 km",
    category: "Ecoponto",
    materials: "entulho ensacado, móveis pequenos, madeira e volumosos",
    hours: "terça a sábado, 9h às 16h",
    note: "Para volumes grandes, confirme o agendamento antes de sair."
  },
  {
    name: "Centro de Recicláveis Nega Malu",
    distance: "1,2 km",
    category: "Ponto de recicláveis",
    materials: "papel, papelão, plástico, metal e vidro limpo",
    hours: "segunda a sexta, 8h às 17h",
    note: "Leve os materiais secos e separados sempre que possível."
  },
  {
    name: "Coleta de óleo usado - Centro",
    distance: "850 m",
    category: "Óleo de cozinha",
    materials: "óleo de cozinha em garrafa PET fechada",
    hours: "todos os dias, 9h às 18h",
    note: "Não misture óleo com água, detergente ou restos de alimento."
  },
  {
    name: "Ponto de pilhas e baterias",
    distance: "1,7 km",
    category: "Pilhas e baterias",
    materials: "pilhas, baterias pequenas e carregadores portáteis",
    hours: "segunda a sábado, 10h às 19h",
    note: "Guarde em local seco até levar ao ponto de entrega."
  },
  {
    name: "E-lixo Perequê",
    distance: "3,4 km",
    category: "Eletrônicos",
    materials: "celulares, cabos, carregadores e pequenos aparelhos",
    hours: "quarta e sexta, 10h às 15h",
    note: "Remova dados pessoais dos aparelhos antes do descarte."
  },
  {
    name: "Vidro e papelão - Itaguassu",
    distance: "2,1 km",
    category: "Vidro e papelão",
    materials: "garrafas de vidro, potes, caixas e papelão limpo",
    hours: "segunda a sexta, 8h às 12h",
    note: "Vidro quebrado deve ir embalado e identificado."
  }
] as const;

export const educationTips = [
  {
    title: "Como separar recicláveis",
    tag: "Recicláveis",
    text: "Reciclável bom é reciclável limpo. Se estiver muito sujo de comida ou gordura, pode contaminar outros materiais."
  },
  {
    title: "O que vai no resíduo orgânico",
    tag: "Orgânico",
    text: "Restos de frutas, legumes e alimentos podem ir para o orgânico. Se houver compostagem, melhor ainda."
  },
  {
    title: "O que não pode ir no reciclável",
    tag: "Atenção",
    text: "Guardanapo engordurado, papel higiênico, fralda e embalagem muito suja devem ir para rejeito."
  },
  {
    title: "Como descartar óleo de cozinha",
    tag: "Óleo",
    text: "Espere esfriar, coloque em garrafa PET bem fechada e leve a um ponto de coleta. Nunca jogue na pia."
  },
  {
    title: "Como descartar pilhas e eletrônicos",
    tag: "Especial",
    text: "Pilhas, baterias, cabos e aparelhos pequenos precisam de ponto específico. Eles podem contaminar solo e água."
  },
  {
    title: "Por que reportar descarte irregular",
    tag: "Cidade",
    text: "O reporte ajuda a cidade a encontrar pontos críticos e agir antes que o problema aumente."
  }
] as const;

export const disposalGuideItems = [
  {
    name: "Pilha",
    category: "Resíduo especial",
    aliases: ["pilha", "bateria", "baterias"],
    prepare: "Guarde em local seco e, se possível, isole os polos com fita.",
    where: "Leve a um ponto de pilhas e baterias ou ecoponto com coleta especial.",
    care: "Nunca descarte no resíduo comum, porque metais pesados podem contaminar solo e água."
  },
  {
    name: "Óleo de cozinha",
    category: "Resíduo especial",
    aliases: ["oleo", "óleo", "cozinha", "gordura"],
    prepare: "Espere esfriar e coloque em uma garrafa PET limpa, seca e bem fechada.",
    where: "Entregue em pontos de coleta de óleo usado no Centro ou em ecopontos participantes.",
    care: "Não jogue na pia, no ralo ou no solo."
  },
  {
    name: "Vidro",
    category: "Reciclável",
    aliases: ["vidro", "garrafa", "pote"],
    prepare: "Lave rapidamente e separe de outros recicláveis quando houver quebra.",
    where: "Leve a pontos de recicláveis ou deixe para a coleta seletiva do bairro.",
    care: "Vidro quebrado deve ir embalado e identificado para proteger coletores."
  },
  {
    name: "Eletrônico pequeno",
    category: "Resíduo especial",
    aliases: ["eletronico", "eletrônico", "celular", "cabo", "carregador"],
    prepare: "Remova dados pessoais e separe cabos, carregadores e acessórios.",
    where: "Leve a pontos de e-lixo ou ecopontos com recebimento de eletrônicos.",
    care: "Não misture com recicláveis comuns ou resíduo orgânico."
  },
  {
    name: "Papel e papelão",
    category: "Reciclável",
    aliases: ["papel", "papelao", "papelão", "caixa"],
    prepare: "Dobre caixas e mantenha o material limpo e seco.",
    where: "Coloque na coleta seletiva ou leve ao centro de recicláveis mais próximo.",
    care: "Papel engordurado ou muito sujo deve ir para rejeito."
  },
  {
    name: "Plástico e metal",
    category: "Reciclável",
    aliases: ["plastico", "plástico", "metal", "lata", "reciclável", "reciclavel"],
    prepare: "Retire restos de alimento e amasse embalagens quando fizer sentido.",
    where: "Use a coleta seletiva do bairro ou pontos de recicláveis.",
    care: "Embalagens com produto tóxico precisam de orientação específica."
  }
] as const;

export const scoreRules = [
  { action: "Reporte validado", points: "+50 pontos" },
  { action: "Descarte em ponto correto", points: "+30 pontos" },
  { action: "Participação em ação ambiental", points: "+80 pontos" },
  { action: "Leitura de dica educativa", points: "+5 pontos" }
] as const;

export const rankingNeighborhoods = [
  { name: "Centro", points: 2450, progress: 92 },
  { name: "Barra Velha", points: 2120, progress: 78 },
  { name: "Itaguassu", points: 1840, progress: 64 },
  { name: "Perequê", points: 1710, progress: 59 },
  { name: "Zona Sul", points: 1510, progress: 52 }
] as const;

export const userHistory = [
  { text: "Reporte enviado", detail: "Em análise" },
  { text: "Descarte de recicláveis registrado", detail: "+30 pontos" },
  { text: "Dica concluída: Separação correta", detail: "+5 pontos" },
  { text: "Ponto de coleta reportado", detail: "Aguardando revisão" }
] as const;

export const complaintTypes = [
  "Resíduos acumulados",
  "Entulho",
  "Descarte em área verde",
  "Animal morto",
  "Outro"
] as const;
