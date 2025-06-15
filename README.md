<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universo Doug - O Primeiro Humanoide Educador do Brasil</title>
    <meta name="description" content="Conheça Doug, o primeiro humanoide educador do Brasil. Instituto Somar apresenta tecnologia revolucionária para transformar a educação com 20 workshops inovadores.">
    
    <!-- Fontes Tecnológicas -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome para ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --azul-primario: #1E3A8A;
            --azul-secundario: #3B82F6;
            --azul-claro: #DBEAFE;
            --prata-primaria: #E5E7EB;
            --prata-escura: #6B7280;
            --prata-metalica: #F8FAFC;
            --branco: #FFFFFF;
            --preto: #000000;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--azul-primario);
            background: linear-gradient(135deg, var(--prata-metalica) 0%, var(--azul-claro) 100%);
            overflow-x: hidden;
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(248, 250, 252, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--prata-primaria);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--azul-primario);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo img {
            height: 40px; /* Ajuste o tamanho da logo conforme necessário */
            background: transparent; /* Garante que o fundo da logo seja transparente */
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1.5rem; /* Reduzindo o espaçamento para caber mais itens */
            align-items: center;
            flex-wrap: wrap; /* Permite que os itens quebrem a linha se não houver espaço */
            justify-content: flex-end; /* Alinha os itens à direita */
        }

        .nav-link {
            font-family: 'Exo 2', sans-serif;
            font-weight: 500;
            color: var(--azul-primario);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-link:hover {
            background: linear-gradient(135deg, var(--azul-secundario), var(--azul-primario));
            color: var(--branco);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .cta-button {
            background: linear-gradient(135deg, var(--azul-secundario), var(--azul-primario));
            color: var(--branco);
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--azul-primario) 0%, var(--azul-secundario) 100%);
            color: var(--branco);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }

        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 2;
        }

        .hero-title {
            font-family: 'Orbitron', monospace;
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--branco), var(--prata-primaria));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .hero-video {
            width: 100%;
            max-width: 600px;
            height: 400px;
            border-radius: 20px;
            margin: 2rem auto;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .video-placeholder {
            text-align: center;
            color: var(--branco);
        }

        .video-placeholder i {
            font-size: 4rem;
            margin-bottom: 1rem;
            opacity: 0.7;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--branco), var(--prata-primaria));
            color: var(--azul-primario);
            padding: 1rem 2rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: var(--branco);
            padding: 1rem 2rem;
            border: 2px solid var(--branco);
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: var(--branco);
            color: var(--azul-primario);
            transform: translateY(-3px);
        }

        /* Seções */
        .section {
            padding: 4rem 2rem; /* Reduzindo o padding para harmonizar espaçamento */
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2.5rem; /* Ajustando margem */
            background: linear-gradient(135deg, var(--azul-primario), var(--azul-secundario));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.2rem;
            text-align: center;
            color: var(--prata-escura);
            margin-bottom: 2.5rem; /* Ajustando margem */
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Cards */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2.5rem; /* Ajustando margem */
        }

        .card {
            background: var(--branco);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
            transition: all 0.3s ease;
            border: 1px solid var(--prata-primaria);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--azul-secundario), var(--azul-primario));
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
        }

        .card-icon {
            font-size: 3rem;
            color: var(--azul-secundario);
            margin-bottom: 1rem;
        }

        .card-title {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--azul-primario);
        }

        .card-text {
            color: var(--prata-escura);
            line-height: 1.6;
        }

        /* Doug Section */
        .doug-section {
            background: linear-gradient(135deg, var(--prata-metalica), var(--azul-claro));
            border-radius: 30px;
            margin: 3rem 0;
            overflow: hidden;
        }

        .doug-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
            padding: 3rem;
        }

        .doug-image {
            text-align: center;
        }

        /* Removendo doug-placeholder e usando a imagem diretamente */
        .doug-image img {
            width: 100%;
            max-width: 400px;
            border-radius: 20px;
            margin: 0 auto;
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.3);
        }

        .doug-features {
            display: grid;
            gap: 1.5rem;
        }

        .feature {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: var(--branco);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(30, 58, 138, 0.1);
        }

        .feature-icon {
            font-size: 2rem;
            color: var(--azul-secundario);
            min-width: 60px;
            text-align: center;
        }

        .feature-text {
            font-weight: 500;
            color: var(--azul-primario);
        }

        /* Workshops Grid */
        .workshops-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2.5rem; /* Ajustando margem */
        }

        .workshop-card {
            background: var(--branco);
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(30, 58, 138, 0.1);
            transition: all 0.3s ease;
            border-left: 4px solid var(--azul-secundario);
        }

        .workshop-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(30, 58, 138, 0.15);
        }

        .workshop-title {
            font-family: 'Exo 2', sans-serif;
            font-weight: 600;
            color: var(--azul-primario);
            margin-bottom: 0.5rem;
        }

        .workshop-description {
            color: var(--prata-escura);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* Contato Section */
        .contact-section {
            background: linear-gradient(135deg, var(--azul-primario), var(--azul-secundario));
            color: var(--branco);
            border-radius: 30px;
            text-align: center;
            margin: 3rem 0;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .contact-info {
            text-align: left;
        }

        .contact-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .contact-subtitle {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        .contact-icon {
            font-size: 1.5rem;
            min-width: 40px;
            text-align: center;
        }

        .whatsapp-button {
            background: #25D366;
            color: var(--branco);
            padding: 1rem 2rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }

        .whatsapp-button:hover {
            background: #128C7E;
            transform: translateY(-3px);
        }

        /* Footer */
        .footer {
            background: var(--azul-primario);
            color: var(--branco);
            text-align: center;
            padding: 2rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.2rem;
            }

            .doug-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .contact-content {
                grid-template-columns: 1fr;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn-primary,
            .btn-secondary {
                width: 100%;
                max-width: 300px;
            }

            .nav-container {
                padding: 1rem 1rem; /* Ajuste o padding para telas menores */
            }

            .logo {
                font-size: 1.5rem;
            }

            .logo img {
                height: 30px; /* Ajuste o tamanho da logo para telas menores */
            }
        }

/* Animações */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in-up {
            animation: fadeInUp 0.6s ease-out;
        }

        /* Scroll suave */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <a href="#" class="logo">
                <i class="fas fa-robot"></i>
                Universo Doug
            </a>
            <ul class="nav-menu">
                <li><a href="#sobre" class="nav-link">Sobre</a></li>
                <li><a href="#doug" class="nav-link">Doug</a></li>
                <li><a href="#workshops" class="nav-link">Workshops</a></li>
                <li><a href="#contato" class="nav-link">Contato</a></li>
                <li><a href="#contato" class="cta-button">Entre em Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">O Futuro da Educação Chegou ao Brasil</h1>
            <p class="hero-subtitle">Conheça Doug, o primeiro humanoide educador do país, revolucionando o aprendizado com tecnologia de ponta</p>
            
            <div class="hero-video">
                <div class="video-placeholder">
                    <i class="fas fa-play-circle"></i>
                    <p>Vídeo de Doug em Ação</p>
                    <small>Em breve: Doug se movimentando e interagindo</small>
                </div>
            </div>

            <div class="hero-buttons">
                <a href="#contato" class="btn-primary">
                    <i class="fas fa-calendar-alt"></i>
                    Agende uma Demonstração Gratuita!
                </a>
                <a href="#doug" class="btn-secondary">
                    <i class="fas fa-info-circle"></i>
                    Conheça o Doug
                </a>
            </div>
        </div>
    </section>

    <!-- Sobre o Instituto -->
    <section id="sobre" class="section">
        <h2 class="section-title">Instituto Somar</h2>
        <h3 class="section-subtitle">Tecnologia e Educação</h3>
        
        <p style="text-align: center; font-size: 1.1rem; color: var(--prata-escura); margin-bottom: 3rem; max-width: 800px; margin-left: auto; margin-right: auto;">
            Missão: Revolucionar a educação através da tecnologia, proporcionando experiências de aprendizado inovadoras e inclusivas que preparam crianças e jovens para os desafios do futuro.
        </p>

        <div class="cards-grid">
            <div class="card">
                <i class="fas fa-lightbulb card-icon"></i>
                <h3 class="card-title">Inovação</h3>
                <p class="card-text">Tecnologia de ponta aplicada à educação, criando experiências únicas de aprendizado que despertam a curiosidade e o engajamento dos alunos.</p>
            </div>
            <div class="card">
                <i class="fas fa-heart card-icon"></i>
                <h3 class="card-title">Inclusão</h3>
                <p class="card-text">Educação acessível para todos, incluindo crianças atípicas, com metodologias adaptadas que respeitam diferentes formas de aprender.</p>
            </div>
            <div class="card">
                <i class="fas fa-star card-icon"></i>
                <h3 class="card-title">Excelência</h3>
                <p class="card-text">Qualidade pedagógica superior, baseada em pesquisas internacionais e resultados comprovados no desenvolvimento cognitivo infantil.</p>
            </div>
            <div class="card">
                <i class="fas fa-handshake card-icon"></i>
                <h3 class="card-title">Ética</h3>
                <p class="card-text">Responsabilidade e transparência em todas as nossas ações, priorizando sempre o bem-estar e o desenvolvimento integral das crianças.</p>
            </div>
        </div>
    </section>

    <!-- Doug Section -->
    <section id="doug" class="section">
        <div class="doug-section">
            <div class="doug-content">
                <div class="doug-image">
                    <div class="doug-placeholder">
                        <i class="fas fa-robot"></i>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; color: var(--prata-escura);">
                        Doug - O Humanoide Educador<br>
                        <small>Foto real do Doug será inserida aqui</small>
                    </p>
                </div>
                
                <div>
                    <h2 class="section-title" style="text-align: left; margin-bottom: 2rem;">Doug: Mais que um Robô, um Companheiro de Aprendizagem</h2>
                    <p style="font-size: 1.1rem; color: var(--prata-escura); margin-bottom: 2rem;">
                        Doug é o primeiro humanoide educador desenvolvido no Brasil, projetado para interagir de forma lúdica e eficaz com crianças e jovens. Sua presença em sala de aula cria um ambiente de aprendizado inovador, despertando a curiosidade e o engajamento dos alunos.
                    </p>
                    
                    <div class="doug-features">
                        <div class="feature">
                            <i class="fas fa-brain feature-icon"></i>
                            <div>
                                <strong class="feature-text">Inteligência Artificial Avançada</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Adaptação personalizada ao ritmo de cada aluno</p>
                            </div>
                        </div>
                        <div class="feature">
                            <i class="fas fa-comments feature-icon"></i>
                            <div>
                                <strong class="feature-text">Interação Natural</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Comunicação fluida e envolvente</p>
                            </div>
                        </div>
                        <div class="feature">
                            <i class="fas fa-gamepad feature-icon"></i>
                            <div>
                                <strong class="feature-text">Aprendizado Lúdico</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Jogos e atividades interativas</p>
                            </div>
                        </div>
                        <div class="feature">
                            <i class="fas fa-chart-line feature-icon"></i>
                            <div>
                                <strong class="feature-text">Acompanhamento de Progresso</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Relatórios detalhados de desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Workshops Section -->
    <section id="workshops" class="section">
        <h2 class="section-title">20 Workshops Transformadores</h2>
        <p class="section-subtitle">
            Cada workshop é cuidadosamente desenvolvido para diferentes faixas etárias, abordando temas essenciais para a formação integral de crianças e jovens do Ensino Fundamental.
        </p>

        <div class="workshops-grid">
            <div class="workshop-card">
                <h3 class="workshop-title">1. Educação Financeira</h3>
                <p class="workshop-description">Conceitos básicos de economia, poupança, consumo consciente e planejamento financeiro adaptados para cada idade.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">2. Autocuidado e Respeito</h3>
                <p class="workshop-description">Desenvolvimento da autoestima, cuidados pessoais, respeito próprio e pelos outros, limites pessoais.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">3. Pensamento Computacional</h3>
                <p class="workshop-description">Lógica de programação, resolução de problemas, algoritmos e introdução à tecnologia de forma lúdica.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">4. Nutrição e Hábitos Saudáveis</h3>
                <p class="workshop-description">Alimentação equilibrada, importância dos nutrientes, criação de hábitos saudáveis e prevenção de doenças.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">5. Pequenos Cientistas</h3>
                <p class="workshop-description">Experimentos científicos, método científico, curiosidade investigativa e descobertas através da prática.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">6. Cidadania Digital</h3>
                <p class="workshop-description">Uso responsável da internet, segurança online, ética digital e relacionamentos virtuais saudáveis.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">7. Anti-Bullying e Amizade</h3>
                <p class="workshop-description">Prevenção ao bullying, construção de amizades saudáveis, empatia e resolução pacífica de conflitos.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">8. Doação de Órgãos</h3>
                <p class="workshop-description">Conscientização sobre solidariedade, importância da doação e valor da vida de forma adequada à idade.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">9. Prevenção de Dengue e Pragas</h3>
                <p class="workshop-description">Educação sanitária, prevenção de doenças, cuidados com o ambiente e responsabilidade coletiva.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">10. Reciclagem e Reutilização</h3>
                <p class="workshop-description">Sustentabilidade, economia circular, criatividade com materiais recicláveis e consciência ambiental.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">11. Cultura de Paz e Prevenção</h3>
                <p class="workshop-description">Resolução pacífica de conflitos, mediação, tolerância e construção de um ambiente harmonioso.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">12. Educação Ambiental</h3>
                <p class="workshop-description">Preservação da natureza, mudanças climáticas, biodiversidade e ações sustentáveis no cotidiano.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">13. Diversidade e Inclusão</h3>
                <p class="workshop-description">Respeito às diferenças, inclusão social, diversidade cultural e construção de uma sociedade mais justa.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">14. Educação para o Trânsito</h3>
                <p class="workshop-description">Segurança viária, responsabilidade no trânsito, sinalizações e comportamento consciente nas vias.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">15. Regras Sociais</h3>
                <p class="workshop-description">Convivência em sociedade, normas de etiqueta, respeito aos espaços públicos e cidadania ativa.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">16. Saúde e Bem-Estar</h3>
                <p class="workshop-description">Cuidados com a saúde física e mental, exercícios, relaxamento e qualidade de vida.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">17. Saúde e Prevenção</h3>
                <p class="workshop-description">Prevenção de doenças, vacinação, higiene pessoal e cuidados preventivos com a saúde.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">18. Respeito e Igualdade</h3>
                <p class="workshop-description">Igualdade de gênero, respeito mútuo, direitos humanos e combate a preconceitos.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">19. Habilidades Socioemocionais</h3>
                <p class="workshop-description">Inteligência emocional, autoconhecimento, gestão de emoções e relacionamentos interpessoais.</p>
            </div>
            <div class="workshop-card">
                <h3 class="workshop-title">20. Prevenção ao Uso de Drogas</h3>
                <p class="workshop-description">Prevenção ao uso de substâncias, tomada de decisões conscientes e fortalecimento da autoestima.</p>
            </div>
        </div>
    </section>

    <!-- Projeto Autismo -->
    <section class="section">
        <div class="doug-section">
            <div style="padding: 3rem; text-align: center;">
                <h2 class="section-title">Projeto Especial: Crianças Atípicas</h2>
                <p style="font-size: 1.2rem; color: var(--prata-escura); margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                    Doug foi especialmente programado para trabalhar com crianças autistas e atípicas, oferecendo uma abordagem personalizada e sensível às suas necessidades específicas.
                </p>
                
                <div class="cards-grid" style="margin-top: 2rem;">
                    <div class="card">
                        <i class="fas fa-puzzle-piece card-icon"></i>
                        <h3 class="card-title">Adaptação Sensorial</h3>
                        <p class="card-text">Ajustes de som, luz e movimento para criar um ambiente confortável e acolhedor.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-clock card-icon"></i>
                        <h3 class="card-title">Ritmo Personalizado</h3>
                        <p class="card-text">Atividades adaptadas ao tempo e necessidades individuais de cada criança.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-hands-helping card-icon"></i>
                        <h3 class="card-title">Comunicação Alternativa</h3>
                        <p class="card-text">Múltiplas formas de comunicação, incluindo gestos, símbolos e tecnologia assistiva.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="section">
        <div class="contact-section">
            <div style="padding: 3rem;">
                <div class="contact-content">
                    <div class="contact-info">
                        <h2 class="contact-title">Transforme a Educação da sua Cidade</h2>
                        <p class="contact-subtitle">
                            Seja pioneiro em trazer a tecnologia educacional mais avançada do Brasil para sua instituição. Doug está pronto para revolucionar o aprendizado!
                        </p>
                        
                        <div class="contact-item">
                            <i class="fas fa-phone contact-icon"></i>
                            <div>
                                <strong>Telefone/WhatsApp</strong>
                                <p>(67) 99283-7970</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-building contact-icon"></i>
                            <div>
                                <strong>Instituto Somar</strong>
                                <p>Tecnologia e Educação</p>
                            </div>
                        </div>
                        
                        <a href="https://wa.me/5567992837970?text=Olá! Gostaria de saber mais sobre o Projeto Universo Doug e agendar uma demonstração." class="whatsapp-button">
                            <i class="fab fa-whatsapp"></i>
                            Falar no WhatsApp
                        </a>
                    </div>
                    
                    <div style="text-align: center;">
                        <i class="fas fa-rocket" style="font-size: 8rem; opacity: 0.3; margin-bottom: 2rem;"></i>
                        <h3 style="font-family: 'Orbitron', monospace; font-size: 1.5rem; margin-bottom: 1rem;">
                            Demonstração Gratuita
                        </h3>
                        <p style="opacity: 0.9; margin-bottom: 2rem;">
                            Agende uma apresentação exclusiva do Doug para sua equipe e veja como a tecnologia pode transformar a educação na sua instituição.
                        </p>
                        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 15px; backdrop-filter: blur(10px);">
                            <p><strong>✓ Apresentação personalizada</strong></p>
                            <p><strong>✓ Demonstração ao vivo</strong></p>
                            <p><strong>✓ Consultoria educacional</strong></p>
                            <p><strong>✓ Proposta comercial</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Instituto Somar - Tecnologia e Educação. Todos os direitos reservados.</p>
            <p style="margin-top: 0.5rem; opacity: 0.8;">
                Universo Doug - O primeiro humanoide educador do Brasil
            </p>
        </div>
    </footer>

    <script>
        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Efeito de scroll no header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(248, 250, 252, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(30, 58, 138, 0.1)';
            } else {
                header.style.background = 'rgba(248, 250, 252, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Animação de entrada dos elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observar elementos para animação
        document.querySelectorAll('.card, .workshop-card, .feature').forEach(el => {
            observer.observe(el);
        });
    </script>
</body>
</html>
