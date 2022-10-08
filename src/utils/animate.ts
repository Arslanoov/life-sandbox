export default function animate(cb: Function, fps: number): void {
    cb();
    setTimeout(() => {
        requestAnimationFrame(animate.bind(this, cb, fps));
    }, 1000 / fps);
}
