// Dados do Mapa de Risco — edifício-sede Codevasf. Base: plantas e tabulação da Cipa (levantamento 2019), usados como dados de demonstração.
// Coordenadas das salas em % da planta (0–100). Riscos: código da coluna da tabulação + grau (1 pequeno, 2 médio, 3 grande).

export const GRUPOS = [
  { id: 'qui', nome: 'Químico', cor: '#E52207', borda: '#B50909', exemplos: 'Poeiras, gases, vapores, fumaça, produtos líquidos' },
  { id: 'aci', nome: 'Acidentes', cor: '#0076D6', borda: '#005EA2', exemplos: 'Arranjo físico, incêndio, eletricidade, armazenamento' },
  { id: 'bio', nome: 'Biológico', cor: '#8C471C', borda: '#5F3617', exemplos: 'Fungos, bactérias, animais, insetos' },
  { id: 'fis', nome: 'Físico', cor: '#00A91C', borda: '#216E1F', exemplos: 'Ruído, calor, vibrações, iluminação, umidade' },
  { id: 'erg', nome: 'Ergonômico', cor: '#FFCD07', borda: '#947100', exemplos: 'Postura inadequada, monotonia, esforço físico' },
  { id: 'psi', nome: 'Psicossocial', cor: '#4A50C4', borda: '#4A50C4', exemplos: 'Sobrecarga, pressão excessiva, conflitos, assédio', novo: true }
];

export const AGENTES = {
  D: { g: 'fis', nome: 'Ruído', medida: 'Isolar ou enclausurar a fonte de ruído e fazer manutenção preventiva dos equipamentos.', epi: 'Protetor auricular tipo plug ou concha nas atividades junto à fonte.', nr: 'NR-9' },
  E: { g: 'fis', nome: 'Calor', medida: 'Garantir ventilação ou climatização, oferecer água potável e prever pausas em ambientes quentes.', epi: '', nr: 'NR-9' },
  F: { g: 'fis', nome: 'Iluminação', medida: 'Adequar o nível de iluminação ao posto de trabalho e evitar ofuscamento e reflexos nas telas.', epi: '', nr: 'NR-17' },
  G: { g: 'fis', nome: 'Umidade', medida: 'Corrigir infiltrações e manter o ambiente com controle de umidade.', epi: '', nr: 'NR-9' },
  H: { g: 'fis', nome: 'Vibrações', medida: 'Instalar bases antivibratórias e manter equipamentos balanceados.', epi: '', nr: 'NR-9' },
  I: { g: 'qui', nome: 'Gases e vapores', medida: 'Manter exaustão e ventilação, armazenar produtos fechados e consultar a ficha de dados de segurança (FDS).', epi: 'Respirador com filtro químico, quando indicado na FDS.', nr: 'NR-9' },
  J: { g: 'qui', nome: 'Fumaça', medida: 'Manter exaustão no local e respeitar a proibição de fumar em ambientes fechados.', epi: '', nr: 'NR-9' },
  K: { g: 'qui', nome: 'Poeira', medida: 'Fazer limpeza úmida periódica e acondicionar documentos e materiais em caixas fechadas.', epi: 'Máscara PFF2 e luvas no manuseio de acervo e materiais estocados.', nr: 'NR-9' },
  L: { g: 'qui', nome: 'Produtos líquidos', medida: 'Armazenar em local ventilado, identificado e com contenção de vazamentos.', epi: 'Luvas nitrílicas e óculos de proteção.', nr: 'NR-26' },
  M: { g: 'bio', nome: 'Fungos', medida: 'Controlar a umidade, higienizar o acervo e fazer a manutenção do ar-condicionado (PMOC).', epi: 'Máscara PFF2 e luvas no manuseio de documentos antigos.', nr: 'NR-9' },
  N: { g: 'bio', nome: 'Animais peçonhentos', medida: 'Orientar as equipes de campo e manter controle de pragas nas áreas externas.', epi: 'Botas e perneiras em atividades de campo.', nr: 'NR-6' },
  O: { g: 'bio', nome: 'Insetos e roedores', medida: 'Manter dedetização e desratização periódicas e não acumular resíduos.', epi: '', nr: 'NR-9' },
  P: { g: 'aci', nome: 'Arranjo físico inadequado', medida: 'Manter corredores e saídas livres, organizar cabos e mobiliário.', epi: '', nr: 'NR-17' },
  Q: { g: 'aci', nome: 'Sinalização deficiente', medida: 'Sinalizar rotas de fuga, extintores, degraus e áreas restritas.', epi: '', nr: 'NR-26' },
  R: { g: 'aci', nome: 'Risco de incêndio', medida: 'Manter extintores inspecionados, saídas desobstruídas e brigada treinada.', epi: '', nr: 'NR-23' },
  S: { g: 'aci', nome: 'Transporte de materiais', medida: 'Usar carrinhos e respeitar o limite de carga no transporte manual.', epi: 'Luvas e calçado de segurança no transporte de cargas.', nr: 'NR-17' },
  T: { g: 'aci', nome: 'Máquinas e equipamentos', medida: 'Fazer manutenção preventiva e desligar equipamentos fora de uso.', epi: '', nr: 'NR-1' },
  U: { g: 'aci', nome: 'Eletricidade', medida: 'Manter quadros fechados e identificados, sem extensões ou adaptadores sobrecarregados.', epi: 'Intervenções apenas por profissional autorizado, com EPI específico.', nr: 'NR-10' },
  V: { g: 'aci', nome: 'Piso irregular', medida: 'Reparar o piso e sinalizar desníveis até a correção.', epi: '', nr: 'NR-26' },
  W: { g: 'aci', nome: 'Iluminação deficiente', medida: 'Substituir lâmpadas queimadas e reforçar a iluminação de escadas e circulações.', epi: '', nr: 'NR-17' },
  X: { g: 'aci', nome: 'Armazenamento inadequado', medida: 'Fixar estantes, respeitar a carga máxima e não empilhar acima da altura indicada.', epi: '', nr: 'NR-1' },
  Y: { g: 'erg', nome: 'Postura inadequada', medida: 'Ajustar cadeira, mesa e monitor; fazer pausas e ginástica laboral.', epi: '', nr: 'NR-17' },
  Z: { g: 'erg', nome: 'Monotonia e repetitividade', medida: 'Alternar tarefas e fazer pausas regulares durante a jornada.', epi: '', nr: 'NR-17' },
  AA: { g: 'erg', nome: 'Trabalho físico pesado', medida: 'Usar auxílio mecânico e dividir cargas; respeitar o limite de peso.', epi: 'Luvas e calçado de segurança.', nr: 'NR-17' }
};

export const ANDARES = [
  { id: 'sub', nome: 'Subsolo', curto: 'SS', nucleo: [18.5, 37, 64.5, 23], copa: 'P1 R1 T1 Y1', salas: [
    { id: 'arq', sigla: 'AA/GSA/UAD', nome: 'Arquivo Geral (sala 101)', x: 19.5, y: 0, w: 10, h: 35, r: 'D1 E1 G1 K3 M2 O1 P1 R1 S1 X1' },
    { id: 'dep', sigla: 'AA/GSA/UPM', nome: 'Depósito de Patrimônio', x: 29.5, y: 0, w: 10.5, h: 35, r: 'O1 S1 T1 X2 Y1' },
    { id: 'map', sigla: 'AD/GEP', nome: 'Mapoteca', x: 40, y: 0, w: 11.5, h: 35, r: 'K2 M1 P1 X2 Y1 AA1' },
    { id: 'gsa2', sigla: 'AA/GSA', nome: 'Unidade de Serviços Auxiliares', x: 51.5, y: 0, w: 7.5, h: 35, r: 'R2 U1 X1' },
    { id: 'uit', sigla: 'AE/GTI/UIT', nome: 'Unidade de Infraestrutura e Tecnologia', x: 59, y: 0, w: 41, h: 35, r: 'G1 I1 K1 M1 Q1 S1 U2 X1 Y1' },
    { id: 'sub', sigla: 'AA/GSA/USA', nome: 'Subestação de energia', x: 0, y: 58, w: 19, h: 42, r: 'D1 H1 K1 L1 M1 R1 S1 U2 X1 Y1 Z1' },
    { id: 'man', sigla: 'AA/GSA/USA', nome: 'Serviços Auxiliares — manutenção', x: 21, y: 64, w: 40, h: 36, r: 'D1 E1 H1 I3 J1 K1 L1 M2 P1 R1 S1 T1 U2 X1 Y1 AA1' },
    { id: 'gcb', sigla: 'AA/GCB', nome: 'Gerência de Contabilidade — arquivo setorial', x: 61, y: 64, w: 13, h: 36, r: 'D1 E1 G1 K2 M1 P2 Q1 R1 S1 V1 Y1 Z1' },
    { id: 'ggp', sigla: 'AA/GGP', nome: 'Gerência de Gestão de Pessoas — arquivo setorial', x: 74, y: 64, w: 19, h: 36, r: 'E1 G1 K2 M1 P2 R1 S1 Y1' },
    { id: 'apo', sigla: 'AA/GSA', nome: 'Apoio — Serviços Auxiliares', x: 93, y: 64, w: 7, h: 14, r: 'R1 X1' }
  ]},
  { id: 'p1', nome: '1º Pavimento', curto: '1º', nucleo: [15.5, 38, 72, 23], copa: 'R1 T1 Y1', salas: [
    { id: 'bib', sigla: 'AE/GTI/UDI', nome: 'Biblioteca', x: 6, y: 6, w: 15, h: 32, r: 'F1 G1 K2 M2 P3 R1 X2 Y1' },
    { id: 'ace', sigla: 'AE/GTI/UDI', nome: 'Acervo técnico', x: 21, y: 17, w: 31, h: 21, r: 'G1 K1 M1 P2 R1 X2 Y1' },
    { id: 'gpe', sigla: 'AE/GPE', nome: 'Gerência de Planejamento e Estudos Estratégicos', x: 52, y: 6, w: 21, h: 32, r: 'P2 T2 Y1' },
    { id: 'res', sigla: 'Restaurante', nome: 'Restaurante', x: 73, y: 6, w: 21, h: 32, r: 'P2 R2 V1' },
    { id: 'mapo', sigla: 'AA/GSA/UAD', nome: 'Mapoteca e Acervos Documentais', x: 6, y: 61, w: 34, h: 33, r: 'K3 M1 P1 X1 AA2' },
    { id: 'dex', sigla: 'DEX', nome: 'Diretoria Executiva', x: 40, y: 74, w: 22, h: 20, r: 'Y1' },
    { id: 'aud', sigla: 'Auditório', nome: 'Auditório', x: 62, y: 74, w: 32, h: 20, r: 'R1' },
    { id: 'pro', sigla: 'AA/GSA/UAD', nome: 'Protocolo', x: 66, y: 61, w: 28, h: 13, r: 'P1 Y1' }
  ]},
  { id: 'p2', nome: '2º Pavimento', curto: '2º', nucleo: [15, 36, 68, 28], copa: 'P1 R1 T1 Y1', salas: [
    { id: 'ggp1', sigla: 'AA/GGP', nome: 'Gerência de Gestão de Pessoas', x: 0, y: 0, w: 40, h: 36, r: 'E1 F1 K1 M1 P3 Q1 R1 S1 T1 Y1' },
    { id: 'tre', sigla: 'Treinamento', nome: 'Sala de Treinamento', x: 40, y: 0, w: 12, h: 36, r: 'P2 R2' },
    { id: 'gpe', sigla: 'AE/GPE', nome: 'Gerência de Planejamento e Estudos Estratégicos', x: 52, y: 0, w: 31, h: 33, r: 'P2 T2 Y1' },
    { id: 'ggo', sigla: 'AE/GGO', nome: 'Gerência de Gestão Orçamentária', x: 83, y: 0, w: 17, h: 33, r: 'P2 T2 Y1' },
    { id: 'sl', sigla: 'PR/SL', nome: 'Secretaria de Licitações', x: 0, y: 36, w: 15, h: 28, r: 'P2 R2 T2 U2 Y1' },
    { id: 'ge', sigla: 'AE/GE', nome: 'Área de Gestão Estratégica', x: 83, y: 33, w: 17, h: 31, r: 'P2 T2 Y1' },
    { id: 'gcb', sigla: 'AA/GCB', nome: 'Gerência de Contabilidade', x: 0, y: 64, w: 19.5, h: 36, r: 'D1 E1 G1 K2 M1 P2 R2 T2 U2 Y1 Z1' },
    { id: 'gfn', sigla: 'AA/GFN', nome: 'Gerência de Finanças', x: 19.5, y: 64, w: 16.5, h: 36, r: 'P2 Y1' },
    { id: 'ggp2', sigla: 'AA/GGP', nome: 'Gestão de Pessoas — Desenvolvimento, Relações de Trabalho e Pagamento', x: 36, y: 64, w: 26, h: 36, r: 'P2 R2 T2 Y1' },
    { id: 'aa', sigla: 'AA', nome: 'Área de Gestão Administrativa e Suporte Logístico', x: 62, y: 64, w: 38, h: 36, r: 'P2 R2 T2 Y1' }
  ]},
  { id: 'p3', nome: '3º Pavimento', curto: '3º', nucleo: [15, 36, 68, 28], copa: 'P1 R1 T1 X1 Y1', salas: [
    { id: 'gct', sigla: 'AD/GCT', nome: 'Gerência de Custos', x: 0, y: 0, w: 19, h: 36, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'gep', sigla: 'AD/GEP', nome: 'Gerência de Estudos e Projetos', x: 19, y: 0, w: 21, h: 36, r: 'P2 Q2 R2 T2 Y1' },
    { id: 'gim', sigla: 'AD/GIM', nome: 'Gerência de Implantação de Obras', x: 40, y: 0, w: 17, h: 36, r: 'P2 Q2 R2 T2 Y1' },
    { id: 'gma', sigla: 'AR/GMA', nome: 'Gerência de Meio Ambiente', x: 57, y: 0, w: 13, h: 36, r: 'K1 P1 R1 T1 X1 Y1' },
    { id: 'gsa', sigla: 'AR/GSA', nome: 'Gerência de Empreendimentos Socioambientais', x: 70, y: 0, w: 30, h: 33, r: 'K1 P1 R1 T1 X1 Y1' },
    { id: 'ad', sigla: 'AD', nome: 'Área de Desenvolvimento Integrado e Infraestrutura', x: 0, y: 36, w: 15, h: 28, r: 'P2 Q2 R2 T2 Y1' },
    { id: 'gdt', sigla: 'AR/GDT', nome: 'Gerência de Desenvolvimento Territorial', x: 83, y: 33, w: 17, h: 31, r: 'K1 P2 R1 T1 X1 Y1' },
    { id: 'rack', sigla: 'AE/GTI', nome: 'Sala técnica (rack)', x: 31, y: 64, w: 10, h: 10, r: 'R1 U2' },
    { id: 'ai', sigla: 'AI', nome: 'Área de Gestão dos Empreendimentos de Irrigação', x: 0, y: 64, w: 31, h: 36, r: 'P1 Y1' },
    { id: 'gei', sigla: 'AI/GEI', nome: 'Gerência de Gestão dos Empreendimentos de Irrigação', x: 31, y: 74, w: 21, h: 26, r: 'P1 Y1' },
    { id: 'gap', sigla: 'AI/GAP', nome: 'Gerência de Apoio à Produção', x: 52, y: 64, w: 16, h: 36, r: 'P1 Y1' },
    { id: 'ar', sigla: 'AR', nome: 'Área de Revitalização das Bacias Hidrográficas', x: 68, y: 64, w: 32, h: 36, r: 'K1 P1 R1 T1 X1 Y1' }
  ]},
  { id: 'p4', nome: '4º Pavimento', curto: '4º', nucleo: [16, 36, 68, 28], copa: 'R1 T1 X1 Y1', salas: [
    { id: 'au', sigla: 'PR/AU', nome: 'Auditoria Interna', x: 0, y: 0, w: 18, h: 29, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'acp', sigla: 'PR/ACP', nome: 'Assessoria de Comunicação e Promoção Institucional', x: 18, y: 0, w: 20, h: 29, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'aj', sigla: 'PR/AJ', nome: 'Assessoria Jurídica', x: 38, y: 0, w: 62, h: 21, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'vn', sigla: 'Vida Nova', nome: 'Vida Nova', x: 18, y: 29, w: 7, h: 7, r: '' },
    { id: 'cec', sigla: 'CEC', nome: 'CEC', x: 66, y: 21, w: 9, h: 15, r: 'P1' },
    { id: 'ass', sigla: 'ASSEMCO', nome: 'Associação dos Empregados da Codevasf', x: 75, y: 21, w: 9, h: 15, r: 'P1 R1 T1 Y1' },
    { id: 'co', sigla: 'PR/CO', nome: 'Corregedoria', x: 84, y: 21, w: 16, h: 7, r: '' },
    { id: 'gsa', sigla: 'AA/GSA', nome: 'Serviços Auxiliares', x: 84, y: 28, w: 16, h: 8, r: 'P1' },
    { id: 'gaf', sigla: 'AI/GAF', nome: 'Gerência de Administração Fundiária', x: 84, y: 36, w: 16, h: 28, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'rk1', sigla: 'AE/GTI', nome: 'Sala técnica (rack)', x: 16, y: 64, w: 6, h: 7, r: 'U1' },
    { id: 'cipa', sigla: 'CIPA', nome: 'Sala da Cipa', x: 22, y: 64, w: 6, h: 7, r: '' },
    { id: 'gb', sigla: 'PR/GB', nome: 'Gabinete da Presidência', x: 28, y: 64, w: 7, h: 7, r: '' },
    { id: 'prs', sigla: 'PR', nome: 'Presidência — secretaria', x: 48, y: 64, w: 11, h: 22, r: 'K1 P1 R1 T1 V1 Y1' },
    { id: 'gct', sigla: 'AD/GCT', nome: 'Gerência de Custos', x: 60, y: 64, w: 14, h: 36, r: 'P2 R2 T2 Y1 Z1' },
    { id: 'rk2', sigla: 'AE/GTI', nome: 'Sala técnica (rack)', x: 74, y: 64, w: 9.5, h: 7, r: 'K1 P2 R1 U3' },
    { id: 'ar', sigla: 'AR', nome: 'Área de Revitalização das Bacias Hidrográficas', x: 83.5, y: 64, w: 16.5, h: 8, r: 'K1 P1 R1 T1 X1 Y1' },
    { id: 'goi', sigla: 'AD/GOI', nome: 'Gerência de Operação do Projeto de Integração do São Francisco', x: 74, y: 71, w: 26, h: 29, r: 'N2 P2 R2 T2 Y1 Z1' },
    { id: 'pr', sigla: 'PR', nome: 'Presidência', x: 0, y: 71, w: 40, h: 29, r: 'K1 P1 R1 T1 V1 Y1' },
    { id: 'pra', sigla: 'PR', nome: 'Auditório da Presidência', x: 40, y: 86, w: 20, h: 14, r: 'R1' }
  ]}
];

// Comunicações: dados de exemplo para demonstrar o fluxo de acompanhamento.
const h = (...p) => p.map(([data, situacao, txt]) => ({ data, situacao, txt }));
export const SITUACOES = ['Recebida', 'Em análise', 'Inspeção agendada', 'Concluída'];
export const COMUNICACOES = [
  { protocolo: 'CIPA-2026-0147', data: '14/10/2026', andar: 'sub', sala: 'man', tipo: 'Situação de risco', grupo: 'qui', situacao: 'Em análise', minha: false,
    historico: h(['14/10/2026', 'Recebida', 'Comunicação registrada.'], ['15/10/2026', 'Em análise', 'Classificada como risco químico (vapores de solvente).']) },
  { protocolo: 'CIPA-2026-0146', data: '09/10/2026', andar: 'p2', sala: 'gcb', tipo: 'Situação de risco', grupo: 'aci', situacao: 'Inspeção agendada', minha: true,
    historico: h(['09/10/2026', 'Recebida', 'Comunicação registrada.'], ['10/10/2026', 'Em análise', 'Extensões elétricas sobrecarregadas sob as mesas.'], ['16/10/2026', 'Inspeção agendada', 'Inspeção da Cipa com a manutenção predial em 22/10/2026.']) },
  { protocolo: 'CIPA-2026-0145', data: '07/10/2026', andar: 'p3', sala: 'gep', tipo: 'Quase-acidente', grupo: 'aci', situacao: 'Em análise', minha: false,
    historico: h(['07/10/2026', 'Recebida', 'Comunicação registrada.'], ['08/10/2026', 'Em análise', 'Cabo de rede solto na circulação.']) },
  { protocolo: 'CIPA-2026-0144', data: '02/10/2026', andar: 'p4', sala: 'rk2', tipo: 'Quase-acidente', grupo: 'aci', situacao: 'Inspeção agendada', minha: false,
    historico: h(['02/10/2026', 'Recebida', 'Comunicação registrada.'], ['03/10/2026', 'Em análise', 'Aquecimento no quadro elétrico da sala técnica.'], ['06/10/2026', 'Inspeção agendada', 'Vistoria com eletricista habilitado (NR-10) em 21/10/2026.']) },
  { protocolo: 'CIPA-2026-0142', data: '26/09/2026', andar: 'p2', sala: 'ggp1', tipo: 'Situação de risco', grupo: 'fis', situacao: 'Concluída', minha: false,
    historico: h(['26/09/2026', 'Recebida', 'Comunicação registrada.'], ['29/09/2026', 'Em análise', 'Temperatura elevada no período da tarde.'], ['03/10/2026', 'Concluída', 'Ar-condicionado revisado pela manutenção predial.']) },
  { protocolo: 'CIPA-2026-0141', data: '24/09/2026', andar: 'p4', sala: 'aj', tipo: 'Situação de risco', grupo: 'erg', situacao: 'Em análise', minha: true,
    historico: h(['24/09/2026', 'Recebida', 'Comunicação registrada.'], ['25/09/2026', 'Em análise', 'Cadeiras sem regulagem de altura em parte dos postos.']) },
  { protocolo: 'CIPA-2026-0139', data: '22/09/2026', andar: 'p1', sala: 'mapo', tipo: 'Situação de risco', grupo: 'bio', situacao: 'Concluída', minha: false,
    historico: h(['22/09/2026', 'Recebida', 'Comunicação registrada.'], ['23/09/2026', 'Em análise', 'Mofo em caixas do acervo.'], ['01/10/2026', 'Concluída', 'Acervo higienizado; uso de máscara PFF2 reforçado com a equipe.']) },
  { protocolo: 'CIPA-2026-0136', data: '15/09/2026', andar: 'sub', sala: 'arq', tipo: 'Situação de risco', grupo: 'qui', situacao: 'Concluída', minha: false,
    historico: h(['15/09/2026', 'Recebida', 'Comunicação registrada.'], ['16/09/2026', 'Em análise', 'Acúmulo de poeira nas estantes altas.'], ['25/09/2026', 'Concluída', 'Limpeza úmida incluída na rotina mensal do arquivo.']) },
  { protocolo: 'CIPA-2026-0133', data: '10/09/2026', andar: 'p3', sala: 'copa', tipo: 'Quase-acidente', grupo: 'aci', situacao: 'Concluída', minha: false,
    historico: h(['10/09/2026', 'Recebida', 'Comunicação registrada.'], ['11/09/2026', 'Em análise', 'Piso molhado sem sinalização.'], ['12/09/2026', 'Concluída', 'Placas de piso molhado disponibilizadas na copa.']) },
  { protocolo: 'CIPA-2026-0131', data: '05/09/2026', andar: 'p2', sala: 'sl', tipo: 'Situação de risco', grupo: 'aci', situacao: 'Concluída', minha: false,
    historico: h(['05/09/2026', 'Recebida', 'Comunicação registrada.'], ['08/09/2026', 'Em análise', 'Caixas obstruindo a saída da sala.'], ['10/09/2026', 'Concluída', 'Material remanejado para o depósito do subsolo.']) },
  { protocolo: 'CIPA-2026-0128', data: '28/08/2026', andar: 'p4', sala: 'goi', tipo: 'Situação de risco', grupo: 'erg', situacao: 'Concluída', minha: false,
    historico: h(['28/08/2026', 'Recebida', 'Comunicação registrada.'], ['29/08/2026', 'Em análise', 'Monitores sem suporte de altura.'], ['15/09/2026', 'Concluída', 'Suportes de monitor entregues ao setor.']) },
  { protocolo: 'CIPA-2026-0124', data: '19/08/2026', andar: 'p1', sala: 'res', tipo: 'Acidente', grupo: 'aci', situacao: 'Concluída', minha: false,
    historico: h(['19/08/2026', 'Recebida', 'Comunicação registrada.'], ['19/08/2026', 'Em análise', 'Queda em degrau sem sinalização na entrada.'], ['30/08/2026', 'Concluída', 'Fita antiderrapante e sinalização instaladas no degrau.']) }
];

export const AJUDA = [
  { title: 'O que é o mapa de risco?', content: 'É a representação gráfica dos riscos presentes em cada local de trabalho, feita sobre a planta do edifício. A Cipa elabora o mapa com a participação dos empregados de cada setor, e ele orienta as medidas de prevenção.' },
  { title: 'Como leio as cores e os tamanhos dos círculos?', content: 'A cor indica o grupo de risco: vermelho para químico, azul para acidentes, marrom para biológico, verde para físico e amarelo para ergonômico. O tamanho indica o grau: círculo pequeno, médio ou grande. Passe o mouse sobre um setor para ver o resumo e clique para abrir a ficha completa.' },
  { title: 'Encontrei uma situação de risco. O que faço?', content: 'Use a opção Comunicar risco, no topo do site ou na ficha do setor. Informe o local, descreva a situação e, se possível, anexe fotos. A Cipa analisa cada comunicação e informa o andamento pelo número de protocolo.' },
  { title: 'Posso comunicar de forma anônima?', content: 'Sim. A opção de envio anônimo vem marcada por padrão. Nesse caso, guarde o número de protocolo para acompanhar a comunicação.' },
  { title: 'Como comunico uma situação de assédio?', content: 'Escolha a opção Assédio ou conduta inadequada no formulário de comunicação. O tratamento é sigiloso, conforme a Lei nº 14.457/2022 e a NR-5, e você não precisa se identificar.' },
  { title: 'Como acompanho a minha comunicação?', content: 'Acesse Acompanhar comunicação e informe o número de protocolo recebido no envio. Se você entrou com a conta gov.br, suas comunicações aparecem listadas automaticamente.' },
  { title: 'Com que frequência o mapa é atualizado?', content: 'O mapa é revisado a cada mandato da Cipa e sempre que houver mudança de layout, nova atividade no setor ou comunicação de risco confirmada pela inspeção.' },
  { title: 'O que fazer em caso de emergência?', content: 'Em emergência, ligue 193 (Corpo de Bombeiros) ou 192 (Samu), acione a brigada do prédio e siga as rotas de fuga sinalizadas. Não use os elevadores em caso de incêndio.' }
];

export const NORMAS = [
  { nr: 'NR-1', titulo: 'Disposições gerais e gerenciamento de riscos ocupacionais', uso: 'Base do Gerenciamento de Riscos Ocupacionais (GRO) e do Programa de Gerenciamento de Riscos (PGR). Inclui os fatores de risco psicossociais relacionados ao trabalho.' },
  { nr: 'NR-5', titulo: 'Comissão Interna de Prevenção de Acidentes e de Assédio', uso: 'Atribui à Cipa acompanhar a identificação de perigos e a avaliação de riscos e propor medidas de prevenção. O mapa é a ferramenta da Cipa para isso.' },
  { nr: 'NR-6', titulo: 'Equipamentos de Proteção Individual', uso: 'Define quando e como fornecer EPIs. Cada ficha de setor indica os EPIs recomendados por agente de risco.' },
  { nr: 'NR-9', titulo: 'Avaliação e controle das exposições a agentes físicos, químicos e biológicos', uso: 'Orienta a avaliação de ruído, calor, poeiras, fungos e demais agentes ambientais registrados no mapa.' },
  { nr: 'NR-10', titulo: 'Segurança em instalações e serviços em eletricidade', uso: 'Aplica-se à subestação, às salas técnicas e aos quadros elétricos dos pavimentos.' },
  { nr: 'NR-17', titulo: 'Ergonomia', uso: 'Mobiliário, postura, iluminação, pausas e organização do trabalho nos postos administrativos.' },
  { nr: 'NR-23', titulo: 'Proteção contra incêndios', uso: 'Extintores, rotas de fuga, saídas de emergência e brigada em todos os pavimentos.' },
  { nr: 'NR-26', titulo: 'Sinalização e identificação de segurança', uso: 'Sinalização de rotas, desníveis, produtos químicos e áreas restritas.' }
];
