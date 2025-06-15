
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universo Doug - O Primeiro Humanoide Educador do Brasil</title>
    <meta name="description" content="Conheça Doug, o primeiro humanoide educador do Brasil. Instituto Somar apresenta tecnologia revolucionária para transformar a educação com 20 workshops inovadores.">
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #F8FAFC, #DBEAFE);
            color: #1E3A8A;
        }
        header {
            background: #ffffff;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 999;
        }
        .logo img {
            height: 60px;
        }
        .hero {
            text-align: center;
            padding: 4rem 2rem 2rem 2rem;
            position: relative;
            overflow: hidden;
        }
        .hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }
        .hero p {
            font-size: 1.2rem;
            color: #334155;
            max-width: 800px;
            margin: 0 auto;
        }
        .doug-image-wrapper {
            position: relative;
            margin-top: 3rem;
        }
        .doug-image-wrapper img {
            width: 250px;
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
        }
        section.about {
            max-width: 1000px;
            margin: 4rem auto;
            padding: 0 2rem;
            text-align: center;
        }
        section.about h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        section.about p {
            font-size: 1.1rem;
            color: #475569;
        }
        footer {
            background: #1E3A8A;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
    </style>
</head>
<body>

<header>
    <div class="logo">
        <img src="doug_logo.png" alt="Universo Doug Logo">
    </div>
</header>

<section class="hero">
    <h1>O Futuro da Educação Chegou</h1>
    <p>Doug é o primeiro humanoide educador do Brasil. Descubra como ele pode transformar o aprendizado nas escolas com tecnologia e carinho.</p>
    <div class="doug-image-wrapper">
        <img src="doug_photo.png" alt="Doug - Saudando com o braço levantado" alt="Doug - O Humanoide Educador">
    </div>
</section>

<section class="about">
    <h2>Sobre o Projeto</h2>
    <p>O Instituto Somar apresenta o Universo Doug: uma experiência imersiva de educação tecnológica com o primeiro humanoide educador do Brasil. Com foco em crianças e adolescentes, Doug oferece 20 workshops que abordam temas como educação financeira, cidadania digital, respeito às diferenças e muito mais.</p>

</section>

<section class="about">
    <h2>Workshops Educacionais</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        <div style="background:#fff; padding:1.5rem; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
            <h3 style="margin-bottom:0.5rem">Educação Financeira</h3>
            <p style="color:#475569;">Poupança, consumo consciente e planejamento.</p>
        </div>
        <div style="background:#fff; padding:1.5rem; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
            <h3 style="margin-bottom:0.5rem">Cidadania Digital</h3>
            <p style="color:#475569;">Uso ético e seguro da tecnologia.</p>
        </div>
        <div style="background:#fff; padding:1.5rem; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
            <h3 style="margin-bottom:0.5rem">Autocuidado e Respeito</h3>
            <p style="color:#475569;">Estímulo à autoestima e convivência saudável.</p>
        </div>
    </div>
</section>

<section class="about">
    <h2>Agende uma Demonstração</h2>
    <p>Quer ver Doug em ação na sua instituição? Clique no botão abaixo e fale conosco via WhatsApp.</p>
    <a href="https://wa.me/5567992837970?text=Olá! Gostaria de agendar uma demonstração do Doug, o humanoide educador." target="_blank"
       style="display:inline-block; background:#25D366; color:#fff; padding:1rem 2rem; border-radius:30px; text-decoration:none; font-weight:bold; margin-top:1rem; transition:all 0.3s ease;"
       onmouseover="this.style.background='#128C7E'" onmouseout="this.style.background='#25D366'">
        💬 Agendar via WhatsApp
    </a>

<section class="about">
    <h2>Solicite Informações por E-mail</h2>
    <p>Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.</p>
    <form action="mailto:contato@institutosomar.org.br" method="POST" enctype="text/plain" style="max-width:500px;margin:2rem auto;text-align:left;">
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required style="width:100%;padding:0.5rem;margin-bottom:1rem;"><br>
        <label for="email">E-mail:</label><br>
        <input type="email" id="email" name="email" required style="width:100%;padding:0.5rem;margin-bottom:1rem;"><br>
        <label for="mensagem">Mensagem:</label><br>
        <textarea id="mensagem" name="mensagem" rows="5" required style="width:100%;padding:0.5rem;margin-bottom:1rem;"></textarea><br>
        <button type="submit" style="background:#1E3A8A;color:#fff;padding:0.75rem 2rem;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">Enviar</button>
    </form>
</section>


<footer>

    <p>&copy; 2024 Instituto Somar - Universo Doug</p>
    <p>O Primeiro Humanoide Educador do Brasil</p>

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

    // Animação flutuante no Doug
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(30, 58, 138, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
</script>


</body>
</html>
