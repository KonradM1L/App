export const products = [
  { id: 1, name: 'Laptop', price: 2999, description: 'Nowoczesny laptop do pracy', category: 'Komputery' },
  { id: 2, name: 'Smartwatch', price: 899, description: 'Inteligentny zegarek sportowy', category: 'Urządzenia mobilne' },
  { id: 3, name: 'Słuchawki Bluetooth', price: 399, description: 'Bezprzewodowe słuchawki', category: 'Audio' },
  { id: 4, name: 'Mysz Bezprzewodowa', price: 149, description: 'Ergonomiczna mysz do pracy', category: 'Akcesoria PC' },
  { id: 5, name: 'Klawiatura Mechaniczna', price: 549, description: 'Profesjonalna klawiatura', category: 'Akcesoria PC' },
  { id: 6, name: 'Monitor 4K', price: 1899, description: 'Wyświetlacz Ultra HD', category: 'Komputery' },
  { id: 7, name: 'Tablet Samsung', price: 1499, description: 'Tablet 10 cali z ekranem AMOLED', category: 'Urządzenia mobilne' },
  { id: 8, name: 'Kamera internetowa', price: 299, description: 'Full HD kamera do wideokonferencji', category: 'Bezpieczeństwo' },
  { id: 9, name: 'Głośnik Bluetooth', price: 249, description: 'Przenośny głośnik stereo', category: 'Audio' },
  { id: 10, name: 'Power Bank 20000mAh', price: 129, description: 'Szybka ładowarka do urządzeń', category: 'Zasilanie' },
  { id: 11, name: 'Kabel USB-C', price: 49, description: 'Trwały kabel szybkiego ładowania', category: 'Kable' },
  { id: 12, name: 'Adapter HDMI', price: 39, description: 'Konwerter do starszych monitorów', category: 'Kable' },
  { id: 13, name: 'Docking Station', price: 349, description: 'Stacja dokująca do laptopa', category: 'Akcesoria PC' },
  { id: 14, name: 'Dysk SSD 1TB', price: 399, description: 'Nośnik danych Ultra szybki', category: 'Storage' },
  { id: 15, name: 'Pamięć RAM 16GB', price: 299, description: 'Dodatkowa pamięć operacyjna', category: 'Storage' },
  { id: 16, name: 'Wentylator PC', price: 89, description: 'Chłodzenie do obudowy', category: 'Komponenty PC' },
  { id: 17, name: 'Mat do myszy RGB', price: 179, description: 'Podkład z podświetleniem LED', category: 'Akcesoria PC' },
  { id: 18, name: 'Huby USB 3.0', price: 79, description: 'Rozdzielacz do 4 portów', category: 'Kable' },
  { id: 19, name: 'Zestaw Kablii', price: 99, description: 'Komplet przewodów elektronicznych', category: 'Kable' },
  { id: 20, name: 'Stojak do laptopa', price: 159, description: 'Ergonomiczny stojak ze stopu aluminium', category: 'Akcesoria PC' },
  { id: 21, name: 'Uchwytu do telefonu', price: 79, description: 'Uniwersalny uchwyt samochodowy', category: 'Akcesoria mobilne' },
  { id: 22, name: 'Ochrona ekranu', price: 39, description: 'Folia hartowana do smartfona', category: 'Ochrona' },
  { id: 23, name: 'Etui do laptopa', price: 129, description: 'Ochronne etui z pianki', category: 'Ochrona' },
  { id: 24, name: 'Przewód zasilający', price: 59, description: 'Certyfikowany kabel 3m', category: 'Zasilanie' },
  { id: 25, name: 'Lampa biurkowa LED', price: 199, description: 'Oświetlenie do pracy z ładowaniem', category: 'Oświetlenie' },
  { id: 26, name: 'Kamera IP', price: 449, description: 'Kamera monitoringu WiFi 1080p', category: 'Bezpieczeństwo' },
  { id: 27, name: 'Notes', price: 20, description: 'Zeszyt do zapisywania notatek', category: 'Pozostałe' }
]

// Funkcja sortowania produktów
export const sortProducts = (productsArray, sortBy = 'name', order = 'asc') => {
  const sorted = [...productsArray];
  
  sorted.sort((a, b) => {
    let compareA, compareB;
    
    switch(sortBy) {
      case 'price':
        compareA = a.price;
        compareB = b.price;
        break;
      case 'name':
        compareA = a.name.toLowerCase();
        compareB = b.name.toLowerCase();
        break;
      case 'category':
        compareA = a.category.toLowerCase();
        compareB = b.category.toLowerCase();
        break;
      default:
        compareA = a.name.toLowerCase();
        compareB = b.name.toLowerCase();
    }
    
    if (compareA < compareB) {
      return order === 'asc' ? -1 : 1;
    }
    if (compareA > compareB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  return sorted;
};

// Funkcja filtrowania produktów po kategorii
export const filterByCategory = (productsArray, category) => {
  return productsArray.filter(product => product.category === category);
};

// Funkcja uzyskiwania wszystkich kategorii
export const getCategories = (productsArray) => {
  const categories = new Set(productsArray.map(product => product.category));
  return Array.from(categories).sort();
};
