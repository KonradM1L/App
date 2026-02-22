# 🛍️ Sklep Online - Aplikacja React

Nowoczesna aplikacja e-commerce zbudowana w React z Vite. Umożliwia użytkownikom rejestrację, przeglądanie produktów, wyszukiwanie, dodawanie do ulubionych i zarządzanie koszykiem.

## 📋 Spis treści

- [Frameworki i Narzędzia](#-frameworki-i-narzędzia)
- [Architektura Projektu](#-architektura-projektu)
- [Struktura Folderów](#-struktura-folderów)
- [Instalacja i Uruchamianie](#-instalacja-i-uruchamianie)
- [Funkcjonalności](#-funkcjonalności)
- [Komponenty](#-komponenty)
- [Stany (State Management)](#-stany--state-management)

## 🛠️ Frameworki i Narzędzia

### Frontend Framework
- **[React 18.2+](https://react.dev/)** - Biblioteka do budowania interfejsów użytkownika
  - Hook: `useState` do zarządzania stanem lokalnym komponentów
  - Komponenty funkcyjne z logią biznesową

### Build Tool
- **[Vite 4.3+](https://vitejs.dev/)** - Nowoczesny bundler z Hot Module Replacement (HMR)
  - Szybkie odświeżanie plików bez przeładowania całej aplikacji
  - Szybka kompilacja i budowanie

### Linting
- **[ESLint](https://eslint.org/)** - Narzędzie do analizy kodu i zapewnienia spójności
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Plugin React dla Vite

### Pakiety npm
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
  }
}
```

## 🏗️ Architektura Projektu

Aplikacja oparta na architekturze **komponentowej** z zarządzaniem stanem na poziomie głównego komponentu `App.jsx`.

### Przepływ Danych
```
App.jsx (Root Component)
    ├── State Management (searchQuery, cart, favorites, etc.)
    ├── Navigation
    └── Routing (ProductsPage / FavoritesPage)
        └── ProductsPage / FavoritesPage
            └── Product Cards
```

### Zarządzanie Stanem
Aplikacja używa **lifting state up** - wszystkie stany są przechowywane w komponencie `App.jsx`:
- `isLoggedIn` - status zalogowania
- `username` - nazwa użytkownika
- `currentPage` - bieżąca strona (products/favorites)
- `searchQuery` - fraza wyszukiwania
- `cart` - koszyk z produktami
- `quantities` - ilości dla każdego produktu
- `favorites` - zbiór ID ulubionych produktów

## 📁 Struktura Folderów

```
App/
├── src/
│   ├── App.jsx                 # Główny komponent aplikacji
│   ├── App.css                 # Style aplikacji
│   ├── main.jsx                # Punkt wejścia React
│   ├── index.css               # Globalne style
│   ├── products.js             # Dane produktów (26 produktów)
│   └── components/
│       ├── RegistrationForm.jsx   # Formularz rejestracji z walidacją hasła
│       ├── ProductsPage.jsx       # Strona wszystkich produktów
│       ├── FavoritesPage.jsx      # Strona ulubionych produktów
│       └── CartPage.jsx           # Strona koszyka z podsumowaniem zamówienia
├── public/                     # Pliki statyczne
├── package.json                # Definicja zależności
├── package-lock.json           # Zablokowane wersje pakietów
├── vite.config.js              # Konfiguracja Vite
├── eslint.config.js            # Konfiguracja ESLint
├── index.html                  # HTML główny
├── .gitignore                  # Ignorowane pliki w Git
└── README.md                   # Ten plik
```

## 🚀 Instalacja i Uruchamianie

### Wymagania
- Node.js 14+ lub wyższa
- npm lub yarn

### Kroki instalacji

1. **Klonowanie/Otwarcie projektu**
```bash
cd d:\Pobrane\kody\App
```

2. **Instalacja zależności**
```bash
npm install
```

3. **Uruchamianie serwera deweloperskiego**
```bash
npm run dev
```
Aplikacja będzie dostępna pod: `http://localhost:5173/`

4. **Budowanie dla produkcji**
```bash
npm run build
```

5. **Podgląd wersji produkcyjnej**
```bash
npm run preview
```

## ✨ Funkcjonalności

### 1. Rejestracja i Autoryzacja
- Formularz rejestracji z polem username, email i hasłem
- Walidacja hasła w czasie rzeczywistym:
  - Minimum 8 znaków
  - Co najmniej jedna duża litera
  - Co najmniej jedna mała litera
  - Co najmniej jedna cyfra
  - Co najmniej jeden ze znaków: `!@#$%^&*`
- Komunikat błędu w przypadku nieprawidłowego hasła
- Przycisk zarejestruj aktywny tylko gdy hasło spełnia wszystkie wymagania

### 2. Przeglądanie Produktów
- **26 produktów** w katalogu z nazwa, opisem i ceną
- Siatka responsywna (auto-fit grid)
- Karty produktów z efektami hover
- Licznik koszyka w nagłówku

### 3. Wyszukiwanie
- Pasek wyszukiwania w nawigacji
- Filtrowanie po nazwie i opisie produktu
- Przycisk "Wyczyść" do resetowania filtrowania
- Działa na obu stronach (Produkty i Ulubione)

### 4. Ulubione (Favorites)
- Przycisk gwiazdki w prawym górnym rogu każdej karty
- Zaznaczanie/odznaczanie jako ulubione
- Oddzielna strona z ulubionymi produktami
- Licznik ulubionych w nawigacji
- Filtrowanie ulubionych po wyszukiwaniu

### 5. Koszyk
- Przycisk "Dodaj do koszyka" dla każdego produktu
- Kontrolki ilości (+ / -) dla każdego produktu
- Licznik produktów w koszyku w nagłówku
- Możliwość dodania wielu sztuk jednego produktu
- Dla każdego produktu w koszyku dwa przyciski:
  - "Usuń 1 szt." - usuwa jedną sztukę produktu
  - "Usuń wszystkie" - usuwa wszystkie sztuki wybranego produktu naraz
- Podsumowanie ceny całkowitej
- Przyciski akcji na dole koszyka:
  - "Przejdź do kasy" - finalizuje zakup
  - "Opróżnij koszyk" - usuwa wszystkie produkty z potwierdzeniem
  - "Kontynuuj zakupy" - powrót do produktów
- Grubsze obramowanie przycisków akcji (2px)
- Spersonalizowane kolory przycisków (szary zamiast kolorowych)

### 6. Nawigacja
- Przełączanie między stronami (Wszystkie Produkty / Ulubione)
- Sticky navigation (pozostaje na górze)
- Pasek wyszukiwania zintegrowany z nawigacją
- Przycisk do koszyka ze:
  - Symbolem koszyka 🛒
  - Licznikiem produktów w koszyku
- Przycisk Wyloguj z funkcjonalnością

## 🧩 Komponenty

### RegistrationForm.jsx
Formularz rejestracji z walidacją hasła
```jsx
Props:
- onRegister(username) - callback po pomyślnej rejestracji

State:
- formData - dane formularza
- error - komunikaty błędów walidacji
```

### ProductsPage.jsx
Strona wyświetlająca wszystkie produkty
```jsx
Props:
- username, onLogout
- favorites, setFavorites
- cart, setCart
- quantities, setQuantities
- searchQuery, setSearchQuery

Funkcjonalności:
- Wyświetlanie produktów
- Filtrowanie po searchQuery
- Zarządzanie ulubionymi
- Dodawanie do koszyka
- Zarządzanie ilościami
```

### FavoritesPage.jsx
Strona wyświetlająca ulubione produkty
```jsx
Props: te same co ProductsPage

Funkcjonalności:
- Wyświetlanie tylko ulubionych produktów
- Filtrowanie ulubionych po searchQuery
- Pełne zarządzanie koszykiem dla ulubionych
- Komunikat gdy brak ulubionych
```

### CartPage.jsx
Strona wyświetlająca zawartość koszyka
```jsx
Props:
- username, onLogout
- cart, setCart
- currentPage, setCurrentPage

Funkcjonalności:
- Wyświetlanie produktów w koszyku z podsumowaniem ilości i ceny
- Usuwanie pojedynczych sztuk produktu ("Usuń 1 szt.")
- Usuwanie wszystkich sztuk produktu naraz ("Usuń wszystkie")
- Podsumowanie ceny całkowitej
- Finalizacja zakupu (Przejdź do kasy)
- Czyszczenie całego koszyka
- Powrót do produktów
- Komunikat gdy koszyk jest pusty
```

## 💾 Stany (State Management)

### Główne stany (App.jsx)
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [username, setUsername] = useState('')
const [currentPage, setCurrentPage] = useState('products')
const [searchQuery, setSearchQuery] = useState('')
const [cart, setCart] = useState([])
const [quantities, setQuantities] = useState({})
const [favorites, setFavorites] = useState(new Set())
```

### Lifting State Up
Wszystkie stany są przechowywane w komponencie `App` i przekazywane w dół do komponentów `ProductsPage` i `FavoritesPage` jako props.

### Dane Produktów
Produkty są przechowywane w oddzielnym pliku `products.js` i importowane w komponentach:
```javascript
import { products } from '../products.js'
```

## 🎨 Styling

- CSS vanilla (bez preprocessora)
- Paleta barw:
  - Główny gradient: `#667eea` do `#764ba2` (fiolet)
  - Akcent: `#ff6b6b` (czerwień)
  - Tło: `#f5f5f5` (szary)
- Responsywny design z CSS Grid
- Efekty hover na kartach i przyciskach
- Sticky navigation bar

### Elementy UI w Koszyku
- **Przyciski akcji**: Grubsze obramowanie (2px solid #999)
- **Przycisk do koszyka**: Symbol 🛒 ze wskaźnikiem liczby produktów
- **Przyciski usuwania**: Dwa warianty:
  - Usuwanie pojedynczych sztuk (Usuń 1 szt.)
  - Usuwanie wszystkich sztuk (Usuń wszystkie)
- **Kolory przycisków**: Szary `#d0d0d0` zamiast domyślnie kolorowych

## 📱 Responsywność

- Grid produktów: `repeat(auto-fit, minmax(280px, 1fr))`
- Pełna responsywność na różnych rozmiarach ekranu
- Pasek wyszukiwania dostosowuje się do szerokości ekranu

## 🔧 Rozwiązywanie Problemów

### Problem: Port 5173 jest już zajęty

**Symptomy:**
```
Error: Port 5173 is already in use
```

**Rozwiązania:**

1. **Użyj innego portu w Vite:**
```bash
npm run dev -- --port 5174
```

2. **Zabij proces na porcie 5173:**
```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process -Force

# Linux/Mac
lsof -ti:5173 | xargs kill -9
```

3. **Zmień port w vite.config.js:**
```javascript
export default {
  server: {
    port: 5174
  }
}
```

---

### Problem: Hot Module Replacement (HMR) nie działa

**Symptomy:**
- Zmiany w kodzie nie są automatycznie odświeżane
- Trzeba ręcznie przeładować stronę (F5)

**Rozwiązania:**

1. **Sprawdź czy Vite jest uruchomiony:**
```bash
npm run dev
```

2. **Wyczyść cache przeglądarki:**
- Chrome: Ctrl+Shift+Delete
- Firefox: Ctrl+Shift+Delete
- Safari: Cmd+Option+E

3. **Restart dev servera:**
```bash
# Naciskaj Ctrl+C aby zatrzymać
# Następnie
npm run dev
```

4. **Sprawdź konfigurację vite.config.js:**
```javascript
export default {
  server: {
    hmr: {
      host: 'localhost',
      port: 5173
    }
  }
}
```

---

### Problem: State nie aktualizuje się w komponentach

**Symptomy:**
- Zmiana stanu w `App.jsx` nie powoduje re-rendera komponentów
- Przyciski nie reagują

**Rozwiązania:**

1. **Sprawdź czy `useState` jest prawidłowo importowany:**
```javascript
import { useState } from 'react'
```

2. **Upewnij się że modyfikujesz state prawidłowo:**
```javascript
// ❌ ZLE - bezpośrednia modyfikacja
favorites.add(productId)

// ✅ DOBRZE - nowy Set
const newFavorites = new Set(favorites)
newFavorites.add(productId)
setFavorites(newFavorites)
```

3. **Dla tablic użyj spread operatora:**
```javascript
// ❌ ZLE
cart.push(product)
setCart(cart)

// ✅ DOBRZE
setCart([...cart, product])
```

4. **Sprawdź React DevTools:**
- Pobierz rozszerzenie: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- Sprawdzaj zmiany stanu w Components tab

---

### Problem: Komponenty się nie renderują

**Symptomy:**
- Biały ekran
- Konsola pokazuje błędy JavaScript

**Rozwiązania:**

1. **Sprawdź konsolę przeglądarki (F12):**
- Otwórz DevTools (F12)
- Przejdź do Console tab
- Poszukaj błędów

2. **Sprawdź czy komponenty są prawidłowo importowane:**
```javascript
// ✅ DOBRZE
import { ProductsPage } from './components/ProductsPage'

// ❌ ZLE
import ProductsPage from './components/ProductsPage' // brak nawiasów destructuring
```

3. **Używaj React.StrictMode do debugowania:**
```javascript
// W main.jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

4. **Sprawdzaj propsy komponentów:**
```javascript
// Dodaj console.log w komponencie
export function ProductsPage({ username, cart, ...props }) {
  console.log('Props:', { username, cart, ...props })
  // reszta kodu
}
```

---

### Problem: Produkty się nie filtrują w wyszukiwarce

**Symptomy:**
- Wpisanie tekstu w wyszukiwarkę nie filtruje produktów
- Przycisk "Wyczyść" nie działa

**Rozwiązania:**

1. **Sprawdzić czy `searchQuery` jest prawidłowo przekazywany:**
```javascript
// W App.jsx
<ProductsPage 
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  // ... inne props
/>
```

2. **Sprawdzić czy komponent przyjmuje propsy:**
```javascript
export function ProductsPage({ searchQuery, setSearchQuery, ...props }) {
  // searchQuery powinien być dostępny
}
```

3. **Sprawdzić logikę filtrowania:**
```javascript
// Prawidłowe filtrowanie
const filteredProducts = products.filter(product => {
  if (!searchQuery) return true // jeśli brak query, pokazuj wszystkie
  const q = searchQuery.toLowerCase()
  return product.name.toLowerCase().includes(q) || 
         product.description.toLowerCase().includes(q)
})
```

---

### Problem: Ulubione/Koszyk się resetują po przeładowaniu

**Symptomy:**
- Dodane ulubione znikają po F5
- Produkty z koszyka również znikają

**Rozwiązania:**

1. **Dodaj localStorage (wymaga refactoru):**
```javascript
// Przed: const [favorites, setFavorites] = useState(new Set())
const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem('favorites')
  return saved ? new Set(JSON.parse(saved)) : new Set()
})

// Efekt do zapisania
useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify([...favorites]))
}, [favorites])
```

2. **Na razie to jest spodziewane zachowanie** - state zostaje w pamięci sesji

---

### Problem: Wiele instancji produktów w koszyku

**Symptomy:**
- Po dodaniu produktu 3x, powinny być 3 kartki w koszyku
- Licznik pokazuje inną wartość

**Rozwiązania:**

1. **Sprawdzić logikę addToCart:**
```javascript
const addToCart = (product) => {
  const quantity = getQuantity(product.id)
  const newCart = [...cart]
  for (let i = 0; i < quantity; i++) {
    newCart.push(product) // Dodajemy ilość razy ten sam produkt
  }
  setCart(newCart)
  // Reset licznika
  setQuantities({ ...quantities, [product.id]: 1 })
}
```

2. **Sprawdzić czy quantity controller pracuje prawidłowo:**
```javascript
const increaseQuantity = (productId) => {
  setQuantities({
    ...quantities,
    [productId]: getQuantity(productId) + 1
  })
}
```

---

### Problem: CSS nie są ładowane

**Symptomy:**
- Aplikacja wygląda bez stylów
- Konsolę pokazuje błędy 404 dla CSS

**Rozwiązania:**

1. **Sprawdź czy CSS jest importowany w komponencie:**
```javascript
// ✅ W App.jsx
import './App.css'
```

2. **Sprawdzić ścieżkę do pliku CSS:**
```javascript
// Jeśli plik to src/App.css to powinno być:
import './App.css'

// Jeśli w subfolder:
import './styles/App.css'
```

3. **Wyczyść cache Vite:**
```bash
# Usuń folder cache
rm -rf node_modules/.vite

# Lub na Windows
rmdir /s node_modules\.vite

# Restart dev serwera
npm run dev
```

4. **Sprawdzić czy pliki CSS istnieją:**
- Upewnij się że `src/App.css` istnieje
- Upewnij się że `src/index.css` istnieje

---

### Problem: Memory leak w komponentach

**Symptomy:**
- Aplikacja zwalnia się przy dodawaniu wielu produktów
- Konsola pokazuje warning o memory leak

**Rozwiązania:**

1. **Sprawdzić czy nie ma infinite loopów:**
```javascript
// ❌ ZLE - infinite loop
export function ProductsPage() {
  const [products, setProducts] = useState([])
  
  // To będzie się wykonywać w nieskończoność!
  setProducts(allProducts)
  
  return <div>{products.map(...)}</div>
}

// ✅ DOBRZE - bez loop
export function ProductsPage() {
  // Nie modyfikujemy state poza callback'ami
  return <div>{products.map(...)}</div>
}
```

2. **Używaj useEffect dla side effectów (w przyszłości):**
```javascript
// Jeśli będziesz używać effect'ów:
import { useEffect } from 'react'

useEffect(() => {
  // Kod do wykonania
  return () => {
    // Cleanup funkcja
  }
}, [dependencies])
```

3. **Monitoruj rozmiar state'u:**
- Dla każdego produktu przechowujesz ilość w `quantities`
- To jest w porządku dla 26 produktów
- Jeśli będzie 10000 produktów, rozważ inną architekturę

---

### Problem: Konsola pokazuje ESLint warnings

**Symptomy:**
- DevTools pokazuje żółte ostrzeżenia
- Kod działa ale są warningi

**Rozwiązania:**

1. **Sprawdzić eslint.config.js:**
```javascript
// Możesz wyłączyć reguły które Ci przeszkadzają
export default [
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
]
```

2. **Fix linting errors automatycznie:**
```bash
npm run lint -- --fix
```

3. **Ignoruj specyficzny problem w konkretnej linii:**
```javascript
// eslint-disable-next-line react/prop-types
export function MyComponent({ prop }) {
  return <div>{prop}</div>
}
```

---

### Problem: Błędy podczas budowania (npm run build)

**Symptomy:**
```
Error: Failed to build
```

**Rozwiązania:**

1. **Sprawdzić błędy w konsoli:**
```bash
npm run build 2>&1 | tail -50
```

2. **Sprawdzić czy JavaScript jest prawidłowy:**
- Brak słowa kluczowego `return` w komponencie
- Brak zamknięcia nawiasu/cudzysłowu

3. **Wyczyść i przebuduj:**
```bash
rm -rf dist
npm run build
```

4. **Sprawdzić vite.config.js:**
```javascript
// Upewnij się że konfiguracja jest prawidłowa
export default {
  plugins: [react()],
  // ... reszta konfiguracji
}
```

---

## 📚 Przydatne Linki

- [React Dokumentacja](https://react.dev/)
- [Vite Dokumentacja](https://vitejs.dev/)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

## 🎨 Styling

- CSS vanilla (bez preprocessora)
- Paleta barw:
  - Główny gradient: `#667eea` do `#764ba2` (fiolet)
  - Akcent: `#ff6b6b` (czerwień)
  - Tło: `#f5f5f5` (szary)
- Responsywny design z CSS Grid
- Efekty hover na kartach i przyciskach
- Sticky navigation bar

## 📱 Responsywność

- Grid produktów: `repeat(auto-fit, minmax(280px, 1fr))`
- Pełna responsywność na różnych rozmiarach ekranu
- Pasek wyszukiwania dostosowuje się do szerokości ekranu

---

**Wersja:** 1.0.0  
**Data:** 29 stycznia 2026  
**Autor:** Twoja nazwa  
**Licencja:** MIT

