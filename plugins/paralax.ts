export default defineNuxtPlugin(() => {
    const parallax = (e: MouseEvent) => {
        let _w: number = window.innerWidth/2;
        let _h: number = window.innerHeight/2;
        let _mouseX: number = e.clientX;
        let _mouseY: number = e.clientY;
        let _depth1: string = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2: string = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3: string = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x: string = `${_depth3}, ${_depth2}, ${_depth1}`;
        const elem: HTMLElement | null = document.querySelector("#app");
        if (elem) {
            elem.style.backgroundPosition = x;
        }
    };
  
    if (process.client) {
        document.addEventListener("mousemove", parallax);
    }
});