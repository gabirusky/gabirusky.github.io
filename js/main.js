AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-out-cubic',
});

// Drag to Scroll Functionality for Skills Section
const skillsContainer = document.getElementById('skills-container');

if (skillsContainer) {
    let isDown = false;
    let startX;
    let currentTranslateX = 0;
    let animationStopped = false;
    let loopWidth = 0;

    function updateLoopWidth() {
        if (skillsContainer && skillsContainer.children.length > 0) {
            // The container has two identical children for the infinite scroll effect.
            // We want the width of one of them.
            // scrollWidth is the total width of the content.
            loopWidth = skillsContainer.scrollWidth / 2;
        }
    }

    window.addEventListener('resize', updateLoopWidth);

    // Initial calculation
    // Use setTimeout to ensure layout is complete
    setTimeout(updateLoopWidth, 100);

    const stopAnimation = () => {
        if (!animationStopped) {
            const style = window.getComputedStyle(skillsContainer);
            const matrix = new DOMMatrixReadOnly(style.transform);
            currentTranslateX = matrix.m41;

            skillsContainer.style.animation = 'none';
            skillsContainer.style.transform = `translateX(${currentTranslateX}px)`;

            animationStopped = true;
            updateLoopWidth();
        }
    };

    const startDrag = (e) => {
        isDown = true;
        skillsContainer.classList.add('cursor-grabbing');
        skillsContainer.classList.remove('cursor-grab');

        const pageX = e.pageX || e.touches[0].pageX;
        startX = pageX;

        stopAnimation();

        // Update currentTranslateX in case we are starting a new drag after a previous one
        const style = window.getComputedStyle(skillsContainer);
        const matrix = new DOMMatrixReadOnly(style.transform);
        currentTranslateX = matrix.m41;
    };

    const endDrag = () => {
        isDown = false;
        skillsContainer.classList.remove('cursor-grabbing');
        skillsContainer.classList.add('cursor-grab');
    };

    const moveDrag = (e) => {
        if (!isDown) return;
        e.preventDefault();

        const pageX = e.pageX || e.touches[0].pageX;
        const x = pageX;
        const walk = (x - startX);

        let newTranslateX = currentTranslateX + walk;

        // Infinite loop logic
        // Animation moves left (negative X).
        // Range is from 0 to -loopWidth.

        if (loopWidth > 0) {
            if (newTranslateX > 0) {
                newTranslateX -= loopWidth;
                currentTranslateX = newTranslateX;
                startX = x;
            } else if (newTranslateX < -loopWidth) {
                newTranslateX += loopWidth;
                currentTranslateX = newTranslateX;
                startX = x;
            }
        }

        skillsContainer.style.transform = `translateX(${newTranslateX}px)`;
    };

    skillsContainer.addEventListener('mousedown', startDrag);
    skillsContainer.addEventListener('touchstart', startDrag);

    skillsContainer.addEventListener('mouseleave', endDrag);
    skillsContainer.addEventListener('mouseup', endDrag);
    skillsContainer.addEventListener('touchend', endDrag);

    skillsContainer.addEventListener('mousemove', moveDrag);
    skillsContainer.addEventListener('touchmove', moveDrag);
}

/* Terminal Animation */
document.addEventListener('DOMContentLoaded', () => {
    const terminalContainer = document.getElementById('terminal-content');
    if (!terminalContainer) return;

    const commands = [
        {
            text: '> console.log("Loading profile for:", profile);',
            highlightedHtml: '> <span class="text-neon-blue">console</span>.log(<span class="text-green-400">"Loading profile for:"</span>, <span class="text-yellow-400">profile</span>);',
            type: 'command',
            delay: 0
        },
        { html: '<br>', type: 'output', delay: 200 },
        { html: '<span class="text-gray-500">> Loading profile for:</span> <span class="text-white">Gabriel Pereira</span>', type: 'output', delay: 500 },
        { html: '<span class="text-neon-purple">const</span> <span class="text-neon-blue">profile</span> = {', type: 'code', delay: 200 },
        { html: '<span class="pl-4">dev: <span class="text-green-400">"Gabriel Pereira"</span>,</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">role: <span class="text-green-400">"Junior Developer"</span>,</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">status: <span class="text-green-400">"Open to Work"</span>,</span>', type: 'code', delay: 200 },
        { html: '<br>', type: 'code', delay: 200 },
        { html: '<span class="pl-4 text-gray-500">// The unique blend of logic & creativity</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">origins: {</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-8">creative: <span class="text-green-400">"Radio & TV (UNIFATEA)"</span>,</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-8">technical: <span class="text-green-400">"Systems Analysis (FATEC)"</span></span>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">},</span>', type: 'code', delay: 200 },
        { html: '<br>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">skills: {</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-8">languages: [<span class="text-green-400">"Kotlin"</span>, <span class="text-green-400">"Java"</span>, <span class="text-green-400">"Python"</span>, <span class="text-green-400">"JavaScript"</span>],</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-8">core: [<span class="text-green-400">"Mobile Dev"</span>, <span class="text-green-400">"Data Analysis"</span>, <span class="text-green-400">"Automation"</span>],</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-8">soft: [<span class="text-green-400">"Fluent English (TOEIC 980)"</span>, <span class="text-green-400">"Communication"</span>, <span class="text-green-400">"Adaptability"</span>]</span>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">},</span>', type: 'code', delay: 200 },
        { html: '<br>', type: 'code', delay: 200 },
        { html: '<span class="pl-4">mission: <span class="text-green-400">"Refactoring creative intuition into structured algorithms."</span></span>', type: 'code', delay: 200 },
        { html: '};', type: 'code', delay: 200 },
    ];

    let currentLine = 0;

    function typeLine() {
        if (currentLine >= commands.length) return;

        const lineData = commands[currentLine];
        const lineEl = document.createElement('div');

        if (lineData.type === 'command') {
            lineEl.className = 'text-white font-bold font-mono';
        } else if (lineData.type === 'output') {
            lineEl.className = 'text-gray-300 font-mono';
        } else {
            lineEl.className = 'text-gray-300 font-mono';
        }

        terminalContainer.appendChild(lineEl);

        if (lineData.type === 'command') {
            let charIndex = 0;
            lineEl.textContent = '> ';
            const textToType = lineData.text.substring(2);

            const typeChar = () => {
                if (charIndex < textToType.length) {
                    lineEl.textContent += textToType.charAt(charIndex);
                    charIndex++;
                    terminalContainer.scrollTop = terminalContainer.scrollHeight;
                    setTimeout(typeChar, 50);
                } else {
                    if (lineData.highlightedHtml) {
                        lineEl.innerHTML = lineData.highlightedHtml;
                    }
                    currentLine++;
                    setTimeout(typeLine, lineData.delay);
                }
            };
            typeChar();
        } else {
            lineEl.innerHTML = lineData.html || lineData.text;
            terminalContainer.scrollTop = terminalContainer.scrollHeight;
            currentLine++;
            setTimeout(typeLine, lineData.delay);
        }
    }

    setTimeout(typeLine, 100);
});
