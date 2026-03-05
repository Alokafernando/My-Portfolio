AOS.init({ once: true, offset: 60, duration: 800 });

    /* ════════ PARTICLE CANVAS ════════ */
    (function() {
        const canvas = document.getElementById('particle-canvas');
        const ctx    = canvas.getContext('2d');
        let W, H, particles = [];
        function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
        resize();
        $(window).on('resize', resize);
        function randomParticle() {
            return { x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.5+0.3,
                dx:(Math.random()-0.5)*0.3, dy:(Math.random()-0.5)*0.3, alpha:Math.random()*0.5+0.1 };
        }
        for (let i = 0; i < 90; i++) particles.push(randomParticle());
        function draw() {
            ctx.clearRect(0,0,W,H);
            particles.forEach((p,i) => {
                p.x+=p.dx; p.y+=p.dy;
                if(p.x<0||p.x>W) p.dx*=-1;
                if(p.y<0||p.y>H) p.dy*=-1;
                ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                ctx.fillStyle=`rgba(219,39,119,${p.alpha})`; ctx.fill();
                for(let j=i+1;j<particles.length;j++){
                    const q=particles[j], dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
                    if(d<100){ ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
                        ctx.strokeStyle=`rgba(219,39,119,${0.06*(1-d/100)})`; ctx.lineWidth=0.5; ctx.stroke(); }
                }
            });
            requestAnimationFrame(draw);
        }
        draw();
    })();

    /* ════════ CUSTOM CURSOR ════════ */
    (function() {
        const $cur  = $('#cursor');
        const $ring = $('#cursor-ring');
        if (!$cur.length || !$ring.length) return;
        let mx=0, my=0, rx=0, ry=0;
        $(document).on('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
        (function animCursor() {
            rx += (mx - rx) * 0.18;
            ry += (my - ry) * 0.18;
            $cur.css({ left: mx, top: my });
            $ring.css({ left: rx, top: ry });
            requestAnimationFrame(animCursor);
        })();
        $('a, button, .magnetic, .stat-card').on('mouseenter', function() {
            $cur.addClass('hover'); $ring.addClass('hover');
        }).on('mouseleave', function() {
            $cur.removeClass('hover'); $ring.removeClass('hover');
        });
    })();

    /* ════════ GSAP HERO ENTRANCE ════════ */
    gsap.timeline({ delay: 0.2 })
        .from('#hero-line-1', { opacity:0, y:60, duration:1, ease:'power3.out' })
        .from('#hero-line-2', { opacity:0, y:60, duration:1, ease:'power3.out' }, '-=0.6');

    /* ════════ TYPEWRITER SUBTITLE ════════ */
    (function() {
        const $el  = $('#hero-subtitle');
        const text = 'Full Stack Developer  •  Java  •  Spring Boot  •  React';
        let i = 0;
        const $cursor = $('<span>').addClass('type-cursor');
        setTimeout(function() {
            function type() {
                if (i <= text.length) {
                    $el.text(text.slice(0, i)).append($cursor);
                    i++;
                    setTimeout(type, 45);
                }
            }
            type();
        }, 1800);
    })();

    /* ════════ HEADER SCROLL EFFECT ════════ */
    const $header = $('#main-header');
    $(window).on('scroll.header', function() {
        if ($(this).scrollTop() > 80) {
            $header.css({ background:'rgba(0,0,0,0.85)', backdropFilter:'blur(16px)', boxShadow:'0 1px 0 rgba(255,255,255,0.05)' });
        } else {
            $header.css({ background:'transparent', backdropFilter:'none', boxShadow:'none' });
        }
    });

    /* ════════ HEADING UNDERLINE ON SCROLL ════════ */
    const headingObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) $(e.target).addClass('in-view'); });
    }, { threshold: 0.5 });
    $('.heading-line').each(function() { headingObserver.observe(this); });

    /* ════════ COUNTER ANIMATION ════════ */
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const $card  = $(entry.target);
            const target = parseInt($card.data('count'));
            const $el    = $card.find('.counter');
            let current  = 0;
            const step   = Math.ceil(target / 50);
            const timer  = setInterval(function() {
                current = Math.min(current + step, target);
                $el.text(current);
                if (current >= target) clearInterval(timer);
            }, 30);
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.6 });
    $('[data-count]').each(function() { counterObserver.observe(this); });

    /* ════════ PROGRESS BARS ════════ */
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            $(entry.target).find('.progress-fill').each(function() {
                $(this).css('width', $(this).data('width') + '%');
            });
            barObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 });
    $('.about-text').each(function() { barObserver.observe(this); });

    /* ════════ SKILL CARDS ════════ */
    const skills = [
        {name:'ReactJS',     src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                  inv:false},
        {name:'TypeScript',  src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',        inv:false},
        {name:'JavaScript',  src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',        inv:false},
        {name:'HTML5',       src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',                  inv:false},
        {name:'CSS3',        src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',                    inv:false},
        {name:'Tailwind',    src:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',                    inv:false},
        {name:'Java',        src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',                    inv:false},
        {name:'Spring Boot', src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',                inv:false},
        {name:'Node.js',     src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',       inv:false},
        {name:'ExpressJS',   src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',              inv:true },
        {name:'Redux',       src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',                  inv:false},
        {name:'MySQL',       src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',                  inv:false},
        {name:'MongoDB',     src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',              inv:false},
        {name:'Firebase',    src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',               inv:false},
        {name:'React Native',src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                  inv:false},
        {name:'Python',      src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',                inv:false},
        {name:'Hibernate',   src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',          inv:false},
        {name:'Postman',     src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',              inv:false},
        {name:'Git',         src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',                      inv:false},
        {name:'GitHub',      src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',               inv:true },
        {name:'Docker',      src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',               inv:false},
        {name:'Vercel',      src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',               inv:true },
        {name:'AWS',         src:'https://unpkg.com/simple-icons@v9/icons/amazonaws.svg',                                        inv:true },
        {name:'Expo',        src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',                   inv:true },
    ];
    const $grid  = $('#skills-grid');
    const delays = [0,100,200,300,400,500];
    $.each(skills, function(i, s) {
        const $card = $('<div>').attr({ 'data-aos':'fade-up', 'data-aos-delay': delays[i % 6] })
            .css({ position:'relative', padding:'clamp(0.75rem,2.5vw,2rem)', borderRadius:'1rem',
                border:'1px solid #1f2937', background:'rgba(17,17,27,0.4)', overflow:'hidden',
                transition:'all 0.45s cubic-bezier(0.16,1,0.3,1)', cursor:'default' });
        const $glow = $('<div>').css({ position:'absolute', inset:0,
            background:'linear-gradient(135deg,rgba(219,39,119,0.07),transparent)',
            opacity:0, transition:'opacity 0.45s', pointerEvents:'none' });
        const $inner = $('<div>').css({ position:'relative', zIndex:1, display:'flex',
            flexDirection:'column', alignItems:'center' });
        const $img = $('<img>').attr({ src:s.src, alt:s.name })
            .css({ width:'clamp(28px,5vw,48px)', height:'clamp(28px,5vw,48px)',
                marginBottom:'0.5rem', filter:'grayscale(1)', transition:'all 0.45s' });
        const $label = $('<span>').text(s.name)
            .css({ fontSize:'clamp(7px,1.1vw,11px)', fontWeight:700, letterSpacing:'0.07em',
                textTransform:'uppercase', color:'#6b7280', textAlign:'center',
                lineHeight:1.2, transition:'color 0.3s' });
        $inner.append($img, $label);
        $card.append($glow, $inner);
        $card.on('mouseenter', function() {
            $card.css({ borderColor:'rgba(219,39,119,0.5)', transform:'translateY(-10px) scale(1.03)', boxShadow:'0 20px 40px rgba(219,39,119,0.12)' });
            $glow.css('opacity', 1);
            $img.css({ filter: s.inv ? 'invert(1) brightness(2)' : 'grayscale(0)', transform:'scale(1.15)' });
            $label.css('color', '#fff');
        }).on('mouseleave', function() {
            $card.css({ borderColor:'#1f2937', transform:'translateY(0) scale(1)', boxShadow:'none' });
            $glow.css('opacity', 0);
            $img.css({ filter:'grayscale(1)', transform:'scale(1)' });
            $label.css('color', '#6b7280');
        });
        $grid.append($card);
    });

    /* ════════ HAMBURGER ════════ */
    const $btn  = $('#hamburger-btn');
    const $menu = $('#mobile-menu');
    $btn.on('click', function() {
        $btn.toggleClass('open');
        $menu.toggleClass('open');
        $('body').css('overflow', $menu.hasClass('open') ? 'hidden' : '');
    });
    $('.mobile-link').on('click', function() {
        $btn.removeClass('open');
        $menu.removeClass('open');
        $('body').css('overflow', '');
    });

    /* ════════ SMOOTH SCROLL ════════ */
    $('a[href^="#"]').on('click', function(e) {
        const id = $(this).attr('href');
        if (!id || id === '#') return;
        const $target = $(id);
        if (!$target.length) return;
        e.preventDefault();
        const headerHeight = $('#main-header').outerHeight();
        const targetPos    = $target.offset().top - headerHeight;
        const start        = $(window).scrollTop();
        const dist         = targetPos - start;
        const dur          = 1200;
        let t0             = null;
        (function tick(ts) {
            if (!t0) t0 = ts;
            const p    = Math.min((ts - t0) / dur, 1);
            const ease = p < 0.5 ? 8*p*p*p*p : 1 - Math.pow(-2*p+2,4)/2;
            window.scrollTo(0, start + dist * ease);
            if (p < 1) requestAnimationFrame(tick);
        })(performance.now());
    });

    /* ════════ ACTIVE NAV ════════ */
    const $sections = $('section[id]');
    const $navLinks = $('.custom-nav');
    $(window).on('scroll.nav', function() {
        let cur = '';
        $sections.each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - 200) cur = this.id;
        });
        $navLinks.each(function() {
            $(this).toggleClass('active', $(this).attr('href') === '#' + cur);
        });
    });