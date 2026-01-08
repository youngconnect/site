"use client";

import { Download } from 'lucide-react';

const CorvetasManutencao = () => {
  const equipas = [
    {
      numero: "N.º 1",
      nome: "Equipa de Armas",
      pais: "ITÁLIA",
      periodo: "7 Janeiro à 3 de Abril",
      membros: [
        { posto: "TN", nome: "Maudio Alfredo Ambriz", funcao: "Chefe do Departamento de Operações" },
        { posto: "TFR", nome: "Cláudio José Landa", funcao: "Subchefe do Departamento de Armamento" },
        { posto: "1.º SGT", nome: "Luís Pacavira Bento", funcao: "Técnico de Armamento" },
        { posto: "1.º SGT", nome: "Elias Pelagio Prata", funcao: "Técnico de Armamento" },
        { posto: "MR", nome: "José Chimbungu Franca", funcao: "Técnico de Armamento (Mísseis)" },
        { posto: "MR", nome: "Joel Pericles Jupula Bernardo", funcao: "Técnico de Armamento (Mísseis)" },
        { posto: "MR", nome: "José da Costa Bongue", funcao: "Técnico de Armamento (Artilharia)" },
        { posto: "MR", nome: "Justino Colaia Joia Ngaioma", funcao: "Técnico de Armamento (AK47)" }
      ]
    },
    {
      numero: "N.º 2",
      nome: "Equipa de Convés e Navegação",
      pais: "ITÁLIA",
      periodo: "12 de Janeiro à 06 de Fevereiro",
      membros: [
        { posto: "TN", nome: "Olavo Pedro", funcao: "Chefe do Departamento de Convés e Navegação" },
        { posto: "TFR", nome: "Melchior Botelho Cardoso da Cruz", funcao: "Subchefe do Departamento de Convés e Navegação" },
        { posto: "MR", nome: "Lourenço Quibinda Bandera", funcao: "Técnico de Convés e Navegação" },
        { posto: "MR", nome: "Juelson Júlio João Quinguri", funcao: "Técnico de Convés e Navegação" }
      ]
    },
    {
      numero: "N.º 3",
      nome: "Equipa de Operações",
      pais: "ITÁLIA",
      periodo: "12 de Jan à 6 de Fevereiro; 2 de Março à 24 de Abril; 1-4 de Junho; 15-27 de Junho",
      membros: [
        { posto: "TN", nome: "Edson Alexandre de Melo", funcao: "Chefe do Departamento de Operações" },
        { posto: "TN", nome: "Irineu Miguel", funcao: "Chefe Adjunto do departamento" },
        { posto: "1.º SGT", nome: "Joel dos Santos Segunda", funcao: "Técnico de Operações" },
        { posto: "MR", nome: "Júlio Metuma", funcao: "Técnico de Operações" }
      ]
    },
    {
      numero: "N.º 4",
      nome: "Equipa de Mecânica",
      pais: "FRANÇA",
      periodo: "5-17 de Fevereiro; 23 Fev à 04 de Março; 16-20 de Março; 8-30 de Junho",
      membros: [
        { posto: "TN", nome: "José Duarte de Almeida Quituxi", funcao: "Chefe do Departamento Mecânico" },
        { posto: "TN", nome: "Luís Hélder Veloso", funcao: "Subchefe do Departamento Mecânico" },
        { posto: "TN", nome: "Edvaldo Dário Saraiva Vilola", funcao: "Subchefe do Departamento Mecânico" },
        { posto: "1.º SGT", nome: "João Manel Demsi", funcao: "Técnico Mecânico" },
        { posto: "1.º SGT", nome: "Benedito Manuel Lucas", funcao: "Técnico Mecânico" },
        { posto: "1.º SGT", nome: "Eliandro da Silva Burity", funcao: "Técnico Mecânico" }
      ]
    },
    {
      numero: "N.º 5",
      nome: "Equipa de Electricidade",
      pais: "FRANÇA",
      periodo: "5-17 de Fevereiro; 23 Fev à 04 de Março; 16-20 de Março; 8-30 de Junho",
      membros: [
        { posto: "TN", nome: "Mateus João André", funcao: "Chefe do Departamento Elétrico" },
        { posto: "TN", nome: "Alexandrino da Silva Francês", funcao: "Chefe do Departamento Elétrico" },
        { posto: "TFR", nome: "Fernando Alberto João N'donga", funcao: "Subchefe do Departamento Elétrico" },
        { posto: "SA", nome: "José Alberto Miguel", funcao: "Técnico Elétrico" },
        { posto: "SA", nome: "António Gil Luís Lima Neto", funcao: "Técnico Elétrico" },
        { posto: "SCH", nome: "Francisco Simão Caetano da Costa", funcao: "Técnico Elétrico" }
      ]
    }
  ];

  const suplentes = [
    {
      numero: "N.º 1",
      nome: "Equipa de Armas",
      pais: "ITÁLIA",
      periodo: "2 de Março à 3 de Abril",
      membros: [
        { posto: "MR", nome: "Jeremias Manuel Gomes", funcao: "Técnico de Armamento" },
        { posto: "MR", nome: "José de Arcanjo Chiwale", funcao: "Técnico de Armamento" },
        { posto: "CV", nome: "Nsimba Adão Lando", funcao: "Técnico de Armamento" },
        { posto: "MR", nome: "João Cardan Alves Domingos", funcao: "Técnico de Armamento" }
      ]
    },
    {
      numero: "N.º 3",
      nome: "Equipa de Operações",
      pais: "ITÁLIA",
      periodo: "2-20 de Março; 14-24 de Abril",
      membros: [
        { posto: "MR", nome: "Ildo M. dos Santos", funcao: "Técnico de Operações" },
        { posto: "CV", nome: "Juvenal Cabral André Martins", funcao: "Técnico de Operações" },
        { posto: "MR", nome: "Jubal Barros Nunes", funcao: "Técnico de Operações" },
        { posto: "MR", nome: "Ilídio Missoque Domingos", funcao: "Técnico de Operações" },
        { posto: "MR", nome: "Justino Calei Vanduce", funcao: "Técnico de Operações" }
      ]
    }
  ];

  const drones = [
    {
      numero: "N.º 6",
      nome: "Base de Drones - Manutenção",
      pais: "SUÍÇA",
      periodo: "2 de Novembro à 11 de Dezembro",
      membros: [
        { posto: "TFR", nome: "Pedro João" },
        { posto: "TFR", nome: "Mercúrio Mbituvanga Domingos" },
        { posto: "TFR", nome: "Levis Lukeny Lunho Junquaira" },
        { posto: "TFR", nome: "Victorino da Silva Simão" }
      ]
    },
    {
      numero: "N.º 6",
      nome: "Drones - Tripulações",
      pais: "SUÍÇA",
      periodo: "2 de Novembro à 11 de Dezembro",
      membros: [
        { posto: "TFR", nome: "Valdar João Raimundo Francisco" },
        { posto: "TFR", nome: "Eduardo Ipanga Quingeraia Tchipoya" },
        { posto: "TFR", nome: "José Vladimiro Mateus" },
        { posto: "TFR", nome: "Metusalem Pedro Munioz" }
      ]
    }
  ];

  const generateDocx = () => {
    let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      font-size: 11pt;
      margin: 2cm;
    }
    h1 {
      text-align: center;
      font-size: 18pt;
      font-weight: bold;
      margin-bottom: 30px;
    }
    h2 {
      font-size: 14pt;
      font-weight: bold;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .equipa-container {
      margin-bottom: 40px;
      border: 1px solid #000;
    }
    .equipa-header {
      background-color: #FDB98E;
      padding: 10px;
      font-weight: bold;
      font-size: 12pt;
      border-bottom: 1px solid #000;
    }
    .equipa-info {
      padding: 10px;
      background-color: #E8E8E8;
      border-bottom: 1px solid #000;
    }
    .equipa-info p {
      margin: 2px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11pt;
    }
    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #D9D9D9;
      font-weight: bold;
    }
    .total-box {
      text-align: center;
      font-weight: bold;
      font-size: 14pt;
      margin-top: 40px;
      padding: 15px;
      border: 2px solid #000;
    }
  </style>
</head>
<body>
  <h1>EQUIPAS DE MANUTENÇÃO DAS CORVETAS BR71 MKII</h1>
`;

    // Equipas principais
    equipas.forEach((equipa) => {
      htmlContent += `
  <div class="equipa-container">
    <div class="equipa-header">${equipa.numero} - ${equipa.nome}</div>
    <div class="equipa-info">
      <p><strong>País de Formação:</strong> ${equipa.pais}</p>
      <p><strong>Período:</strong> ${equipa.periodo}</p>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">POSTO</th>
          <th style="width: 35%;">NOME</th>
          <th style="width: 50%;">FUNÇÃO</th>
        </tr>
      </thead>
      <tbody>
`;
      equipa.membros.forEach(membro => {
        htmlContent += `
        <tr>
          <td>${membro.posto}</td>
          <td>${membro.nome}</td>
          <td>${membro.funcao}</td>
        </tr>
`;
      });
      htmlContent += `
      </tbody>
    </table>
  </div>
`;
    });

    // Suplentes
    htmlContent += `\n  <h2>SUPLENTES</h2>\n`;
    suplentes.forEach(equipa => {
      htmlContent += `
  <div class="equipa-container">
    <div class="equipa-header">${equipa.numero} - ${equipa.nome} (Suplentes)</div>
    <div class="equipa-info">
      <p><strong>País de Formação:</strong> ${equipa.pais}</p>
      <p><strong>Período:</strong> ${equipa.periodo}</p>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">POSTO</th>
          <th style="width: 35%;">NOME</th>
          <th style="width: 50%;">FUNÇÃO</th>
        </tr>
      </thead>
      <tbody>
`;
      equipa.membros.forEach(membro => {
        htmlContent += `
        <tr>
          <td>${membro.posto}</td>
          <td>${membro.nome}</td>
          <td>${membro.funcao}</td>
        </tr>
`;
      });
      htmlContent += `
      </tbody>
    </table>
  </div>
`;
    });

    // Drones
    htmlContent += `\n  <h2>EQUIPAS DE MANUTENÇÃO E PILOTOS DE DRONES</h2>\n`;
    drones.forEach(equipa => {
      htmlContent += `
  <div class="equipa-container">
    <div class="equipa-header">${equipa.numero} - ${equipa.nome}</div>
    <div class="equipa-info">
      <p><strong>País de Formação:</strong> ${equipa.pais}</p>
      <p><strong>Período:</strong> ${equipa.periodo}</p>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">POSTO</th>
          <th style="width: 85%;">NOME</th>
        </tr>
      </thead>
      <tbody>
`;
      equipa.membros.forEach(membro => {
        htmlContent += `
        <tr>
          <td>${membro.posto}</td>
          <td>${membro.nome}</td>
        </tr>
`;
      });
      htmlContent += `
      </tbody>
    </table>
  </div>
`;
    });

    // Total
    htmlContent += `
  <div class="total-box">
    TOTAL GERAL: 45 PESSOAS
  </div>
</body>
</html>
`;

    const blob = new Blob(['\ufeff', htmlContent], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Equipas_Manutencao_Corvetas_BR71_MKII.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center flex-1">
          EQUIPAS DE MANUTENÇÃO DAS CORVETAS BR71 MKII
        </h1>
        <button
          onClick={generateDocx}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Exportar para Word
        </button>
      </div>

      {/* Preview */}
      <div className="space-y-8">
        {equipas.map((equipa, idx) => (
          <div key={idx} className="border border-black">
            <div className="bg-orange-300 p-3 border-b border-black">
              <h2 className="font-bold text-base">{equipa.numero} - {equipa.nome}</h2>
            </div>
            <div className="p-3 bg-gray-200 border-b border-black">
              <p className="text-sm"><span className="font-semibold">País de Formação:</span> {equipa.pais}</p>
              <p className="text-sm"><span className="font-semibold">Período:</span> {equipa.periodo}</p>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '15%'}}>POSTO</th>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '35%'}}>NOME</th>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '50%'}}>FUNÇÃO</th>
                </tr>
              </thead>
              <tbody>
                {equipa.membros.map((membro, mIdx) => (
                  <tr key={mIdx}>
                    <td className="p-2 border border-black">{membro.posto}</td>
                    <td className="p-2 border border-black">{membro.nome}</td>
                    <td className="p-2 border border-black">{membro.funcao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-10 mb-6">SUPLENTES</h2>
      <div className="space-y-8">
        {suplentes.map((equipa, idx) => (
          <div key={idx} className="border border-black">
            <div className="bg-orange-300 p-3 border-b border-black">
              <h3 className="font-bold text-base">{equipa.numero} - {equipa.nome} (Suplentes)</h3>
            </div>
            <div className="p-3 bg-gray-200 border-b border-black">
              <p className="text-sm"><span className="font-semibold">País de Formação:</span> {equipa.pais}</p>
              <p className="text-sm"><span className="font-semibold">Período:</span> {equipa.periodo}</p>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '15%'}}>POSTO</th>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '35%'}}>NOME</th>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '50%'}}>FUNÇÃO</th>
                </tr>
              </thead>
              <tbody>
                {equipa.membros.map((membro, mIdx) => (
                  <tr key={mIdx}>
                    <td className="p-2 border border-black">{membro.posto}</td>
                    <td className="p-2 border border-black">{membro.nome}</td>
                    <td className="p-2 border border-black">{membro.funcao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-10 mb-6">EQUIPAS DE MANUTENÇÃO E PILOTOS DE DRONES</h2>
      <div className="space-y-8">
        {drones.map((equipa, idx) => (
          <div key={idx} className="border border-black">
            <div className="bg-orange-300 p-3 border-b border-black">
              <h3 className="font-bold text-base">{equipa.numero} - {equipa.nome}</h3>
            </div>
            <div className="p-3 bg-gray-200 border-b border-black">
              <p className="text-sm"><span className="font-semibold">País de Formação:</span> {equipa.pais}</p>
              <p className="text-sm"><span className="font-semibold">Período:</span> {equipa.periodo}</p>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '15%'}}>POSTO</th>
                  <th className="p-2 text-left border border-black font-bold" style={{width: '85%'}}>NOME</th>
                </tr>
              </thead>
              <tbody>
                {equipa.membros.map((membro, mIdx) => (
                  <tr key={mIdx}>
                    <td className="p-2 border border-black">{membro.posto}</td>
                    <td className="p-2 border border-black">{membro.nome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 border-2 border-black text-center">
        <p className="text-xl font-bold">TOTAL GERAL: 45 PESSOAS</p>
      </div>
    </div>
  );
};

export default CorvetasManutencao;