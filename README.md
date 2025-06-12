<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universo Doug - O Futuro da Educação Chegou ao Brasil</title>
    <meta name="description" content="Conheça Doug, o primeiro humanoide educador do Brasil. Transforme o aprendizado de crianças e jovens com workshops inovadores do Instituto Somar.">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .logo img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .nav-links a:hover {
            color: #60a5fa;
            transform: translateY(-2px);
        }

        .cta-button {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
            color: white;
            padding: 120px 0 80px;
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
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
            opacity: 0.3;
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-video {
            margin: 3rem 0;
            position: relative;
        }

        .video-placeholder {
            background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
            border-radius: 20px;
            padding: 60px;
            margin: 2rem auto;
            max-width: 600px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border: 3px solid rgba(255,255,255,0.1);
        }

        .video-placeholder i {
            font-size: 4rem;
            color: #60a5fa;
            margin-bottom: 1rem;
        }

        .video-placeholder p {
            font-size: 1.1rem;
            opacity: 0.8;
        }

        /* About Section */
        .about {
            padding: 80px 0;
            background: #f8fafc;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e3a8a;
            margin-bottom: 1.5rem;
        }

        .about-content p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #64748b;
        }

        .values {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .value-item {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .value-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .value-item i {
            font-size: 2rem;
            color: #3b82f6;
            margin-bottom: 1rem;
        }

        .value-item h4 {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1e3a8a;
        }

        .doug-image {
            text-align: center;
        }

        .doug-image img {
            max-width: 100%;
            height: auto;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Doug Section */
        .doug-section {
            padding: 80px 0;
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
        }

        .doug-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .doug-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .doug-features {
            display: grid;
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255,255,255,0.1);
            padding: 1rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        .feature-item i {
            font-size: 1.5rem;
            color: #60a5fa;
        }

        /* Workshops Section */
        .workshops {
            padding: 80px 0;
            background: #f8fafc;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e3a8a;
            margin-bottom: 1rem;
        }

        .section-header p {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 800px;
            margin: 0 auto;
        }

        .methodology {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 4rem;
        }

        .methodology h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #1e3a8a;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .methodology-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .methodology-item {
            text-align: center;
            padding: 1.5rem;
        }

        .methodology-item i {
            font-size: 2.5rem;
            color: #3b82f6;
            margin-bottom: 1rem;
        }

        .methodology-item h4 {
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1e3a8a;
        }

        .workshops-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .workshop-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .workshop-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            border-color: #3b82f6;
        }

        .workshop-card h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #1e3a8a;
            margin-bottom: 1rem;
        }

        .workshop-contexts {
            list-style: none;
        }

        .workshop-contexts li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #e2e8f0;
            color: #64748b;
            position: relative;
            padding-left: 1.5rem;
        }

        .workshop-contexts li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }

        .workshop-contexts li:last-child {
            border-bottom: none;
        }

        /* Autism Project Section */
        .autism-project {
            padding: 80px 0;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
        }

        .autism-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .autism-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .autism-content p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        /* CTA Section */
        .final-cta {
            padding: 80px 0;
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            text-align: center;
        }

        .final-cta h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .final-cta p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .contact-info {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            display: inline-block;
            margin-top: 2rem;
            backdrop-filter: blur(10px);
        }

        .contact-info h3 {
            margin-bottom: 1rem;
        }

        .phone-number {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fef3c7;
        }

        /* Footer */
        footer {
            background: #1f2937;
            color: white;
            padding: 2rem 0;
            text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .about-grid,
            .doug-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .values {
                grid-template-columns: 1fr;
            }

            .methodology-grid {
                grid-template-columns: 1fr;
            }

            .workshops-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Animations */
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
            animation: fadeInUp 0.8s ease-out;
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Loading animation for video placeholder */
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }

        .video-placeholder i {
            animation: pulse 2s infinite;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <div class="logo">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-robot" style="color: white; font-size: 1.2rem;"></i>
                </div>
                <span>Universo Doug</span>
            </div>
            <ul class="nav-links">
                <li><a href="#about">Sobre</a></li>
                <li><a href="#doug">Doug</a></li>
                <li><a href="#workshops">Workshops</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <a href="#contact" class="cta-button">
                <i class="fas fa-phone"></i> Entre em Contato
            </a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content fade-in-up">
                <h1>O Futuro da Educação Chegou ao Brasil!</h1>
                <p>Conheça Doug, o Primeiro Humanoide Educador do País, e Transforme o Aprendizado de Crianças e Jovens com Tecnologia de Ponta e Metodologia Inovadora.</p>
                
                <div class="hero-video">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Vídeo de Doug em Ação<br><small>Em breve: Doug se movimentando e interagindo</small></p>
                    </div>
                </div>

                <a href="#contact" class="cta-button" style="font-size: 1.2rem; padding: 15px 30px;">
                    <i class="fas fa-calendar-alt"></i> Agende uma Demonstração Gratuita!
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-content fade-in-up">
                    <h2>Instituto Somar - Tecnologia e Educação</h2>
                    <p><strong>Missão:</strong> Nossa missão é revolucionar a educação através da tecnologia, promovendo o desenvolvimento cognitivo e socioemocional de crianças e jovens, preparando-os para os desafios do século XXI.</p>
                    <p><strong>Visão:</strong> Ser referência nacional na integração de humanoides na educação, criando um futuro onde o aprendizado é acessível, inovador e inspirador para todos.</p>
                    
                    <div class="values">
                        <div class="value-item">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Inovação</h4>
                            <p>Tecnologia de ponta aplicada à educação</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-heart"></i>
                            <h4>Inclusão</h4>
                            <p>Educação acessível para todos</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-star"></i>
                            <h4>Excelência</h4>
                            <p>Qualidade pedagógica superior</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-handshake"></i>
                            <h4>Ética</h4>
                            <p>Responsabilidade e transparência</p>
                        </div>
                    </div>
                </div>
                <div class="doug-image fade-in-up">
                    <div style="background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%); padding: 3rem; border-radius: 20px; text-align: center;">
                        <i class="fas fa-robot" style="font-size: 8rem; color: #3b82f6; margin-bottom: 1rem;"></i>
                        <p style="color: #1e3a8a; font-weight: 600;">Logomarca Universo Doug</p>
                        <small style="color: #64748b;">Imagem será substituída pela logomarca oficial</small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Doug Section -->
    <section class="doug-section" id="doug">
        <div class="container">
            <div class="doug-grid">
                <div class="doug-content fade-in-up">
                    <h2>Doug: Mais que um Robô, um Companheiro de Aprendizagem</h2>
                    <p>Doug é o primeiro humanoide educador desenvolvido no Brasil, projetado para interagir de forma lúdica e eficaz com crianças e jovens. Sua presença em sala de aula cria um ambiente de aprendizado inovador, despertando a curiosidade e o engajamento dos alunos.</p>
                    
                    <div class="doug-features">
                        <div class="feature-item">
                            <i class="fas fa-brain"></i>
                            <div>
                                <h4>Inteligência Artificial Avançada</h4>
                                <p>Adaptação personalizada ao ritmo de cada aluno</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-comments"></i>
                            <div>
                                <h4>Interação Natural</h4>
                                <p>Comunicação fluida e envolvente</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-gamepad"></i>
                            <div>
                                <h4>Aprendizado Lúdico</h4>
                                <p>Jogos e atividades interativas</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-chart-line"></i>
                            <div>
                                <h4>Acompanhamento de Progresso</h4>
                                <p>Relatórios detalhados de desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="doug-image fade-in-up">
                    <div style="background: rgba(255,255,255,0.1); padding: 3rem; border-radius: 20px; text-align: center; backdrop-filter: blur(10px);">
                        <i class="fas fa-robot" style="font-size: 8rem; color: #60a5fa; margin-bottom: 1rem;"></i>
                        <p style="font-weight: 600;">Doug - O Humanoide Educador</p>
                        <small style="opacity: 0.8;">Foto real do Doug será inserida aqui</small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Workshops Section -->
    <section class="workshops" id="workshops">
        <div class="container">
            <div class="section-header fade-in-up">
                <h2>Universo Doug: 20 Temas Essenciais para o Desenvolvimento Integral</h2>
                <p>Nossos workshops são cuidadosamente elaborados para complementar o currículo escolar, abordando temas cruciais para a formação de cidadãos conscientes e preparados para o futuro. Cada workshop é uma jornada de descoberta e aprendizado prático.</p>
            </div>

            <div class="methodology fade-in-up">
                <h3>Nossa Metodologia</h3>
                <div class="methodology-grid">
                    <div class="methodology-item">
                        <i class="fas fa-play"></i>
                        <h4>Abordagem Lúdica</h4>
                        <p>Aprendizado através de jogos e atividades interativas</p>
                    </div>
                    <div class="methodology-item">
                        <i class="fas fa-globe"></i>
                        <h4>Projetos Internacionais</h4>
                        <p>Baseado em referências educacionais mundiais</p>
                    </div>
                    <div class="methodology-item">
                        <i class="fas fa-book-open"></i>
                        <h4>Histórias Contextualizadas</h4>
                        <p>Narrativas envolventes que facilitam a compreensão</p>
                    </div>
                    <div class="methodology-item">
                        <i class="fas fa-graduation-cap"></i>
                        <h4>Alinhado à BNCC</h4>
                        <p>Totalmente compatível com o currículo nacional</p>
                    </div>
                </div>
            </div>

            <div class="workshops-grid">
                <!-- Workshop 1 -->
                <div class="workshop-card fade-in-up">
                    <h3>1. Educação Financeira</h3>
                    <ul class="workshop-contexts">
                        <li>Compreensão do valor do dinheiro e da importância da poupança</li>
                        <li>Diferença entre desejo e necessidade</li>
                        <li>Noções básicas de orçamento e planejamento</li>
                        <li>Consumo consciente e sustentável</li>
                    </ul>
                </div>

                <!-- Workshop 2 -->
                <div class="workshop-card fade-in-up">
                    <h3>2. Autocuidado e Respeito</h3>
                    <ul class="workshop-contexts">
                        <li>Reconhecimento e valorização das próprias qualidades</li>
                        <li>Importância da higiene pessoal e hábitos saudáveis</li>
                        <li>Respeito às diferenças individuais e coletivas</li>
                        <li>Desenvolvimento da autoestima e autoconfiança</li>
                    </ul>
                </div>

                <!-- Workshop 3 -->
                <div class="workshop-card fade-in-up">
                    <h3>3. Pensamento Computacional</h3>
                    <ul class="workshop-contexts">
                        <li>Resolução de problemas de forma lógica e sequencial</li>
                        <li>Noções básicas de algoritmos e programação</li>
                        <li>Desenvolvimento do raciocínio abstrato e criatividade</li>
                        <li>Aplicação do pensamento computacional em situações do dia a dia</li>
                    </ul>
                </div>

                <!-- Workshop 4 -->
                <div class="workshop-card fade-in-up">
                    <h3>4. Nutrição e Hábitos Saudáveis</h3>
                    <ul class="workshop-contexts">
                        <li>Identificação de alimentos saudáveis e seus benefícios</li>
                        <li>Importância de uma alimentação equilibrada</li>
                        <li>Hábitos de vida saudáveis: exercícios físicos e sono</li>
                        <li>Prevenção de doenças relacionadas à má alimentação</li>
                    </ul>
                </div>

                <!-- Workshop 5 -->
                <div class="workshop-card fade-in-up">
                    <h3>5. Pequenos Cientistas</h3>
                    <ul class="workshop-contexts">
                        <li>Despertar da curiosidade científica e observação</li>
                        <li>Realização de experimentos simples e seguros</li>
                        <li>Compreensão de fenômenos naturais e tecnológicos</li>
                        <li>Estímulo ao pensamento crítico e à investigação</li>
                    </ul>
                </div>

                <!-- Workshop 6 -->
                <div class="workshop-card fade-in-up">
                    <h3>6. Cidadania Digital</h3>
                    <ul class="workshop-contexts">
                        <li>Uso responsável e seguro da internet</li>
                        <li>Proteção de dados pessoais e privacidade online</li>
                        <li>Combate ao cyberbullying e fake news</li>
                        <li>Ética e respeito nas interações digitais</li>
                    </ul>
                </div>

                <!-- Workshop 7 -->
                <div class="workshop-card fade-in-up">
                    <h3>7. Anti-Bullying e Amizade</h3>
                    <ul class="workshop-contexts">
                        <li>Identificação e prevenção de situações de bullying</li>
                        <li>Construção de relações de amizade saudáveis</li>
                        <li>Empatia e respeito às diferenças</li>
                        <li>Promoção de um ambiente escolar inclusivo e acolhedor</li>
                    </ul>
                </div>

                <!-- Workshop 8 -->
                <div class="workshop-card fade-in-up">
                    <h3>8. Doação de Órgãos</h3>
                    <ul class="workshop-contexts">
                        <li>Conscientização sobre a importância da doação de órgãos</li>
                        <li>Esclarecimento de mitos e verdades sobre o tema</li>
                        <li>O impacto da doação na vida de outras pessoas</li>
                        <li>Discussão sobre a decisão familiar e o ato de solidariedade</li>
                    </ul>
                </div>

                <!-- Workshop 9 -->
                <div class="workshop-card fade-in-up">
                    <h3>9. Prevenção de Dengue e Pragas</h3>
                    <ul class="workshop-contexts">
                        <li>Identificação dos focos de proliferação do mosquito Aedes aegypti</li>
                        <li>Medidas de prevenção e combate à dengue e outras doenças</li>
                        <li>Importância da participação da comunidade na prevenção</li>
                        <li>Cuidados com o meio ambiente para evitar pragas</li>
                    </ul>
                </div>

                <!-- Workshop 10 -->
                <div class="workshop-card fade-in-up">
                    <h3>10. Reciclagem e Reutilização</h3>
                    <ul class="workshop-contexts">
                        <li>Diferença entre lixo e resíduo</li>
                        <li>Importância da coleta seletiva e da reciclagem</li>
                        <li>Criatividade na reutilização de materiais</li>
                        <li>Redução do impacto ambiental e consumo consciente</li>
                    </ul>
                </div>

                <!-- Workshop 11 -->
                <div class="workshop-card fade-in-up">
                    <h3>11. Cultura de Paz e Prevenção</h3>
                    <ul class="workshop-contexts">
                        <li>Resolução pacífica de conflitos</li>
                        <li>Promoção do diálogo e da empatia</li>
                        <li>Combate à violência em todas as suas formas</li>
                        <li>Construção de uma cultura de respeito e solidariedade</li>
                    </ul>
                </div>

                <!-- Workshop 12 -->
                <div class="workshop-card fade-in-up">
                    <h3>12. Educação Ambiental</h3>
                    <ul class="workshop-contexts">
                        <li>Conscientização sobre a importância da preservação do meio ambiente</li>
                        <li>Impacto das ações humanas na natureza</li>
                        <li>Desenvolvimento de hábitos sustentáveis</li>
                        <li>Proteção da biodiversidade e dos recursos naturais</li>
                    </ul>
                </div>

                <!-- Workshop 13 -->
                <div class="workshop-card fade-in-up">
                    <h3>13. Diversidade e Inclusão</h3>
                    <ul class="workshop-contexts">
                        <li>Valorização das diferentes culturas e etnias</li>
                        <li>Respeito às pessoas com deficiência</li>
                        <li>Combate ao preconceito e à discriminação</li>
                        <li>Promoção de um ambiente inclusivo e acolhedor para todos</li>
                    </ul>
                </div>

                <!-- Workshop 14 -->
                <div class="workshop-card fade-in-up">
                    <h3>14. Educação para o Trânsito</h3>
                    <ul class="workshop-contexts">
                        <li>Regras básicas de segurança no trânsito para pedestres e ciclistas</li>
                        <li>Importância do uso do cinto de segurança e cadeirinha</li>
                        <li>Respeito aos sinais de trânsito e aos limites de velocidade</li>
                        <li>Comportamento seguro no transporte escolar e público</li>
                    </ul>
                </div>

                <!-- Workshop 15 -->
                <div class="workshop-card fade-in-up">
                    <h3>15. Regras Sociais</h3>
                    <ul class="workshop-contexts">
                        <li>Importância das regras para a convivência em sociedade</li>
                        <li>Boas maneiras e etiqueta social</li>
                        <li>Respeito às autoridades e às instituições</li>
                        <li>Desenvolvimento do senso de responsabilidade e cidadania</li>
                    </ul>
                </div>

                <!-- Workshop 16 -->
                <div class="workshop-card fade-in-up">
                    <h3>16. Saúde e Bem-Estar</h3>
                    <ul class="workshop-contexts">
                        <li>Promoção da saúde física e mental</li>
                        <li>Gerenciamento do estresse e das emoções</li>
                        <li>Importância do sono e do descanso</li>
                        <li>Desenvolvimento de hábitos saudáveis para uma vida plena</li>
                    </ul>
                </div>

                <!-- Workshop 17 -->
                <div class="workshop-card fade-in-up">
                    <h3>17. Saúde e Prevenção</h3>
                    <ul class="workshop-contexts">
                        <li>Prevenção de doenças e infecções</li>
                        <li>Importância da vacinação</li>
                        <li>Cuidados com a higiene pessoal e do ambiente</li>
                        <li>Noções básicas de primeiros socorros</li>
                    </ul>
                </div>

                <!-- Workshop 18 -->
                <div class="workshop-card fade-in-up">
                    <h3>18. Respeito e Igualdade</h3>
                    <ul class="workshop-contexts">
                        <li>Reconhecimento e valorização da diversidade humana</li>
                        <li>Combate a todas as formas de preconceito e discriminação</li>
                        <li>Promoção da igualdade de direitos e oportunidades</li>
                        <li>Construção de uma sociedade justa e equitativa</li>
                    </ul>
                </div>

                <!-- Workshop 19 -->
                <div class="workshop-card fade-in-up">
                    <h3>19. Habilidades Socioemocionais</h3>
                    <ul class="workshop-contexts">
                        <li>Autoconhecimento e autoconsciência</li>
                        <li>Gerenciamento de emoções e impulsos</li>
                        <li>Empatia e habilidades de relacionamento</li>
                        <li>Tomada de decisões responsáveis e resolução de problemas</li>
                    </ul>
                </div>

                <!-- Workshop 20 -->
                <div class="workshop-card fade-in-up">
                    <h3>20. Prevenção ao Uso de Drogas</h3>
                    <ul class="workshop-contexts">
                        <li>Conscientização sobre os riscos e consequências do uso de drogas</li>
                        <li>Desenvolvimento de habilidades de resistência à pressão de grupo</li>
                        <li>Importância de escolhas saudáveis e estilo de vida equilibrado</li>
                        <li>Canais de ajuda e apoio para quem precisa</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Autism Project Section -->
    <section class="autism-project">
        <div class="container">
            <div class="autism-content fade-in-up">
                <h2>Inclusão e Desenvolvimento: Atividades Adaptadas para Crianças Autistas</h2>
                <p>Além dos workshops regulares, o Universo Doug oferece um projeto dedicado a atividades adaptadas para crianças autistas, utilizando a interação com o humanoide Doug para estimular o desenvolvimento cognitivo, social e emocional de forma personalizada e inclusiva. Nossa abordagem especializada reconhece as necessidades únicas de cada criança, promovendo um ambiente seguro e acolhedor para o aprendizado.</p>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta" id="contact">
        <div class="container">
            <div class="fade-in-up">
                <h2>Transforme a Educação na Sua Instituição!</h2>
                <p>Junte-se ao Instituto Somar e traga o Universo Doug para seus alunos. Ofereça uma experiência educacional inovadora que prepara as futuras gerações para um mundo em constante evolução.</p>
                
                <a href="tel:+5567992837970" class="cta-button" style="font-size: 1.3rem; padding: 18px 36px; margin: 1rem;">
                    <i class="fas fa-phone"></i> Ligue Agora!
                </a>
                
                <a href="https://wa.me/5567992837970" class="cta-button" style="font-size: 1.3rem; padding: 18px 36px; margin: 1rem; background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>

                <div class="contact-info">
                    <h3>Entre em Contato Conosco</h3>
                    <div class="phone-number">
                        <i class="fas fa-phone"></i> (67) 99283-7970
                    </div>
                    <p style="margin-top: 1rem; opacity: 0.9;">
                        Agende uma demonstração gratuita e veja como Doug pode revolucionar o aprendizado na sua escola!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2025 Instituto Somar - Tecnologia e Educação. Todos os direitos reservados.</p>
            <p style="margin-top: 0.5rem; opacity: 0.7;">Desenvolvido com tecnologia e paixão pela educação.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
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

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all fade-in-up elements
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)';
            }
        });

        // Mobile menu toggle (if needed)
        const mobileMenuToggle = () => {
            // Implementation for mobile menu if needed
        };

        // Add click tracking for CTA buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Add analytics tracking here if needed
                console.log('CTA button clicked:', e.target.textContent);
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    </script>
</body>
</html>
