document.getElementById("home-link").addEventListener("click", function() {
    // Показать главную страницу
    document.getElementById("home-section").style.display = "block";
    document.getElementById("shop-section").style.display = "none";
    document.getElementById("news-section").style.display = "none";
});

document.getElementById("shop-link").addEventListener("click", function() {
    // Показать каталог приложений
    document.getElementById("home-section").style.display = "none";
    document.getElementById("shop-section").style.display = "block";
    document.getElementById("news-section").style.display = "none";
});

document.getElementById("news-link").addEventListener("click", function() {
    // Показать новости
    document.getElementById("home-section").style.display = "none";
    document.getElementById("shop-section").style.display = "none";
    document.getElementById("news-section").style.display = "block";
});

// По умолчанию отображаем главную страницу
document.getElementById("home-section").style.display = "block";
