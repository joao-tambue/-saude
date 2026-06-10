export type ReportStatus = "pendente" | "enviado" | "rejeitado" | "aprovado"
export type ReportFormat = "PDF" | "CSV" | "XLSX"

export interface Report {
  id: string
  nome: string
  dataEmissao: string
  localizacao: string
  formato: ReportFormat
  nivelRisco: number
  status: ReportStatus
}

export const mockReports: Report[] = [
  { id: "1",  nome: "Hospital 1",            dataEmissao: "21-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 70, status: "enviado"   },
  { id: "2",  nome: "Paulo Marques",          dataEmissao: "21-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 70, status: "pendente"  },
  { id: "3",  nome: "Hospital 1",            dataEmissao: "22-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 85, status: "aprovado"  },
  { id: "4",  nome: "Hospital 1Pu",          dataEmissao: "22-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 55, status: "pendente"  },
  { id: "5",  nome: "Hospital 1",            dataEmissao: "23-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 70, status: "enviado"   },
  { id: "6",  nome: "Hospital 1",            dataEmissao: "23-03-2022", localizacao: "Luanda, Talatona",     formato: "XLSX", nivelRisco: 90, status: "rejeitado" },
  { id: "7",  nome: "Hospital 1",            dataEmissao: "24-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 60, status: "pendente"  },
  { id: "8",  nome: "Hospital 1",            dataEmissao: "24-03-2022", localizacao: "Luanda, Talatona",     formato: "CSV",  nivelRisco: 70, status: "enviado"   },
  { id: "9",  nome: "Hospital 1",            dataEmissao: "25-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 75, status: "aprovado"  },
  { id: "10", nome: "Hospital 1",            dataEmissao: "25-03-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 70, status: "enviado"   },
  { id: "11", nome: "Clínica São Lucas",     dataEmissao: "01-04-2022", localizacao: "Luanda, Viana",        formato: "PDF",  nivelRisco: 45, status: "pendente"  },
  { id: "12", nome: "Maria dos Santos",      dataEmissao: "01-04-2022", localizacao: "Luanda, Viana",        formato: "PDF",  nivelRisco: 80, status: "enviado"   },
  { id: "13", nome: "Centro Saúde Rangel",   dataEmissao: "02-04-2022", localizacao: "Luanda, Rangel",       formato: "XLSX", nivelRisco: 65, status: "aprovado"  },
  { id: "14", nome: "João Baptista",         dataEmissao: "02-04-2022", localizacao: "Luanda, Rangel",       formato: "PDF",  nivelRisco: 30, status: "pendente"  },
  { id: "15", nome: "Hospital Américo Boa",  dataEmissao: "03-04-2022", localizacao: "Luanda, Maianga",      formato: "PDF",  nivelRisco: 95, status: "rejeitado" },
  { id: "16", nome: "Ana Ferreira",          dataEmissao: "03-04-2022", localizacao: "Luanda, Maianga",      formato: "CSV",  nivelRisco: 50, status: "pendente"  },
  { id: "17", nome: "Hospital Central",      dataEmissao: "04-04-2022", localizacao: "Luanda, Ingombota",    formato: "PDF",  nivelRisco: 85, status: "enviado"   },
  { id: "18", nome: "Posto Saúde Benfica",   dataEmissao: "04-04-2022", localizacao: "Luanda, Benfica",      formato: "PDF",  nivelRisco: 40, status: "aprovado"  },
  { id: "19", nome: "Carlos Mendes",         dataEmissao: "05-04-2022", localizacao: "Luanda, Benfica",      formato: "XLSX", nivelRisco: 70, status: "pendente"  },
  { id: "20", nome: "Hospital Josina Machel",dataEmissao: "05-04-2022", localizacao: "Luanda, Ingombota",    formato: "PDF",  nivelRisco: 75, status: "enviado"   },
  { id: "21", nome: "Isabel Neto",           dataEmissao: "06-04-2022", localizacao: "Luanda, Samba",        formato: "PDF",  nivelRisco: 55, status: "pendente"  },
  { id: "22", nome: "Clínica Girassol",      dataEmissao: "06-04-2022", localizacao: "Luanda, Talatona",     formato: "PDF",  nivelRisco: 20, status: "aprovado"  },
  { id: "23", nome: "Pedro Lopes",           dataEmissao: "07-04-2022", localizacao: "Luanda, Cazenga",      formato: "CSV",  nivelRisco: 90, status: "rejeitado" },
  { id: "24", nome: "Hospital Militar",      dataEmissao: "07-04-2022", localizacao: "Luanda, Maianga",      formato: "PDF",  nivelRisco: 65, status: "enviado"   },
  { id: "25", nome: "Rosa António",          dataEmissao: "08-04-2022", localizacao: "Luanda, Cazenga",      formato: "PDF",  nivelRisco: 70, status: "pendente"  },
  { id: "26", nome: "Centro Saúde Sambizanga",dataEmissao:"08-04-2022", localizacao: "Luanda, Sambizanga",   formato: "XLSX", nivelRisco: 80, status: "aprovado"  },
  { id: "27", nome: "Tomás Vieira",          dataEmissao: "09-04-2022", localizacao: "Luanda, Sambizanga",   formato: "PDF",  nivelRisco: 35, status: "pendente"  },
  { id: "28", nome: "Hospital Prenda",       dataEmissao: "09-04-2022", localizacao: "Luanda, Kilamba Kiaxi",formato: "PDF",  nivelRisco: 70, status: "enviado"   },
  { id: "29", nome: "Conceição da Silva",    dataEmissao: "10-04-2022", localizacao: "Luanda, Kilamba Kiaxi",formato: "CSV",  nivelRisco: 60, status: "pendente"  },
  { id: "30", nome: "Clínica Sagrada Esperança",dataEmissao:"10-04-2022",localizacao:"Luanda, Talatona",     formato: "PDF",  nivelRisco: 45, status: "aprovado"  },
]