export const siteData = {
    name: "Gabriel",
    role: "Jr Full Stack Developer",
    bioHeader: "Quem está por trás do código",
    heroBio: "Transformo lógica em aplicações com propósito e intenção. Desenvolvedor guiado por IA.",
    aboutBio: [
        "Todo sistema começa com um **sinal claro**. Durante minha trajetória na **FATEC**, a engenharia de software deixou de ser conceito e virou direção para mim. Descobri em meus estudos que assim como em uma transmissão impecável, a melhor engenharia **entrega a mensagem** sem que ninguém perceba o **meio**.",
        "Desde então, persigo esse padrão e transmito esse sinal em meus **projetos** variados. Construo aplicações que comunicam intenção em cada linha. Backend que **aguenta**, mobile que **flui**, IA que **potencializa**.",
        "Procuro um ambiente onde o padrão seja alto e o **aprendizado constante**. Quero trabalhar em produtos que as pessoas usem de verdade, que fiquem **melhores a cada deploy**."
    ],
    email: "gpereiragsantos@gmail.com",
    location: "Pindamonhangaba, SP - Brasil",
    socials: {
        github: "https://github.com/gabirusky",
        linkedin: "https://linkedin.com/in/gpereiragsantos",
    },
    skills: [
        { name: "KOTLIN", icon: "fab fa-android", colorClass: "text-neon-green" },
        { name: "PYTHON", icon: "fab fa-python", colorClass: "text-yellow-400" },
        { name: "JAVASCRIPT", icon: "fab fa-js", colorClass: "text-yellow-300" },
        { name: "SQL", icon: "fas fa-database", colorClass: "text-neon-blue" },
        { name: "REACT", icon: "fab fa-react", colorClass: "text-cyan-400" },
        { name: "MOBILE", icon: "fas fa-mobile-alt", colorClass: "text-white" },
        { name: "TAILWIND", icon: "fab fa-css3", colorClass: "text-white" },
        { name: "GIT", icon: "fab fa-git", colorClass: "text-white" },
        { name: "JAVA", icon: "fab fa-java", colorClass: "text-orange-400" },
        { name: "SPRING BOOT", icon: "fas fa-leaf", colorClass: "text-green-500" }
    ],
    projects: [
        {
            title: "LedgerSimulator",
            description: "Backend fintech de alta performance para simular contabilidade de partida dobrada, transações atômicas e logs imutáveis.",
            tags: ["Spring Boot", "Java", "Fintech"],
            githubUrl: "https://github.com/gabirusky/LedgerSimulator",
            icon: "fas fa-exchange-alt",
            brandIcon: "fab fa-java",
            primaryColor: "green-500"
        },
        {
            title: "DoseCerta",
            description: "App mobile para gestão de medicamentos com alarmes e lembretes inteligentes para adesão ao tratamento.",
            tags: ["Kotlin", "Mobile"],
            githubUrl: "https://github.com/gabirusky/DoseCerta",
            icon: "fas fa-pills",
            brandIcon: "fab fa-android",
            primaryColor: "neon-green" // Using our custom neon-green
        },
        {
            title: "pinda.clima",
            description: "Visualização de dados climáticos e projeções para Pindamonhangaba.",
            tags: ["Python", "React", "Data"],
            githubUrl: "https://github.com/gabirusky/clima.pinda",
            icon: "fas fa-temperature-high",
            brandIcon: "fas fa-chart-line",
            primaryColor: "cyan-400"
        },
        {
            title: "InstaScraper",
            description: "Ferramenta educacional para raspar e baixar fotos recentes de perfis públicos do Instagram em lote.",
            tags: ["Python", "Automation"],
            githubUrl: "https://github.com/gabirusky/InstaScraper",
            icon: "fas fa-camera-retro",
            brandIcon: "fab fa-python",
            primaryColor: "yellow-400"
        },
        {
            title: "KBM Security",
            description: "Site institucional para empresa especializada em Red Team e Pentest, com design moderno e responsivo.",
            tags: ["HTML5", "Tailwind", "Security"],
            githubUrl: "https://github.com/KbmSecurity/kbmsecurity.github.io",
            icon: "fas fa-shield-halved",
            brandIcon: "fab fa-html5",
            primaryColor: "cyan-400"
        },
        {
            title: "interview.java",
            description: "Guia de preparação para entrevistas em Java, com conceitos core, coleções, concorrência e problemas práticos.",
            tags: ["Java", "Spring", "React"],
            githubUrl: "https://github.com/gabirusky/interview.java",
            icon: "fab fa-java",
            brandIcon: "fas fa-code",
            primaryColor: "orange-400"
        }
    ]
};
