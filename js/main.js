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
