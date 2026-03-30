/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-line-top"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-eyebrow">Proposta Estratégica · BYD Allma Bauru · 2026</div>
          <h1 className="hero-title">
            BYD ALLMA
            <span>BAURU</span>
          </h1>
          <p className="hero-subtitle">Um sistema mensal de autoridade visual para atrair compradores com intenção real de compra — saindo da dependência de indicação e marketing genérico.</p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Preparado por</span>
              <span className="hero-meta-value">Miguel Macedo · OMM</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Destinado a</span>
              <span className="hero-meta-value">BYD Allma Bauru</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Data</span>
              <span className="hero-meta-value">Abril 2026</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">Role para ver</div>
      </section>

      {/* VIDEO SECTION */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ 
              fontSize: '10px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: 'var(--amber)',
              fontWeight: 600,
              display: 'block'
            }}>
              O método em prática
            </span>
          </div>
          <div style={{ maxWidth: '480px', margin: '0 auto', border: '1px solid rgba(196,98,10,0.2)', overflow: 'hidden' }}>
            <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1176647278?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="VIDEO - HEADER - OMM -SITE"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">O diagnóstico</div>
          <h2 className="section-title">O que está travando as vendas</h2>
          <p className="section-desc">A BYD Allma Bauru tem um produto premium num mercado que cresce. O problema não é o produto — é como ele aparece antes do cliente entrar na concessionária.</p>

          <div className="problema-grid">
            <div className="problema-item highlight">
              <div className="problema-num">01</div>
              <div className="problema-title">Dependência de indicação</div>
              <div className="problema-desc">Quando o crescimento depende de quem conhece quem, o teto é baixo e imprevisível. O digital existe pra quebrar esse teto.</div>
            </div>
            <div className="problema-item">
              <div className="problema-num">02</div>
              <div className="problema-title">Marketing genérico</div>
              <div className="problema-desc">Posts de lançamento de modelo e preço não criam desejo. Criam comparação. Quem compra BYD não compra carro — compra identidade.</div>
            </div>
            <div className="problema-item">
              <div className="problema-num">03</div>
              <div className="problema-title">Sem humanização da marca</div>
              <div className="problema-desc">Ninguém compra de concessionária. Compra de pessoa. O rosto da Allma Bauru precisa aparecer com autoridade e consistência.</div>
            </div>
            <div className="problema-item highlight">
              <div className="problema-num">04</div>
              <div className="problema-title">Baixa intenção de compra nos leads</div>
              <div className="problema-desc">Conteúdo estratégico filtra o curioso do comprador. Quem chega qualificado fecha mais rápido, pechincha menos e indica mais.</div>
            </div>
          </div>

          <div className="diag-block">
            <div className="diag-quote">
              "O objetivo é aumentar a previsibilidade de vendas e qualificar a base de potenciais clientes com conteúdos de qualidade — <em>saindo da dependência exclusiva de indicações ou marketing genérico.</em>"
            </div>
            <div className="diag-stats">
              <div className="diag-stat">
                <div className="diag-stat-num">R$5K</div>
                <div className="diag-stat-label">investimento atual em agência<br />por 3 posts genéricos/mês</div>
              </div>
              <div className="diag-stat">
                <div className="diag-stat-num">0</div>
                <div className="diag-stat-label">estratégia de funil<br />no conteúdo atual</div>
              </div>
              <div className="diag-stat">
                <div className="diag-stat-num">12+</div>
                <div className="diag-stat-label">posts estratégicos/mês<br />com a OMM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCAO */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">A solução</div>
          <h2 className="section-title">Sistema OMM de autoridade visual</h2>
          <p className="section-desc">Não é agência. Não é freela avulso. É um sistema mensal completo onde cada post tem função dentro do funil de vendas da Allma.</p>

          <div className="solucao-grid">
            <div className="sol-item">
              <div className="sol-title">Conteúdo com função de venda</div>
              <div className="sol-desc">Cada post tem objetivo no funil — atrair, criar confiança ou converter. Nada postado por postar.</div>
            </div>
            <div className="sol-item">
              <div className="sol-title">Humanização real da concessionária</div>
              <div className="sol-desc">O rosto de quem vende. Os bastidores. A experiência do cliente. Isso cria desejo antes da visita.</div>
            </div>
            <div className="sol-item">
              <div className="sol-title">Vídeos que vendem o estilo de vida BYD</div>
              <div className="sol-desc">Não é review de produto. É mostrar quem dirige BYD e porque esse carro é a escolha certa pra quem chegou até aqui.</div>
            </div>
            <div className="sol-item">
              <div className="sol-title">Métricas que informam decisão</div>
              <div className="sol-desc">Relatório mensal com o que funcionou, o que ajustamos e para onde vai o próximo mês. Dados, não achismo.</div>
            </div>
            <div className="sol-item">
              <div className="sol-title">Roteiros escritos para cada peça</div>
              <div className="sol-desc">Ninguém da equipe precisa improvisar na câmera. Cada vídeo tem roteiro com gancho, desenvolvimento e CTA.</div>
            </div>
            <div className="sol-item">
              <div className="sol-title">Diária mensal de captação</div>
              <div className="sol-desc">Um dia inteiro na concessionária. Gravamos tudo de uma vez. A equipe não para. O mês de conteúdo fica pronto.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGAVEIS */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">O que você recebe</div>
          <h2 className="section-title">Entregáveis mensais</h2>
          <p className="section-desc">Tudo produzido, editado e entregue — sem você precisar pensar em nada além de vender.</p>

          <div className="entrega-list">
            <div className="entrega-item">
              <div className="entrega-num">01</div>
              <div className="entrega-content">
                <div className="entrega-title">Reels estratégicos de vendas</div>
                <div className="entrega-desc">Vídeos curtos com gancho, desenvolvimento e CTA — focados em atrair leads com intenção de compra. Mostram o produto, o vendedor e a experiência de compra na Allma.</div>
              </div>
              <div className="entrega-badge">6–8 por mês</div>
            </div>
            <div className="entrega-item">
              <div className="entrega-num">02</div>
              <div className="entrega-content">
                <div className="entrega-title">Fotos de produto e lifestyle</div>
                <div className="entrega-desc">Imagens estáticas dos modelos BYD com estética premium — para feed, stories e WhatsApp. Nada de foto tirada com celular no estacionamento.</div>
              </div>
              <div className="entrega-badge">4–6 por mês</div>
            </div>
            <div className="entrega-item">
              <div className="entrega-num">03</div>
              <div className="entrega-content">
                <div className="entrega-title">Vlog / bastidores da concessionária</div>
                <div className="entrega-desc">Conteúdo que humaniza a marca — equipe de vendas, entrega de veículo, dia a dia da Allma. Gera identificação e confiança antes da visita.</div>
              </div>
              <div className="entrega-badge">1–2 por mês</div>
            </div>
            <div className="entrega-item">
              <div className="entrega-num">04</div>
              <div className="entrega-content">
                <div className="entrega-title">Roteiros escritos para toda a equipe</div>
                <div className="entrega-desc">Cada pessoa que aparece na câmera sabe exatamente o que falar. Eliminamos o improviso que arruína a autoridade da marca.</div>
              </div>
              <div className="entrega-badge">Todos os vídeos</div>
            </div>
            <div className="entrega-item">
              <div className="entrega-num">05</div>
              <div className="entrega-content">
                <div className="entrega-title">Diária mensal de captação na concessionária</div>
                <div className="entrega-desc">Um dia inteiro na Allma — câmera, luz, direção. Gravamos o mês inteiro de conteúdo sem atrapalhar a operação comercial.</div>
              </div>
              <div className="entrega-badge">1 dia/mês</div>
            </div>
            <div className="entrega-item">
              <div className="entrega-num">06</div>
              <div className="entrega-content">
                <div className="entrega-title">Análise de métricas e reunião mensal</div>
                <div className="entrega-desc">Relatório com alcance, engajamento, leads gerados e ajustes pro próximo mês. Decisão baseada em dados, não em feeling.</div>
              </div>
              <div className="entrega-badge">Todo mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">Como funciona</div>
          <h2 className="section-title">O processo mensal</h2>
          <p className="section-desc">Quatro semanas com etapas definidas. A Allma foca em vender — eu cuido de tudo que aparece no digital.</p>

          <div className="processo-steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-week">Semana 1</div>
              <div className="step-title">Estratégia e roteiros</div>
              <div className="step-desc">Reunião de alinhamento, definição dos temas do mês, roteiros escritos e aprovados antes de ligar qualquer câmera.</div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-week">Semana 2</div>
              <div className="step-title">Diária de captação</div>
              <div className="step-desc">Um dia inteiro na concessionária. Gravamos tudo — reels, fotos, bastidores. Equipe da Allma aparece sem improvisar.</div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-week">Semana 3</div>
              <div className="step-title">Edição e entrega</div>
              <div className="step-desc">Edição completa, legendas, trilhas, calendário de publicação. Tudo entregue pronto para publicar.</div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-week">Semana 4</div>
              <div className="step-title">Métricas e próximo mês</div>
              <div className="step-desc">Análise de performance, reunião de fechamento e alinhamento estratégico para o mês seguinte.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">O investimento</div>
          <h2 className="section-title">Comparativo direto</h2>
          <p className="section-desc">A Allma já investe R$5.000/mês em conteúdo. A questão é o que esse investimento está gerando.</p>

          <div className="inv-block">
            <div className="inv-card">
              <div className="inv-label">Situação atual · Agência</div>
              <div className="inv-price"><span>R$</span>5.000</div>
              <div className="inv-period">por mês</div>
              <ul className="inv-items">
                <li>3 posts genéricos por mês</li>
                <li>Sem estratégia de funil de vendas</li>
                <li>Sem roteiro — improviso na câmera</li>
                <li>Sem análise de métricas de resultado</li>
                <li>Sem humanização da equipe</li>
                <li>Sem direção de imagem</li>
                <li>R$1.666 por post sem estratégia</li>
              </ul>
            </div>

            <div className="inv-card featured">
              <div className="inv-label featured-label">Proposta OMM · Sistema completo</div>
              <div className="inv-price"><span>R$</span>3.500</div>
              <div className="inv-period">por mês · contrato 6 meses</div>
              <ul className="inv-items">
                <li>12+ posts estratégicos por mês</li>
                <li>Funil: topo, meio e fundo em cada mês</li>
                <li>Roteiros escritos para toda aparição</li>
                <li>Análise mensal com dados reais</li>
                <li>Humanização da equipe e marca</li>
                <li>Direção de imagem profissional</li>
                <li>R$291 por post com estratégia completa</li>
              </ul>
              <div className="inv-highlight">
                <p>Menos investimento. Quatro vezes mais conteúdo. Com estratégia que qualifica o lead antes de ele entrar na concessionária.</p>
              </div>
              <div className="inv-note">Contrato de 6 meses. Saída sem multa após o 3º mês com aviso de 15 dias. Pagamento até dia 05 via PIX.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section">
        <div className="wrap">
          <div className="section-label">Por que a OMM</div>
          <h2 className="section-title">O que muda na prática</h2>

          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-title">Filmmaker estratégico — não câmera operator</div>
              <div className="diff-desc">Cada decisão de imagem tem função comercial. Enquadramento, tom, roteiro — tudo pensado para gerar resultado, não para parecer bonito.</div>
            </div>
            <div className="diff-item">
              <div className="diff-title">Conteúdo que pensa no cliente da Allma</div>
              <div className="diff-desc">O comprador de BYD é específico. Tecnologia, sustentabilidade, status discreto. O conteúdo fala com esse perfil — não com todo mundo.</div>
            </div>
            <div className="diff-item">
              <div className="diff-title">Operação que não atrapalha a concessionária</div>
              <div className="diff-desc">Um dia por mês. Câmera, luz, direção. A equipe de vendas não para — a gente grava nos espaços certos sem interromper o fechamento.</div>
            </div>
            <div className="diff-item">
              <div className="diff-title">Parceiro de imagem — não fornecedor</div>
              <div className="diff-desc">A OMM entra como sócio estratégico de imagem da Allma Bauru. O sucesso de vocês é o portfólio que me abre o próximo cliente.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="wrap">
          <h2 className="cta-title">
            Próximo passo:
            <span>uma conversa.</span>
          </h2>
          <p className="cta-desc">Quero entender o momento atual da Allma e mostrar pessoalmente como o sistema funciona na prática. 20 minutos são suficientes.</p>
          <div className="cta-contact">
            <div className="cta-name">Miguel Macedo</div>
            <div className="cta-role">Filmmaker Estratégico · OMM · Piratininga SP</div>
            <div className="cta-phone">
              <a href="https://wa.me/5514991137404" target="_blank" rel="noopener noreferrer" className="cta-whatsapp-btn">
                WHATSAPP
              </a>
              <span className="cta-handle">@omacedomiguel</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-inner">
            <div className="footer-brand">OMM · Organização · Método · Movimento</div>
            <div className="footer-info">Proposta exclusiva BYD Allma Bauru · Abril 2026</div>
          </div>
        </div>
      </footer>
    </>
  );
}
