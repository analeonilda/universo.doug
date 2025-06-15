<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universo Doug - O Primeiro Humanoide Educador do Brasil</title>
    <meta name="description" content="Conheça Doug, o primeiro humanoide educador do Brasil. Instituto Somar apresenta tecnologia revolucionária para transformar a educação com 20 workshops inovadores.">

    <!-- Fontes Tecnológicas -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Exo+2:wght@400;600&family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Particles.js CDN -->
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

    <style>
        :root {
            --azul-primario: #1E3A8A;
            --azul-secundario: #3B82F6;
            --azul-neon: #3cf4ff;
            --azul-claro: #DBEAFE;
            --prata-primaria: #E5E7EB;
            --prata-escura: #6B7280;
            --prata-metalica: #F8FAFC;
            --branco: #FFFFFF;
            --preto: #000000;
            --glass: rgba(255,255,255,0.11);
        }
        * { margin: 0; padding: 0; box-sizing: border-box;}
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--azul-primario);
            background: linear-gradient(135deg, var(--prata-metalica) 0%, var(--azul-claro) 100%);
            overflow-x: hidden;
        }
        html { scroll-behavior: smooth;}

        /* Header */
        .header {
            position: fixed;
            top: 0; left: 0; width: 100%;
            background: rgba(10, 24, 52, 0.88);
            box-shadow: 0 2px 20px #0ff5 0.5;
            backdrop-filter: blur(14px);
            z-index: 1000;
            border-bottom: 1.5px solid #4fd1ff33;
        }
        .nav-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 2.1rem; font-weight: 900;
            color: var(--azul-neon);
            text-shadow: 0 0 14px var(--azul-neon),0 2px 10px #1e3a8a88;
            text-decoration: none;
            display: flex; align-items: center; gap: 0.7rem;
            letter-spacing: 2.5px;
        }
        .logo img {
            height: 46px; width: auto; background: transparent; filter: drop-shadow(0 0 12px #00eaffaa);
        }
        .nav-menu {
            display: flex; list-style: none; gap: 1.1rem; align-items: center; flex-wrap: wrap;
        }
        .nav-link, .cta-button {
            font-family: 'Exo 2', sans-serif;
            font-weight: 600;
            text-decoration: none;
            border-radius: 10px;
            padding: 0.52rem 1.1rem;
            transition: all 0.2s;
            white-space: nowrap;
            border: none;
        }
        .nav-link {
            color: #c4e3ff;
            letter-spacing: 0.8px;
        }
        .nav-link:hover {
            color: var(--azul-neon);
            background: linear-gradient(90deg, #3B82F6 10%, #1E3A8A 100%);
            box-shadow: 0 0 10px #00eaffcc, 0 1px 12px #3cf4ff44;
        }
        .cta-button {
            background: linear-gradient(90deg, #3B82F6 20%, #00eaff 100%);
            color: #fff;
            font-size: 1.1rem;
            font-weight: 800;
            box-shadow: 0 0 16px #00eaff90, 0 2px 10px #1E3A8A30;
            border: 1.7px solid #3cf4ff;
            transition: all 0.19s cubic-bezier(.51,1.16,.67,1.05);
        }
        .cta-button:hover {
            color: #fff;
            background: linear-gradient(90deg, #3cf4ff 0%, #1E3A8A 90%);
            box-shadow: 0 0 32px #00eaffdd, 0 4px 18px #1E3A8A60;
            transform: scale(1.09);
        }
        .spacer { height: 90px; }
        /* Hero Section com Partículas */
        #particles-js {
            position: absolute;
            width: 100vw; height: 100vh; z-index: 0; top:0; left:0;
            pointer-events: none;
        }
        .hero {
            position: relative;
            min-height: 94vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(ellipse at 50% 10%, #193866 45%, #2258a8 100%);
            color: var(--branco);
            text-align: center;
            overflow: hidden;
        }
        .hero-content {
            max-width: 1200px; margin: 0 auto; padding: 3.5rem 2rem;
            position: relative; z-index: 2;
        }
        .hero-title {
            font-family: 'Orbitron', monospace;
            font-size: 3.2rem;
            font-weight: 900;
            margin-bottom: 1.05rem;
            background: linear-gradient(92deg, #fff, #aaf7ff 88%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 4px 18px #00f8ff55, 0 2px 12px #1E3A8A55;
            letter-spacing: 2.7px;
        }
        .hero-subtitle {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 2rem;
            color: #d7f6ff;
            opacity: 0.9;
        }
        .scrolldown {
            display: block; margin: 0 auto; margin-top: 2.2rem;
            width: 22px; height: 36px; border: 2.4px solid #3cf4ff;
            border-radius: 15px; position: relative; opacity: 0.85;
            animation: bounce-mouse 1.8s infinite;
        }
        .scrolldown-dot {
            position: absolute; left: 50%; transform: translateX(-50%);
            top: 7px; width: 5px; height: 7px; background: #3cf4ff;
            border-radius: 50%; animation: bounce-dot 1.8s infinite;
        }
        @keyframes bounce-mouse {
            0% { transform: translateY(0);}
            50% { transform: translateY(8px);}
            100% { transform: translateY(0);}
        }
        @keyframes bounce-dot {
            0% { opacity:1; top:7px;}
            60% { opacity:0.2; top:20px;}
            100% { opacity:1; top:7px;}
        }
        .hero-video {
            width: 100%;
            max-width: 570px;
            height: 310px;
            border-radius: 20px;
            margin: 2.2rem auto 0.2rem auto;
            background: rgba(255,255,255,0.12);
            backdrop-filter: blur(16px);
            border: 2px solid #0ff4;
            display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
            box-shadow: 0 0 38px #00f9ff14, 0 4px 16px #1E3A8A11;
        }
        .video-placeholder { text-align: center; color: #dbf7fa;}
        .video-placeholder i { font-size: 4.2rem; margin-bottom: 0.9rem; opacity: 0.7;}
        .hero-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2.3rem;}
        .btn-primary, .btn-secondary {
            border-radius: 25px; text-decoration: none; font-weight: 700; font-size: 1.13rem; transition: all 0.3s ease; padding: 1rem 2.1rem;
        }
        .btn-primary {
            background: linear-gradient(92deg, #fff, #e3f8ff 88%);
            color: var(--azul-primario);
            box-shadow: 0 4px 18px #3cf4ff30;
            border: 2px solid #3cf4ff99;
        }
        .btn-primary:hover { box-shadow: 0 0 30px #3cf4ffaa; background: #aef9ff; color: #0a3a61;}
        .btn-secondary {
            background: transparent;
            color: var(--branco);
            border: 2.3px solid #fff;
        }
        .btn-secondary:hover { background: #fff; color: #1941a0; border-color:#00eaff;}
        /* Seções e Glassmorphism */
        .section {
            padding: 2rem 2rem;
            max-width: 1200px;
            margin: 0 auto 2.2rem auto;
            position: relative;
        }
        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.2rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 1.3rem;
            background: linear-gradient(135deg, #3cf4ff 20%, #1941a0 90%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
            letter-spacing: 2.2px;
            text-shadow: 0 0 12px #3cf4ff60;
        }
        .section-subtitle {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.09rem;
            text-align: center;
            color: #8ec7ec;
            margin-bottom: 1.5rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.2rem;
            margin-top: 1.1rem;
        }
        .card {
            background: var(--glass);
            border-radius: 18px;
            padding: 1.35rem;
            box-shadow: 0 8px 32px #3cf4ff12, 0 0 0 1.5px #3cf4ff24;
            transition: all 0.23s;
            border: 1.5px solid #3cf4ff66;
            position: relative; overflow: hidden;
            backdrop-filter: blur(8px);
        }
        .card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 4px;
            background: linear-gradient(92deg, #3cf4ff 30%, #1e3a8a 90%);
        }
        .card:hover {
            transform: translateY(-6px) scale(1.025) rotate(-1.2deg);
            box-shadow: 0 0 28px #3cf4ffaa, 0 12px 32px #19386622;
            border-color: #00eaff;
        }
        .card-icon {
            font-size: 2.5rem;
            color: #3cf4ff;
            margin-bottom: 0.7rem;
            text-shadow: 0 0 10px #3cf4ff55;
        }
        .card-title {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.6rem;
            color: var(--azul-primario);
        }
        .card-text { color: var(--prata-escura);}
        /* Doug Section */
        .doug-section {
            background: linear-gradient(135deg, #121e33 60%, #3cf4ff15 100%);
            border-radius: 26px;
            margin: 1.7rem 0;
            overflow: hidden;
            box-shadow: 0 0 32px #3cf4ff14;
            border: 1.2px solid #3cf4ff44;
        }
        .doug-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.1rem;
            align-items: center;
            padding: 2.2rem;
        }
        .doug-image { text-align: center; }
        .doug-image img {
            width: 100%; max-width: 350px; border-radius: 22px;
            margin: 0 auto;
            background: transparent;
            box-shadow: 0 0 60px #3cf4ffdd, 0 8px 30px #19386655;
            transition: 0.32s cubic-bezier(.68,-0.55,.27,1.55);
            filter: drop-shadow(0 0 24px #1e8aff99);
        }
        .doug-image img:hover {
            transform: scale(1.07) rotate(-2deg);
            box-shadow: 0 0 120px #3cf4fff3, 0 14px 40px #1E3A8A66;
            filter: brightness(1.1) drop-shadow(0 0 32px #3cf4ff);
        }
        .doug-features { display: grid; gap: 1.07rem;}
        .feature {
            display: flex; align-items: center; gap: 1rem; padding: 0.77rem;
            background: var(--glass);
            border-radius: 13px;
            box-shadow: 0 3px 10px #3cf4ff16;
            border: 1.3px solid #3cf4ff30;
        }
        .feature-icon { font-size: 1.7rem; color: #3cf4ff; min-width: 42px; text-align: center;}
        .feature-text { font-weight: 600; color: var(--azul-primario);}
        .workshops-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1.1rem;
        }
        .workshop-card {
            background: var(--glass);
            border-radius: 12px;
            padding: 1rem;
            box-shadow: 0 5px 15px #3cf4ff0c;
            transition: all 0.21s;
            border-left: 4px solid #3cf4ff;
            border-right: 1.5px solid #19386633;
        }
        .workshop-card:hover {
            transform: scale(1.032) rotate(-0.7deg);
            box-shadow: 0 0 25px #3cf4ff99, 0 12px 20px #19386616;
            border-left: 4px solid #00eaff;
            border-right: 1.5px solid #00eaff33;
        }
        .workshop-title { font-family: 'Exo 2', sans-serif; font-weight: 600; color: var(--azul-primario); margin-bottom: 0.37rem;}
        .workshop-description { color: var(--prata-escura); font-size: 0.97rem;}
        .contact-section {
            background: linear-gradient(135deg, #1e3a8a 70%, #3cf4ff 100%);
            color: var(--branco);
            border-radius: 28px;
            text-align: center;
            margin: 1.7rem 0;
            box-shadow: 0 0 42px #3cf4ff0a;
        }
        .contact-content {
            display: grid; grid-template-columns: 1fr 1fr; gap: 2.1rem; align-items: center;
        }
        .contact-info { text-align: left;}
        .contact-title { font-family: 'Orbitron', monospace; font-size: 2rem; font-weight: 700; margin-bottom: 1rem;}
        .contact-subtitle { font-size: 1.09rem; margin-bottom: 1.5rem; opacity: 0.9;}
        .contact-item {
            display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem; padding: 0.7rem;
            background: rgba(255,255,255,0.09); border-radius: 10px; backdrop-filter: blur(7px);
        }
        .contact-icon { font-size: 1.3rem; min-width: 38px; text-align: center;}
        .whatsapp-button {
            background: #3cf4ff;
            color: #0e2d56;
            padding: 0.8rem 1.7rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1rem;
            transition: all 0.16s;
            font-size: 1.07rem;
            box-shadow: 0 0 14px #3cf4ff60;
        }
        .whatsapp-button:hover { background: #1e3a8a; color: #fff; box-shadow: 0 0 30px #3cf4ffaa;}
        .footer {
            background: #131e38;
            color: var(--branco);
            text-align: center;
            padding: 1.3rem;
            letter-spacing: 1px;
            border-top: 2px solid #3cf4ff44;
        }
        .footer-content { max-width: 1200px; margin: 0 auto;}
        @media (max-width: 900px) {
            .doug-content, .contact-content { grid-template-columns: 1fr; padding: 1.1rem;}
        }
        @media (max-width: 768px) {
            .nav-menu { gap: 0.2rem; }
            .nav-container { padding: 1rem 0.5rem;}
            .hero-title { font-size: 1.44rem;}
            .hero-subtitle { font-size: 1.05rem;}
            .logo { font-size: 1.1rem;}
            .logo img { height: 28px;}
            .btn-primary, .btn-secondary { width: 100%; max-width: 260px; padding: 0.85rem 1.3rem;}
            .section, .hero-content { padding: 1.2rem;}
        }
        @media (max-width: 600px) {
            .header { font-size: 1rem;}
            .section, .hero-content { padding: 0.7rem;}
        }
        /* Animação fade-in-up para elementos */
        @keyframes fadeInUp {
            from {opacity: 0; transform: translateY(30px);}
            to {opacity: 1; transform: translateY(0);}
        }
        .fade-in-up { animation: fadeInUp 0.7s cubic-bezier(.51,1.16,.67,1.05);}
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <a href="#" class="logo">
                <img src="doug_logo.png" alt="Logo Doug" />
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
    <div class="spacer"></div>

    <!-- Hero Section -->
    <section class="hero">
        <div id="particles-js"></div>
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
            <div class="scrolldown">
                <div class="scrolldown-dot"></div>
            </div>
        </div>
    </section>

    <!-- Sobre o Instituto -->
    <section id="sobre" class="section fade-in-up">
        <h2 class="section-title">Instituto Somar</h2>
        <h3 class="section-subtitle">Tecnologia e Educação</h3>
        <p style="text-align: center; font-size: 1.1rem; color: var(--prata-escura); margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
            Missão: Revolucionar a educação através da tecnologia, proporcionando experiências de aprendizado inovadoras e inclusivas que preparam crianças e jovens para os desafios do futuro.
        </p>
        <div class="cards-grid">
            <div class="card"><i class="fas fa-lightbulb card-icon"></i><h3 class="card-title">Inovação</h3>
                <p class="card-text">Tecnologia de ponta aplicada à educação, criando experiências únicas de aprendizado que despertam a curiosidade e o engajamento dos alunos.</p>
            </div>
            <div class="card"><i class="fas fa-heart card-icon"></i><h3 class="card-title">Inclusão</h3>
                <p class="card-text">Educação acessível para todos, incluindo crianças atípicas, com metodologias adaptadas que respeitam diferentes formas de aprender.</p>
            </div>
            <div class="card"><i class="fas fa-star card-icon"></i><h3 class="card-title">Excelência</h3>
                <p class="card-text">Qualidade pedagógica superior, baseada em pesquisas internacionais e resultados comprovados no desenvolvimento cognitivo infantil.</p>
            </div>
            <div class="card"><i class="fas fa-handshake card-icon"></i><h3 class="card-title">Ética</h3>
                <p class="card-text">Responsabilidade e transparência em todas as nossas ações, priorizando sempre o bem-estar e o desenvolvimento integral das crianças.</p>
            </div>
        </div>
    </section>

    <!-- Doug Section -->
    <section id="doug" class="section fade-in-up">
        <div class="doug-section">
            <div class="doug-content">
                <div class="doug-image">
                    <img src="doug_photo.png" alt="Doug - O Humanoide Educador" />
                    <p style="text-align: center; margin-top: 1rem; color: var(--prata-escura);">
                        Doug - O Humanoide Educador<br>
                        <small>Foto real do Doug</small>
                    </p>
                </div>
                <div>
                    <h2 class="section-title" style="text-align: left; margin-bottom: 1.2rem;">Doug: Mais que um Robô, um Companheiro de Aprendizagem</h2>
                    <p style="font-size: 1.08rem; color: var(--prata-escura); margin-bottom: 1.2rem;">
                        Doug é o primeiro humanoide educador desenvolvido no Brasil, projetado para interagir de forma lúdica e eficaz com crianças e jovens. Sua presença em sala de aula cria um ambiente de aprendizado inovador, despertando a curiosidade e o engajamento dos alunos.
                    </p>
                    <div class="doug-features">
                        <div class="feature"><i class="fas fa-brain feature-icon"></i>
                            <div><strong class="feature-text">Inteligência Artificial Avançada</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Adaptação personalizada ao ritmo de cada aluno</p>
                            </div>
                        </div>
                        <div class="feature"><i class="fas fa-comments feature-icon"></i>
                            <div><strong class="feature-text">Interação Natural</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Comunicação fluida e envolvente</p>
                            </div>
                        </div>
                        <div class="feature"><i class="fas fa-gamepad feature-icon"></i>
                            <div><strong class="feature-text">Aprendizado Lúdico</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Jogos e atividades interativas</p>
                            </div>
                        </div>
                        <div class="feature"><i class="fas fa-chart-line feature-icon"></i>
                            <div><strong class="feature-text">Acompanhamento de Progresso</strong>
                                <p style="color: var(--prata-escura); margin: 0;">Relatórios detalhados de desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Workshops Section -->
    <section id="workshops" class="section fade-in-up">
        <h2 class="section-title">20 Workshops Transformadores</h2>
        <p class="section-subtitle">
            Cada workshop é cuidadosamente desenvolvido para diferentes faixas etárias, abordando temas essenciais para a formação integral de crianças e jovens do Ensino Fundamental.
        </p>
        <div class="workshops-grid">
            <div class="workshop-card"><h3 class="workshop-title">1. Educação Financeira</h3><p class="workshop-description">Conceitos básicos de economia, poupança, consumo consciente e planejamento financeiro adaptados para cada idade.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">2. Autocuidado e Respeito</h3><p class="workshop-description">Desenvolvimento da autoestima, cuidados pessoais, respeito próprio e pelos outros, limites pessoais.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">3. Pensamento Computacional</h3><p class="workshop-description">Lógica de programação, resolução de problemas, algoritmos e introdução à tecnologia de forma lúdica.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">4. Nutrição e Hábitos Saudáveis</h3><p class="workshop-description">Alimentação equilibrada, importância dos nutrientes, criação de hábitos saudáveis e prevenção de doenças.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">5. Pequenos Cientistas</h3><p class="workshop-description">Experimentos científicos, método científico, curiosidade investigativa e descobertas através da prática.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">6. Cidadania Digital</h3><p class="workshop-description">Uso responsável da internet, segurança online, ética digital e relacionamentos virtuais saudáveis.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">7. Anti-Bullying e Amizade</h3><p class="workshop-description">Prevenção ao bullying, construção de amizades saudáveis, empatia e resolução pacífica de conflitos.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">8. Doação de Órgãos</h3><p class="workshop-description">Conscientização sobre solidariedade, importância da doação e valor da vida de forma adequada à idade.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">9. Prevenção de Dengue e Pragas</h3><p class="workshop-description">Educação sanitária, prevenção de doenças, cuidados com o ambiente e responsabilidade coletiva.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">10. Reciclagem e Reutilização</h3><p class="workshop-description">Sustentabilidade, economia circular, criatividade com materiais recicláveis e consciência ambiental.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">11. Cultura de Paz e Prevenção</h3><p class="workshop-description">Resolução pacífica de conflitos, mediação, tolerância e construção de um ambiente harmonioso.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">12. Educação Ambiental</h3><p class="workshop-description">Preservação da natureza, mudanças climáticas, biodiversidade e ações sustentáveis no cotidiano.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">13. Diversidade e Inclusão</h3><p class="workshop-description">Respeito às diferenças, inclusão social, diversidade cultural e construção de uma sociedade mais justa.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">14. Educação para o Trânsito</h3><p class="workshop-description">Segurança viária, responsabilidade no trânsito, sinalizações e comportamento consciente nas vias.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">15. Regras Sociais</h3><p class="workshop-description">Convivência em sociedade, normas de etiqueta, respeito aos espaços públicos e cidadania ativa.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">16. Saúde e Bem-Estar</h3><p class="workshop-description">Cuidados com a saúde física e mental, exercícios, relaxamento e qualidade de vida.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">17. Saúde e Prevenção</h3><p class="workshop-description">Prevenção de doenças, vacinação, higiene pessoal e cuidados preventivos com a saúde.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">18. Respeito e Igualdade</h3><p class="workshop-description">Igualdade de gênero, respeito mútuo, direitos humanos e combate a preconceitos.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">19. Habilidades Socioemocionais</h3><p class="workshop-description">Inteligência emocional, autoconhecimento, gestão de emoções e relacionamentos interpessoais.</p></div>
            <div class="workshop-card"><h3 class="workshop-title">20. Prevenção ao Uso de Drogas</h3><p class="workshop-description">Prevenção ao uso de substâncias, tomada de decisões conscientes e fortalecimento da autoestima.</p></div>
        </div>
    </section>

    <!-- Projeto Autismo -->
    <section class="section fade-in-up">
        <div class="doug-section">
            <div style="padding: 2.2rem; text-align: center;">
                <h2 class="section-title">Projeto Especial: Crianças Atípicas</h2>
                <p style="font-size: 1.15rem; color: var(--prata-escura); margin-bottom: 1.2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                    Doug foi especialmente programado para trabalhar com crianças autistas e atípicas, oferecendo uma abordagem personalizada e sensível às suas necessidades específicas.
                </p>
                <div class="cards-grid" style="margin-top: 1rem;">
                    <div class="card"><i class="fas fa-puzzle-piece card-icon"></i>
                        <h3 class="card-title">Adaptação Sensorial</h3>
                        <p class="card-text">Ajustes de som, luz e movimento para criar um ambiente confortável e acolhedor.</p>
                    </div>
                    <div class="card"><i class="fas fa-clock card-icon"></i>
                        <h3 class="card-title">Ritmo Personalizado</h3>
                        <p class="card-text">Atividades adaptadas ao tempo e necessidades individuais de cada criança.</p>
                    </div>
                    <div class="card"><i class="fas fa-hands-helping card-icon"></i>
                        <h3 class="card-title">Comunicação Alternativa</h3>
                        <p class="card-text">Múltiplas formas de comunicação, incluindo gestos, símbolos e tecnologia assistiva.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="section fade-in-up">
        <div class="contact-section">
            <div style="padding: 2.2rem;">
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
                                <p>(67) 99238-0101</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-building contact-icon"></i>
                            <div>
                                <strong>Instituto Somar</strong>
                                <p>Tecnologia e Educação</p>
                            </div>
                        </div>
                        <a href="https://wa.me/5567992380101?text=Olá! Gostaria de saber mais sobre o Projeto Universo Doug e agendar uma demonstração." class="whatsapp-button">
                            <i class="fab fa-whatsapp"></i>
                            Falar no WhatsApp
                        </a>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-rocket" style="font-size: 8rem; opacity: 0.3; margin-bottom: 1.2rem;"></i>
                        <h3 style="font-family: 'Orbitron', monospace; font-size: 1.25rem; margin-bottom: 0.6rem;">
                            Demonstração Gratuita
                        </h3>
                        <p style="opacity: 0.9; margin-bottom: 1.2rem;">
                            Agende uma apresentação exclusiva do Doug para sua equipe e veja como a tecnologia pode transformar a educação na sua instituição.
                        </p>
                        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 15px; backdrop-filter: blur(10px);">
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

    <!-- JS: Scroll suave, fade-in, partículas -->
    <script>
        // Particles.js config (tech/circuit effect)
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 68, "density": { "enable": true, "value_area": 950 }},
                "color": { "value": "#3cf4ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.36, "random": true },
                "size": { "value": 4, "random": true },
                "line_linked": { "enable": true, "distance": 120, "color": "#1E3A8A", "opacity": 0.22, "width": 1.4 },
                "move": { "enable": true, "speed": 2.2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": false }, "resize": true }
            },
            "retina_detect": true
        });

        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            });
        });

        // Fade-in em elementos ao aparecer
        const observerOptions = { threshold: 0.09, rootMargin: '0px 0px -50px 0px'};
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
            });
        }, observerOptions);
        document.querySelectorAll('.section').forEach(el => { observer.observe(el); });

        // Header efeito scrolldown
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10,24,52,0.95)';
                header.style.boxShadow = '0 2px 20px #3cf4ff44';
            } else {
                header.style.background = 'rgba(10,24,52,0.88)';
                header.style.boxShadow = '0 2px 20px #0ff5 0.5';
            }
        });
    </script>
</body>
</html>
