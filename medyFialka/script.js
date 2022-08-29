let jeZapleMenu = false;
function menu() {
    if (jeZapleMenu) {
        jeZapleMenu = false;
        let open = document.getElementById("menu-znak-open");
        let close = document.getElementById("menu-znak-close");
        let header = document.getElementById("mobile-header");
        close.style.opacity = "0";
        open.style.opacity = "1";
        header.style.zIndex = "-1";
        header.style.opacity = "0";
    } else {
        jeZapleMenu = true;
        let open = document.getElementById("menu-znak-open");
        let close = document.getElementById("menu-znak-close");
        let header = document.getElementById("mobile-header");
        close.style.opacity = "1";
        open.style.opacity = "0";
        header.style.zIndex = "4";
        header.style.opacity = "1";
    }
}


let controler = new ScrollMagic.Controller();
if (window.innerWidth > 800) {

    let slideParalaxScene1 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-1',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-1', 1, { x: '+50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene2 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-2',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-2', 1, { x: '-50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene3 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-3',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-3', 1, { x: '+50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)


    let slideParalaxScene4 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-4',
        duration: '40%',
        triggerHook: 0.8
    })
        .setTween(TweenLite.from('.poznamka-4', 1, { x: '-50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)


    let slideParalaxScene5 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-1',
        duration: '30%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p1', 1, { x: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene6 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-2',
        duration: '30%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p2', 1, { x: '-50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene7 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-3',
        duration: '30%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p3', 1, { x: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene8 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-4',
        duration: '30%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p4', 1, { x: '-50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

} else {

    let slideParalaxScene1 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-1',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-1', 1, { opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene2 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-2',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-2', 1, { opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene3 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-3',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-3', 1, { opacity: 0, ease: Power0.none }))
        .addTo(controler)


    let slideParalaxScene4 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-4',
        duration: '40%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.poznamka-4', 1, { opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene5 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-1',
        duration: '80%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p1', 1, { top: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene6 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-2',
        duration: '80%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p2', 1, { top: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene7 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-3',
        duration: '80%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p3', 1, { top: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)

    let slideParalaxScene8 = new ScrollMagic.Scene({
        triggerElement: '.poznamka-4',
        duration: '80%',
        triggerHook: 0.7
    })
        .setTween(TweenLite.from('.img-p4', 1, { top: '50%', opacity: 0, ease: Power0.none }))
        .addTo(controler)
}
