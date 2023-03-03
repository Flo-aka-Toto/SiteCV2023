//NAVBAR

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageXOffset ||
        this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

//TYPED

var typed = new Typed('.typed', {
    strings: ["", "Bienvenue sur mon site CV", "Bonjour, je vais me présenter, je m'appelle Florent , j'ai 28 ans et je suis originaire de Charente-Maritime, j'ai toujours vécu dans ma région et j'aime les paysages qu'elle offre le climat et la nature de celle si.Je suis actuellement à la recherche d'une alternance en développement web et web mobile sur une periode de 11 mois qui ce décompose en 3 mois de formation en écoles (WEBFORCE3) et 8 mois d'alternance en entreprise.J'ai la soif et l'envie de me diversifier et d'acquérir de nouvelles connaissance c'est pour cela que je me lance dans cette nouvelle aventure.J 'aime apprendre et je suis autodidacte, suite à une très grosse et lourde épreuve de ma vie je souhaite me reconvertir professionnellement et souhaite donc devenir développeur."],
    typeSpeed: 25,

});