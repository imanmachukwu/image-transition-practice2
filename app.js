const leavePageImageAnimation = (container) => {
    const heroText = container.querySelector("#hero_text")
    const imageText = container.querySelector(".project_image p")
    const image = container.querySelector(".project_image img")
    /* const imageContainer = container.querySelector("#hero_container a") */
/*     const menuIcon = document.querySelector("header svg"); */

    const gtl = gsap.timeline({
        defaults: {
            ease: "power3.inOut",
            duration: 1,
        }
    }); 

    gtl.to(imageText, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
    }, 0).to(heroText, {
        y: 50,
        opacity: 0,
    }, 0).to(image, {
        display: "none",
        opacity: 0,
        duration: 0.2,
    }, 0)/*    .to(image, {
        scale: 1,
        objectPosition: "0px -700px",
    }, 0) .to(imageContainer, {
        width: 0,
        display: "none",
    }).from(imageContainer, {
        position: "absolute",
        right: 0,
        width: "38%",
    }, 0).to(imageContainer, {
        width: "100%",
        position: "absolute",
        left: 0,
    }, 0) */

    return gtl;
}

const enterPageImageAnimation = (container) => {
    const image = container.querySelector("img")
    const imageTitle = container.querySelector("h1")
    const imageSubtitle = [container.querySelectorAll("h4")]

    const gtl = gsap.timeline({
        defaults: {
            ease: "power3.inOut",
            duration: 2,
        }
    });

    gtl.from(image, {
        position: "absolute",
        right: 0,
        width: "47%",
        height: "100dvh",
        objectPosition: "-82px 0px",
        marginTop: "-16px",
        marginLeft: "-16px",
    }, 0).from([imageTitle, imageSubtitle], {
        y: 30,
        opacity: 0,
    }).to(container, {
        left: "88px",
    }, 0)/* .to(image, {
        position: "relative",
        width: "100%",
        height: "60%",
        objectFit: "cover",
        objectPosition: "0px -650px",
        position: "relative",
        marginTop: "0px",
    }, 0) */

    return gtl;
}

barba.init({
    transitions: [{
      name: 'image-transition',
      sync: true,
      from: {
        namespace: [
            "home",
        ]
      },
      to: {
        namespace: [
            "project",
        ]
      },
      leave({current}) {
        return leavePageImageAnimation(current.container)
      },
      enter({next}) {
        return enterPageImageAnimation(next.container)
      }
    }]
  });