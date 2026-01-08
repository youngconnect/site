export const HEADER_APP_MENU_ITEMS = [
    { label: "Pagina Inicial", url: "/" },
    { 
        label: "Serviços", 
        url: "/services",
        submenu: [
            { 
                label: "ERP",
                url: "/services/erp",
                description: "Beautifully designed components built with Tailwind CSS."
            },
            { 
                label: "Design", 
                url: "/services/design",
                description: "Acreditamos que um bom design não é apenas uma questão de estética; trata-se de criar experiências intuitivas e fluidas para o usuário.",
            },
            { 
                label: "Engenharia de Software", 
                url: "/services/engineering",
                description: "Seguimos metodologias padrão do setor e empregamos ferramentas eficazes de comunicação e colaboração para mantê-lo informado durante todo o processo de desenvolvimento.",
            },
            { 
                label: "Gestão de Projectos", 
                url: "/services/project-management",
                description: "How to install dependencies and structure your app.",
            },
        ]
    },
    { label: "Portfólio", url: "/portfolio" },
    { label: "Processo", url: "/process" },
    { label: "Sobre", url: "/about" },
    { label: "Contactar", url: "/contact-us" },
];
