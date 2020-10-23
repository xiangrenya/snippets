const element = document.getElementById('some-element-you-want-to-animate');
let start: number;

function step(timestamp: number) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;
    element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
    if (elapsed < 2000) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);