export type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Cosa significa “moda sostenibile”?",
    options: [
      "Moda con vestiti colorati",
      "Moda che rispetta l’ambiente e le persone",
      "Moda che segue le tendenze",
      "Moda molto costosa",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "Qual è un buon modo per rendere il proprio guardaroba più sostenibile?",
    options: [
      "Comprare vestiti ogni settimana",
      "Gettare i vestiti vecchi subito",
      "Seguire solo le mode del momento",
      "Riutilizzare e riparare i vestiti",
    ],
    correctIndex: 3,
  },
  {
    id: 3,
    text: "Quale certificazione garantisce che un capo è stato prodotto rispettando criteri ambientali e sociali?",
    options: ["Made in Italy", "GOTS", "Outlet", "Fast Fashion"],
    correctIndex: 1,
  },
  {
    id: 4,
    text: "Quale tra queste frasi descrive meglio il fast fashion?",
    options: [
      "Abiti prodotti lentamente e su misura",
      "Collezioni stagionali prodotte con materiali naturali",
      "Vestiti economici prodotti velocemente e in grandi quantità",
      "Moda di lusso accessibile a tutti",
    ],
    correctIndex: 2,
  },
  {
    id: 5,
    text: "Quale tra questi impatti ambientali è spesso legato alla produzione intensiva di capi in fast fashion?",
    options: [
      "Riduzione dei costi per i consumatori",
      "Incremento del turismo locale",
      "Inquinamento delle acque da microfibre sintetiche",
      "Aumento della biodiversità nelle città",
    ],
    correctIndex: 2,
  },
];
