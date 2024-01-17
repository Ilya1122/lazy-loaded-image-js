// document.addEventListener("DOMContentLoaded", function () {
//   // Вибираємо всі зображення з атрибутом loading="lazy"
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//   // Встановлюємо настройки для Intersection Observer
//   const observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.1,
//   };

//   // Створюємо об'єкт Intersection Observer та передаємо обробник подій
//   const observer = new IntersectionObserver(
//     handleIntersection,
//     observerOptions
//   );

//   // Додаємо кожен елемент до спостереження
//   lazyImages.forEach((img) => {
//     observer.observe(img);
//   });

//   // Функція, яка викликається при входженні в зону видимості
//   function handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Видалити обробник та атрибут loading, щоб завантажити зображення
//         observer.unobserve(entry.target);
//         entry.target.removeAttribute("loading");
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
});
