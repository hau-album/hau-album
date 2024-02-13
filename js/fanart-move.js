//アニメーションの速度を計算してCSS変数に
function calculateLoopAnimationSpeed() {
    const targets = document.querySelectorAll('.js-tick');
    if (!targets.length) {
        return;
    }
    
    const distance = window.innerWidth;
    const mql = window.matchMedia('(min-width: 801px)');
    const time = mql.matches ? 18 : 9; //ここで時間を調整
    const speed = distance / time;
    
    targets.forEach((target) => {
        const tickElems = target.querySelectorAll('.js-tick-item');
        if (!tickElems.length) {
        return;
        }
    
        const total = tickElems.length - 1;
    
        tickElems.forEach((el, i) => {
        const elWidth = el.clientWidth;
        const elTime = Math.floor(elWidth / speed);
        el.style.setProperty('--tick-duration', `${elTime}s`);
        el.style.setProperty('--tick-delay', `${elTime / -2}s`);
        });
    });
    }
function resizeRefresh() {
    const target = document.body;
    const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        calculateLoopAnimationSpeed();
        });
    });
    resizeObserver.observe(target);
}