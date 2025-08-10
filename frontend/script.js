/* ============ CONFIG ============ */
/*
  Если хочешь использовать backend для переводов — можно заменить translations = {} 
  на fetch('https://<your-backend>/translations').then(r=>r.json()).then(setTranslations)
*/

const translations = {
  ru: {
    langName: "Русский",
    dir: "ltr",
    tagline: "Batumi view & fresh coffee",
    hero_sub: "Уютное кафе с видом на Батумское море. Свежесваренный кофе и домашние бургеры.",
    nav_about: "О нас", nav_menu: "Меню", nav_location: "Локация", nav_contact: "Контакты",
    view_menu: "Посмотреть меню", how_find: "Как найти",
    about_title: "О нас", about_text: "Добро пожаловать в Coffee Mark — место для встреч, работы и отдыха. Мы готовим кофе с вниманием к деталям и подаём простые, вкусные блюда.",
    address_label: "Адрес:", phone_label: "Телефон:",
    menu_title: "Меню", menu_drinks: "Напитки", menu_burgers: "Бургеры",
    item: "Напиток", price_small: "Мал.", price_big: "Бол.", price: "Цена (лари)",
    hot_cold_note: "Все напитки доступны горячими и холодными.",
    menu_combos: "Комбо и добавки",
    where_title: "Где мы", where_text: "Мы находимся в центре Батуми — заходите на кофе с видом.",
    contact_title: "Контакты", contact_name: "Имя", contact_message: "Сообщение", send_btn: "Отправить",
    form_note: "Форма статическая — сообщения можно отправлять на email.",
    footer_text: "Уютное кафе в Батуми — кофе, бургеры, десерты.",
    // MENU items (we will use these to fill tables)
    menuData: {
      drinks: [
        { id: "americano", name: "Americano", small: "7", big: "8" },
        { id: "cappuccino", name: "Капучино", small: "8", big: "10" },
        { id: "raf", name: "Раф", small: "12", big: "12" },
        { id: "latte", name: "Латте", small: "10", big: "10" },
        { id: "flatwhite", name: "Флет вайт", small: "9", big: "9" },
        { id: "irish", name: "Ирландский кофе", small: "15", big: "15" },
        { id: "matcha", name: "Матча", small: "15", big: "15" },
        { id: "tea", name: "Чай", small: "5", big: "5" },
        { id: "cocoa", name: "Какао", small: "8", big: "8" }
      ],
      burgers: [
        { id: "hamburger", name: "Гамбургер", price: "19" },
        { id: "cheeseburger", name: "Чизбургер", price: "21" },
        { id: "bacon", name: "Бекон бургер", price: "23" },
        { id: "double", name: "Дабл бургер", price: "30" },
        { id: "chicken", name: "Чикен бургер", price: "25" },
        { id: "jalapeno", name: "Халапеньо бургер", price: "19" },
        { id: "fries", name: "Картошка фри (кетчуп входит)", price: "7" },
        { id: "hotdog", name: "Хотдог", price: "8" },
        { id: "combo", name: "Комбо (Гамбургер + картошка + кола 0.33)", price: "27" }
      ],
      extras: [
        { name: "Котлета на выбор (говядина/курица)", price: "4" },
        { name: "Бекон", price: "3" },
        { name: "Халапеньо", price: "2" },
        { name: "Чеддар", price: "3" },
        { name: "Доп. соус", price: "2" }
      ]
    }
  },

  en: {
    langName: "English",
    dir: "ltr",
    tagline: "Batumi view & fresh coffee",
    hero_sub: "Cozy café with a view of the Batumi sea. Fresh coffee and homemade burgers.",
    nav_about: "About", nav_menu: "Menu", nav_location: "Location", nav_contact: "Contacts",
    view_menu: "View menu", how_find: "How to find",
    about_title: "About", about_text: "Welcome to Coffee Mark — a place to meet, work and relax. We brew coffee with care and serve simple, tasty dishes.",
    address_label: "Address:", phone_label: "Phone:",
    menu_title: "Menu", menu_drinks: "Drinks", menu_burgers: "Burgers",
    item: "Item", price_small: "Small", price_big: "Large", price: "Price (GEL)",
    hot_cold_note: "All drinks available hot and cold.",
    menu_combos: "Combos & Extras",
    where_title: "Where we are", where_text: "We are located in central Batumi — drop by for coffee with a view.",
    contact_title: "Contacts", contact_name: "Name", contact_message: "Message", send_btn: "Send",
    form_note: "Form is static — send messages to email.",
    footer_text: "Cozy café in Batumi — coffee, burgers, desserts.",
    menuData: {
      drinks: [
        { id: "americano", name: "Americano", small: "7", big: "8" },
        { id: "cappuccino", name: "Cappuccino", small: "8", big: "10" },
        { id: "raf", name: "Raf", small: "12", big: "12" },
        { id: "latte", name: "Latte", small: "10", big: "10" },
        { id: "flatwhite", name: "Flat White", small: "9", big: "9" },
        { id: "irish", name: "Irish Coffee", small: "15", big: "15" },
        { id: "matcha", name: "Matcha", small: "15", big: "15" },
        { id: "tea", name: "Tea", small: "5", big: "5" },
        { id: "cocoa", name: "Cocoa", small: "8", big: "8" }
      ],
      burgers: [
        { id: "hamburger", name: "Hamburger", price: "19" },
        { id: "cheeseburger", name: "Cheeseburger", price: "21" },
        { id: "bacon", name: "Bacon Burger", price: "23" },
        { id: "double", name: "Double Burger", price: "30" },
        { id: "chicken", name: "Chicken Burger", price: "25" },
        { id: "jalapeno", name: "Jalapeno Burger", price: "19" },
        { id: "fries", name: "Fries (ketchup included)", price: "7" },
        { id: "hotdog", name: "Hotdog", price: "8" },
        { id: "combo", name: "Combo (Hamburger + fries + cola 0.33)", price: "27" }
      ],
      extras: [
        { name: "Patty (beef or chicken)", price: "4" },
        { name: "Bacon", price: "3" },
        { name: "Jalapeno", price: "2" },
        { name: "Cheddar", price: "3" },
        { name: "Extra sauce", price: "2" }
      ]
    }
  },

  ka: {
    langName: "ქართული",
    dir: "ltr",
    tagline: "Batumi view & fresh coffee",
    hero_sub: "გაგვიყვეთ Coffee Mark — ავტომატურად არაჩვეულებრივი ყავის ადგილი ბათუმში.",
    nav_about: "ჩვენ შესახებ", nav_menu: "მენიუ", nav_location: "ლოკაცია", nav_contact: "კონტაქტი",
    view_menu: "მენიუს დათვალიერება", how_find: "Ինչպես գտնել",
    about_title: "ჩვენ შესახებ", about_text: "მოგესალმებათ Coffee Mark — ადგილი შეხვედრებისთვის, დასვენებისა და მუშაობისთვის. ჩვენ მზად fazemos ყავას განსაკუთრებული ყურადღებით.",
    address_label: "მისამართი:", phone_label: "ტელეფონი:",
    menu_title: "მენიუ", menu_drinks: "სასმელები", menu_burgers: "ბურგერები",
    item: "სასმელი", price_small: "პატ.", price_big: "დიდ.", price: "ფასი (lari)",
    hot_cold_note: "ყველა სასმელი დაა•ხელმისაწვდომია ცხელი და ცივი ვერსიით.",
    menu_combos: "კომბო და დამატებები",
    where_title: "სად ვართ", where_text: "ჩვენ ვართ ბათუმის ცენტრში — მოხვდი ყავაზე ხედით.",
    contact_title: "კონტაქტი", contact_name: "სახელი", contact_message: "შეტყობინება", send_btn: "გაგზავნა",
    form_note: "ფორმა სტატიკური — შეტყობინებები შესაძლებელია ელ-ფოსტაზე.",
    footer_text: "მყუდრო კაფე ბათუმში — ყავა, ბურგერები, დესერტები.",
    menuData: {
      drinks: [
        { id: "americano", name: "Americano", small: "7", big: "8" },
        { id: "cappuccino", name: "Cappuccino", small: "8", big: "10" },
        { id: "raf", name: "Raf", small: "12", big: "12" },
        { id: "latte", name: "Latte", small: "10", big: "10" },
        { id: "flatwhite", name: "Flat White", small: "9", big: "9" },
        { id: "irish", name: "Irish Coffee", small: "15", big: "15" },
        { id: "matcha", name: "Matcha", small: "15", big: "15" },
        { id: "tea", name: "Tea", small: "5", big: "5" },
        { id: "cocoa", name: "Cocoa", small: "8", big: "8" }
      ],
      burgers: [
        { id: "hamburger", name: "Hamburger", price: "19" },
        { id: "cheeseburger", name: "Cheeseburger", price: "21" },
        { id: "bacon", name: "Bacon Burger", price: "23" },
        { id: "double", name: "Double Burger", price: "30" },
        { id: "chicken", name: "Chicken Burger", price: "25" },
        { id: "jalapeno", name: "Jalapeno Burger", price: "19" },
        { id: "fries", name: "Fries (ketchup included)", price: "7" },
        { id: "hotdog", name: "Hotdog", price: "8" },
        { id: "combo", name: "Combo (Hamburger + fries + cola 0.33)", price: "27" }
      ],
      extras: [
        { name: "პატა (ხორცი ან ქათამი)", price: "4" },
        { name: "ბეკონი", price: "3" },
        { name: "ჟალაპენო", price: "2" },
        { name: "ჩედარები", price: "3" },
        { name: "დამატებითი სოუსი", price: "2" }
      ]
    }
  },

  ar: {
    langName: "العربية",
    dir: "rtl",
    tagline: "منظر باتومي وقهوة طازجة",
    hero_sub: "مقهى مريح بإطلالة على بحر باتومي. قهوة طازجة و برجر منزلي.",
    nav_about: "من نحن", nav_menu: "القائمة", nav_location: "الموقع", nav_contact: "اتصل بنا",
    view_menu: "عرض القائمة", how_find: "كيف تصل",
    about_title: "من نحن", about_text: "مرحبًا بكم في Coffee Mark — مكان للاجتماع والعمل والاسترخاء. نحن نعد القهوة بعناية ونقدم أطباقًا لذيذة وبسيطة.",
    address_label: "العنوان:", phone_label: "الهاتف:",
    menu_title: "القائمة", menu_drinks: "المشروبات", menu_burgers: "البرجر",
    item: "المشروب", price_small: "صغير", price_big: "كبير", price: "السعر (lari)",
    hot_cold_note: "جميع المشروبات متاحة ساخنة وباردة.",
    menu_combos: "الملحقات والاضافات",
    where_title: "الموقع", where_text: "نحن في مركز باتومي — تفضلوا لتناول القهوة مع إطلالة.",
    contact_title: "اتصل بنا", contact_name: "الاسم", contact_message: "الرسالة", send_btn: "إرسال",
    form_note: "النموذج ثابت — الرجاء إرسال الرسائل عبر البريد الإلكتروني.",
    footer_text: "مقهى مريح في باتومي — قهوة، برجر، حلويات.",
    menuData: {
      drinks: [
        { id: "americano", name: "Americano", small: "7", big: "8" },
        { id: "cappuccino", name: "كابتشينو", small: "8", big: "10" },
        { id: "raf", name: "راف", small: "12", big: "12" },
        { id: "latte", name: "لاتيه", small: "10", big: "10" },
        { id: "flatwhite", name: "فلات وايت", small: "9", big: "9" },
        { id: "irish", name: "قهوة أيرلندية", small: "15", big: "15" },
        { id: "matcha", name: "ماتشا", small: "15", big: "15" },
        { id: "tea", name: "شاي", small: "5", big: "5" },
        { id: "cocoa", name: "كاكاو", small: "8", big: "8" }
      ],
      burgers: [
        { id: "hamburger", name: "همبرغر", price: "19" },
        { id: "cheeseburger", name: "تشيز برغر", price: "21" },
        { id: "bacon", name: "بيكون برغر", price: "23" },
        { id: "double", name: "دبل برغر", price: "30" },
        { id: "chicken", name: "شيكن برغر", price: "25" },
        { id: "jalapeno", name: "هالبينو برغر", price: "19" },
        { id: "fries", name: "بطاطا مقلية (مع كاتشب)", price: "7" },
        { id: "hotdog", name: "هوت دوغ", price: "8" },
        { id: "combo", name: "كومبو (همبرغر + بطاطا + كولا 0.33)", price: "27" }
      ],
      extras: [
        { name: "قطعة لحم (بقري أو دجاج)", price: "4" },
        { name: "بيكون", price: "3" },
        { name: "هالبينو", price: "2" },
        { name: "شيدر", price: "3" },
        { name: "صلصة إضافية", price: "2" }
      ]
    }
  },

  tr: {
    langName: "Türkçe",
    dir: "ltr",
    tagline: "Batum manzarası & taze kahve",
    hero_sub: "Batum deniz manzaralı sıcak ve samimi kafe. Taze kahve ve ev yapımı burgerler.",
    nav_about: "Hakkımızda", nav_menu: "Menü", nav_location: "Konum", nav_contact: "İletişim",
    view_menu: "Menüyü görüntüle", how_find: "Nasıl bulunur",
    about_title: "Hakkımızda", about_text: "Coffee Mark'e hoş geldiniz — buluşma, çalışma ve dinlenme yeri. Kahvemizi özenle hazırlıyor ve lezzetli basit yemekler sunuyoruz.",
    address_label: "Adres:", phone_label: "Telefon:",
    menu_title: "Menü", menu_drinks: "İçecekler", menu_burgers: "Burgerler",
    item: "İçecek", price_small: "Küçük", price_big: "Büyük", price: "Fiyat (lari)",
    hot_cold_note: "Tüm içecekler sıcak ve soğuk olarak mevcuttur.",
    menu_combos: "Kombo ve Ekstralar",
    where_title: "Nerede", where_text: "Batumi merkezi konumdayız — manzaralı kahve için uğrayın.",
    contact_title: "İletişim", contact_name: "İsim", contact_message: "Mesaj", send_btn: "Gönder",
    form_note: "Form statiktir — mesajlar e-posta ile gönderilebilir.",
    footer_text: "Batumi'de samimi kafe — kahve, burger, tatlılar.",
    menuData: {
      drinks: [
        { id: "americano", name: "Americano", small: "7", big: "8" },
        { id: "cappuccino", name: "Kapuçino", small: "8", big: "10" },
        { id: "raf", name: "Raf", small: "12", big: "12" },
        { id: "latte", name: "Latte", small: "10", big: "10" },
        { id: "flatwhite", name: "Flat White", small: "9", big: "9" },
        { id: "irish", name: "Irish Coffee", small: "15", big: "15" },
        { id: "matcha", name: "Matcha", small: "15", big: "15" },
        { id: "tea", name: "Çay", small: "5", big: "5" },
        { id: "cocoa", name: "Kakao", small: "8", big: "8" }
      ],
      burgers: [
        { id: "hamburger", name: "Hamburger", price: "19" },
        { id: "cheeseburger", name: "Cheeseburger", price: "21" },
        { id: "bacon", name: "Bacon Burger", price: "23" },
        { id: "double", name: "Double Burger", price: "30" },
        { id: "chicken", name: "Tavuk Burger", price: "25" },
        { id: "jalapeno", name: "Jalapeno Burger", price: "19" },
        { id: "fries", name: "Patates Kızartması (ketçap dahil)", price: "7" },
        { id: "hotdog", name: "Hotdog", price: "8" },
        { id: "combo", name: "Kombin (Hamburger + patates + kola 0.33)", price: "27" }
      ],
      extras: [
        { name: "Köfte seçimi (sığır veya tavuk)", price: "4" },
        { name: "Bacon", price: "3" },
        { name: "Jalapeno", price: "2" },
        { name: "Cheddar", price: "3" },
        { name: "Ekstra sos", price: "2" }
      ]
    }
  }
};

/* ========= APPLICATION LOGIC ========= */

const LKEY = "coffee_mark_lang";
let currentLang = localStorage.getItem(LKEY) || "ru";

/* Dom elements */
const langSwitch = document.getElementById("lang-switch");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const heroTitle = document.getElementById("hero-title");
const yearNode = document.getElementById("year");

function applyTranslations(lang){
  const t = translations[lang] || translations["ru"];
  // direction
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir || "ltr";

  // simple keys
  i18nNodes.forEach(node=>{
    const key = node.getAttribute("data-i18n");
    if(t[key]) node.textContent = t[key];
  });

  // hero texts
  if(t.tagline) document.querySelector(".brand-text .tagline").textContent = t.tagline;
  if(t.hero_sub) document.getElementById("hero-sub").textContent = t.hero_sub;
  if(t.about_text) document.getElementById("about-par").textContent = t.about_text;
  if(t.footer_text) document.querySelector(".site-footer .muted") && (document.querySelector(".site-footer .muted").textContent = t.footer_text);

  // fill menu tables
  fillMenu(t.menuData);

  // set language select
  langSwitch.value = lang;

  // save
  localStorage.setItem(LKEY, lang);
}

function fillMenu(menuData){
  // Drinks
  const drinksList = document.getElementById("drinks-list");
  drinksList.innerHTML = "";
  menuData.drinks.forEach(d=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${d.name}</td><td class="price">${d.small}</td><td class="price">${d.big}</td>`;
    drinksList.appendChild(tr);
  });

  // Burgers
  const burgersList = document.getElementById("burgers-list");
  burgersList.innerHTML = "";
  menuData.burgers.forEach(b=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${b.name}</td><td class="price">${b.price}</td>`;
    burgersList.appendChild(tr);
  });

  // Extras
  const extrasList = document.getElementById("extras-list");
  extrasList.innerHTML = "";
  menuData.extras.forEach(e=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${e.name}</td><td class="price">${e.price}</td>`;
    extrasList.appendChild(tr);
  });
}

/* Event listeners */
langSwitch.addEventListener("change", (e)=>{
  applyTranslations(e.target.value);
});

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

/* Contact form — static stub */
document.getElementById('send-btn').addEventListener('click', ()=>{
  alert(translations[currentLang].form_note || "Form is static — please send email.");
});

/* Init */
document.getElementById("year").textContent = new Date().getFullYear();
applyTranslations(currentLang);
