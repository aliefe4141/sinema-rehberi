// --- 5. HAFTA: FİLMLER SAYFASI TÜR FİLTRELEME (DOM İŞLEMLERİ) ---
const turSecimi = document.getElementById("tur-secimi");
const filmFiltreleBtn = document.getElementById("film-filtrele-btn");
const filmKartlari = document.querySelectorAll(".film-karti");

// Eğer kullanıcı filmler.html sayfasındaysa (yani bu buton sayfada varsa) çalıştır:
if (filmFiltreleBtn) {
    filmFiltreleBtn.addEventListener("click", function () {
        const secilenTur = turSecimi.value; // Seçilen değeri al (korku, romantik, aksiyon veya boş)

        filmKartlari.forEach(function (kart) {
            const kartTuru = kart.getAttribute("data-tur"); // Kartın üzerindeki data-tur değerini oku

            // "Tüm Türler" (boş) seçildiyse veya kartın türü seçilen türe eşitse göster, değilse gizle
            if (secilenTur === "" || kartTuru === secilenTur) {
                kart.style.display = "block";
            } else {
                kart.style.display = "none";
            }
        });
    });
}

// --- 5. HAFTA: SİNEMALAR SAYFASI KONUM VE FİLM FİLTRELEME (DOM İŞLEMLERİ) ---
const ilSecimi = document.getElementById("il-secimi");
const ilceSecimi = document.getElementById("ilce-secimi");
const sinemaFilmSecimi = document.getElementById("film-secimi");
const sinemaFiltreleBtn = document.getElementById("sinema-filtrele-btn");
const sinemaKartlari = document.querySelectorAll(".sinema-karti");
const sonucBulunamadi = document.getElementById("sonuc-bulunamadi");

if (sinemaFiltreleBtn) {
    sinemaFiltreleBtn.addEventListener("click", function () {
        const secilenIl = ilSecimi.value;
        const secilenIlce = ilceSecimi.value;
        const secilenFilm = sinemaFilmSecimi.value;
        let gorunenKartSayisi = 0;

        sinemaKartlari.forEach(function (kart) {
            const kartIl = kart.getAttribute("data-il");
            const kartIlce = kart.getAttribute("data-ilce");
            const kartFilm = kart.getAttribute("data-film");

            // Seçilen kriter boşsa (Tümü) veya kartın bilgisiyle eşleşiyorsa true döner
            const ilUygun = (secilenIl === "" || kartIl === secilenIl);
            const ilceUygun = (secilenIlce === "" || kartIlce === secilenIlce);
            const filmUygun = (secilenFilm === "" || kartFilm === secilenFilm);

            if (ilUygun && ilceUygun && filmUygun) {
                kart.style.display = "block";
                gorunenKartSayisi++;
            } else {
                kart.style.display = "none";
            }
        });

        // Eğer hiçbir kart eşleşmediyse kullanıcıya bilgi mesajı göster
        if (gorunenKartSayisi === 0) {
            sonucBulunamadi.style.display = "block";
        } else {
            sonucBulunamadi.style.display = "none";
        }
    });
}