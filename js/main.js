var fullscreen = document.querySelector('.fullscreen');
var menuList = document.querySelector('.fullscreen .menu__list');
const btn = document.getElementById("menu-toggle");
const lines = btn.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
let btnClass = cls.open;

btn.addEventListener("click", () => {
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
  } else if (btn.classList.contains(cls.close)) {
    btn.classList.remove(btnClass);
    btnClass = cls.open;
  }

	fullscreen.classList.toggle('is-active');
	document.body.classList.toggle('hidden');
	menuList.classList.toggle('slideInUp');

  void btn.offsetWidth;
  btn.classList.add(btnClass);
});

menuList.addEventListener('click', e=>{
	if(e.target.classList.contains('menu__link')){
		fullscreen.classList.toggle('is-active');
		document.body.classList.toggle('hidden');
		menuList.classList.toggle('slideInUp');

		btn.classList.remove(btnClass);
    	btnClass = cls.open;
	}
})


// scroll

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
