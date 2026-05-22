// OFFICE WEAR PRODUCTS DATA
const officeWearProducts = [
    { id: 1, name: "Cigarette Trousers", category: "trousers", price: 1199, originalPrice: 1499, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Cigarette+Trousers", rating: 4.5, reviews: 128 },
    { id: 2, name: "Cotton-Blend Shirt", category: "shirts", price: 1499, originalPrice: 1999, color: "white", image: "https://via.placeholder.com/200x280/ffffff/000000?text=Cotton+Shirt", rating: 4.3, reviews: 95 },
    { id: 3, name: "V-Neck Blouse", category: "shirts", price: 1499, originalPrice: 1899, color: "black", image: "https://via.placeholder.com/200x280/2a2a2a/ffffff?text=V-Neck+Blouse", rating: 4.6, reviews: 112 },
    { id: 4, name: "Double-Breasted Blazer", category: "blazers", price: 2799, originalPrice: 3499, color: "cream", image: "https://via.placeholder.com/200x280/fffdd0/000000?text=Blazer+Cream", rating: 4.8, reviews: 156 },
    { id: 5, name: "Shirt Dress", category: "dresses", price: 2799, originalPrice: 3599, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Shirt+Dress", rating: 4.7, reviews: 143 },
    { id: 6, name: "Draped Cropped Top", category: "tops", price: 899, originalPrice: 1299, color: "white", image: "https://via.placeholder.com/200x280/f0f0f0/000000?text=Cropped+Top", rating: 4.2, reviews: 87 },
    { id: 7, name: "Short Dress", category: "dresses", price: 2599, originalPrice: 3299, color: "navy", image: "https://via.placeholder.com/200x280/001f3f/ffffff?text=Short+Dress", rating: 4.4, reviews: 101 },
    { id: 8, name: "Twill Blazer Dress", category: "dresses", price: 4999, originalPrice: 5999, color: "black", image: "https://via.placeholder.com/200x280/000000/ffffff?text=Blazer+Dress", rating: 4.9, reviews: 189 },
    { id: 9, name: "Belted Dress", category: "dresses", price: 3599, originalPrice: 4499, color: "white", image: "https://via.placeholder.com/200x280/ffffff/000000?text=Belted+Dress", rating: 4.5, reviews: 118 },
    { id: 10, name: "Boat-Neck Top", category: "tops", price: 1499, originalPrice: 1999, color: "cream", image: "https://via.placeholder.com/200x280/fffdd0/000000?text=Boat+Top", rating: 4.3, reviews: 92 },
    { id: 11, name: "Gathered-Sleeve Blazer", category: "blazers", price: 2999, originalPrice: 3799, color: "cream", image: "https://via.placeholder.com/200x280/f5f5dc/000000?text=Sleeve+Blazer", rating: 4.7, reviews: 134 },
    { id: 12, name: "Sleeveless Top", category: "tops", price: 2299, originalPrice: 2999, color: "black", image: "https://via.placeholder.com/200x280/2a2a2a/ffffff?text=Sleeveless", rating: 4.4, reviews: 104 },
    { id: 13, name: "Belted Button-Front Dress", category: "dresses", price: 4999, originalPrice: 5999, color: "navy", image: "https://via.placeholder.com/200x280/001f3f/ffffff?text=Button+Dress", rating: 4.8, reviews: 167 },
    { id: 14, name: "Long Button-Front Dress", category: "dresses", price: 3999, originalPrice: 4999, color: "cream", image: "https://via.placeholder.com/200x280/fffdd0/000000?text=Long+Dress", rating: 4.6, reviews: 125 },
    { id: 15, name: "Midi Blazer Dress", category: "dresses", price: 4999, originalPrice: 5999, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Midi+Blazer", rating: 4.9, reviews: 178 },
    { id: 16, name: "Double-Breasted Blazer Dress", category: "dresses", price: 3499, originalPrice: 4299, color: "navy", image: "https://via.placeholder.com/200x280/1a3a52/ffffff?text=DB+Dress", rating: 4.5, reviews: 110 },
    { id: 17, name: "Belted Shirt Dress", category: "dresses", price: 2599, originalPrice: 3299, color: "cream", image: "https://via.placeholder.com/200x280/f9f5f0/000000?text=Shirt+Dress2", rating: 4.3, reviews: 89 },
    { id: 18, name: "Polo-Neck Jumper", category: "tops", price: 299, originalPrice: 1499, color: "black", image: "https://via.placeholder.com/200x280/2a2a2a/ffffff?text=Polo+Neck", rating: 4.2, reviews: 76 },
    { id: 19, name: "Waisted Sleeveless Dress", category: "dresses", price: 2299, originalPrice: 2999, color: "navy", image: "https://via.placeholder.com/200x280/2d5a3d/ffffff?text=Waisted+Dress", rating: 4.4, reviews: 97 },
    { id: 20, name: "Linen-Blend Blazer Dress", category: "dresses", price: 4499, originalPrice: 5499, color: "cream", image: "https://via.placeholder.com/200x280/f5e6d3/000000?text=Linen+Dress", rating: 4.7, reviews: 141 },
    { id: 21, name: "Shirt", category: "shirts", price: 1499, originalPrice: 1999, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Shirt", rating: 4.5, reviews: 108 },
    { id: 22, name: "Tailored Peplum Top", category: "tops", price: 1499, originalPrice: 1999, color: "navy", image: "https://via.placeholder.com/200x280/1a3a52/ffffff?text=Peplum+Top", rating: 4.6, reviews: 119 },
    { id: 23, name: "Cotton Shirt Dress", category: "dresses", price: 4999, originalPrice: 5999, color: "white", image: "https://via.placeholder.com/200x280/f0f0f0/000000?text=Cotton+Dress", rating: 4.8, reviews: 173 },
    { id: 24, name: "Cap-Sleeved Top", category: "tops", price: 2099, originalPrice: 2699, color: "cream", image: "https://via.placeholder.com/200x280/e8dcc8/000000?text=Cap+Sleeve", rating: 4.3, reviews: 85 },
    { id: 25, name: "High-Waisted Tailored Trousers", category: "trousers", price: 1499, originalPrice: 1999, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Tailored+Trousers", rating: 4.7, reviews: 152 },
    { id: 26, name: "Draped Bodycon Dress", category: "dresses", price: 1499, originalPrice: 1999, color: "black", image: "https://via.placeholder.com/200x280/2a2a2a/ffffff?text=Bodycon+Dress", rating: 4.4, reviews: 103 },
    { id: 27, name: "Shift Dress", category: "dresses", price: 2099, originalPrice: 2699, color: "navy", image: "https://via.placeholder.com/200x280/3a3a3a/ffffff?text=Shift+Dress", rating: 4.5, reviews: 113 },
    { id: 28, name: "Tie-Neck Satin Dress", category: "dresses", price: 5499, originalPrice: 6799, color: "cream", image: "https://via.placeholder.com/200x280/dda0dd/ffffff?text=Tie+Neck", rating: 4.9, reviews: 195 },
    { id: 29, name: "Wide-Leg Trousers", category: "trousers", price: 1699, originalPrice: 2299, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Wide+Leg", rating: 4.6, reviews: 127 },
    { id: 30, name: "Elegant Pencil Skirt", category: "skirts", price: 1299, originalPrice: 1799, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Pencil+Skirt", rating: 4.4, reviews: 99 },
    { id: 31, name: "Midi Skirt", category: "skirts", price: 1499, originalPrice: 1999, color: "cream", image: "https://via.placeholder.com/200x280/f5e6d3/000000?text=Midi+Skirt", rating: 4.5, reviews: 115 },
    { id: 32, name: "A-Line Skirt", category: "skirts", price: 1399, originalPrice: 1899, color: "navy", image: "https://via.placeholder.com/200x280/1f3a5c/ffffff?text=A-Line+Skirt", rating: 4.3, reviews: 91 },
    { id: 33, name: "Straight Leg Trousers", category: "trousers", price: 1299, originalPrice: 1799, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Straight+Leg", rating: 4.6, reviews: 138 },
    { id: 34, name: "Tailored Shorts", category: "trousers", price: 999, originalPrice: 1499, color: "cream", image: "https://via.placeholder.com/200x280/f0e6d2/000000?text=Shorts", rating: 4.2, reviews: 81 },
    { id: 35, name: "Sheer Blouse", category: "shirts", price: 1699, originalPrice: 2299, color: "white", image: "https://via.placeholder.com/200x280/fffafa/000000?text=Sheer+Blouse", rating: 4.4, reviews: 106 },
    { id: 36, name: "Crisp White Shirt", category: "shirts", price: 1399, originalPrice: 1899, color: "white", image: "https://via.placeholder.com/200x280/f5f5f5/000000?text=White+Shirt", rating: 4.7, reviews: 147 },
    { id: 37, name: "Structured Blazer", category: "blazers", price: 3299, originalPrice: 4099, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Structured", rating: 4.8, reviews: 162 },
    { id: 38, name: "Tailored Jacket", category: "blazers", price: 2699, originalPrice: 3399, color: "navy", image: "https://via.placeholder.com/200x280/1f3a5c/ffffff?text=Jacket", rating: 4.6, reviews: 133 },
    { id: 39, name: "Office Pants", category: "trousers", price: 1199, originalPrice: 1599, color: "black", image: "https://via.placeholder.com/200x280/1a1a1a/ffffff?text=Office+Pants", rating: 4.5, reviews: 120 },
    { id: 40, name: "Professional Dress", category: "dresses", price: 3299, originalPrice: 4199, color: "navy", image: "https://via.placeholder.com/200x280/1a3a52/ffffff?text=Professional", rating: 4.9, reviews: 186 },
    { id: 41, name: "Classic Pencil Skirt", category: "skirts", price: 1599, originalPrice: 2199, color: "cream", image: "https://via.placeholder.com/200x280/f5e6d3/000000?text=Pencil+Skirt", rating: 4.5, reviews: 78 }
];

// REVIEW SNIPPETS
const reviewSnippets = [
    "Perfect fit and fabric for office days.",
    "Stylish look with comfortable stretch — highly recommended.",
    "Great product quality and fast delivery.",
    "Nice finish and classic style. I bought two colors.",
    "Very good value for money. Looks premium on camera.",
    "Soft material and well-tailored. Feels very professional.",
    "Excellent design and fast shipping. Highly impressed.",
    "The color is beautiful and the size fits perfectly.",
    "Feels premium and the stitching is clean.",
    "A wardrobe staple for office wear. Very happy with this buy."
];

// GLOBAL VARIABLES
let filteredProducts = [...officeWearProducts];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let displayedProducts = 0;
const PRODUCTS_PER_PAGE = 12;

// INITIALIZE
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateFavoritesCount();
    updateCartCount();
    initHeaderSlider();
});

let headerSlideIndex = 0;
let headerSlideTimer = null;

function initHeaderSlider() {
    showHeaderSlide(headerSlideIndex);
    headerSlideTimer = setInterval(() => {
        changeHeaderSlide(1);
    }, 5000);
}

function showHeaderSlide(index) {
    const slides = document.querySelectorAll('.header-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (!slides.length) return;

    headerSlideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === headerSlideIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === headerSlideIndex);
    });
}

function changeHeaderSlide(direction) {
    showHeaderSlide(headerSlideIndex + direction);
    resetHeaderSlideTimer();
}

function setHeaderSlide(index) {
    showHeaderSlide(index);
    resetHeaderSlideTimer();
}

function resetHeaderSlideTimer() {
    if (headerSlideTimer) {
        clearInterval(headerSlideTimer);
    }
    headerSlideTimer = setInterval(() => {
        changeHeaderSlide(1);
    }, 5000);
}

function getProductImage(product) {
    if (typeof product.image === 'string' && product.image.includes('via.placeholder.com')) {
        return `https://picsum.photos/seed/product-${product.id}/200/280`;
    }
    return product.image;
}

// DISPLAY PRODUCTS
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    const start = 0;
    const end = PRODUCTS_PER_PAGE;
    const productsToDisplay = filteredProducts.slice(start, end);
    
    displayedProducts = end;
    
    grid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${getProductImage(product)}" alt="${product.name}" class="product-image" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22280%22 viewBox=%220 0 200 280%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23dddddd%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2218%22 fill=%22%23666%22%3EImage%3C/text%3E%3C/svg%3E';">
                <button class="favorite-btn ${favorites.includes(product.id) ? 'favorited' : ''}" 
                    onclick="toggleFavorite(event, ${product.id})" title="Add to Favorites">
                    ${favorites.includes(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${getCategoryLabel(product.category)}</div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                <div class="product-review">"${product.reviewText || reviewSnippets[(product.id - 1) % reviewSnippets.length]}"</div>
                <div class="product-price">
                    Rs. ${product.price}
                    <span style="text-decoration: line-through; color: #999; margin-left: 8px;">Rs. ${product.originalPrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('productCount').textContent = filteredProducts.length;
}

// LOAD MORE PRODUCTS
function loadMoreProducts() {
    const grid = document.getElementById('productsGrid');
    const start = displayedProducts;
    const end = displayedProducts + PRODUCTS_PER_PAGE;
    const productsToAdd = filteredProducts.slice(start, end);
    
    if (productsToAdd.length === 0) {
        alert('No more products to load');
        return;
    }
    
    const newProducts = productsToAdd.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${getProductImage(product)}" alt="${product.name}" class="product-image" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22280%22 viewBox=%220 0 200 280%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23dddddd%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2218%22 fill=%22%23666%22%3EImage%3C/text%3E%3C/svg%3E';">
                <button class="favorite-btn ${favorites.includes(product.id) ? 'favorited' : ''}" 
                    onclick="toggleFavorite(event, ${product.id})" title="Add to Favorites">
                    ${favorites.includes(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${getCategoryLabel(product.category)}</div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                <div class="product-review">"${product.reviewText || reviewSnippets[(product.id - 1) % reviewSnippets.length]}"</div>
                <div class="product-price">
                    Rs. ${product.price}
                    <span style="text-decoration: line-through; color: #999; margin-left: 8px;">Rs. ${product.originalPrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    grid.innerHTML += newProducts;
    displayedProducts = end;
}

// FILTER PRODUCTS
function filterProducts() {
    const selectedTypes = [];
    const selectedColors = [];
    
    if (document.getElementById('blazers').checked) selectedTypes.push('blazers');
    if (document.getElementById('dresses').checked) selectedTypes.push('dresses');
    if (document.getElementById('trousers').checked) selectedTypes.push('trousers');
    if (document.getElementById('shirts').checked) selectedTypes.push('shirts');
    if (document.getElementById('skirts').checked) selectedTypes.push('skirts');
    if (document.getElementById('tops').checked) selectedTypes.push('tops');
    
    if (document.getElementById('black').checked) selectedColors.push('black');
    if (document.getElementById('white').checked) selectedColors.push('white');
    if (document.getElementById('navy').checked) selectedColors.push('navy');
    if (document.getElementById('cream').checked) selectedColors.push('cream');
    
    const maxPrice = document.getElementById('priceRange').value;
    document.getElementById('priceValue').textContent = maxPrice;
    
    filteredProducts = officeWearProducts.filter(product => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.category);
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
        const priceMatch = product.price <= maxPrice;
        return typeMatch && colorMatch && priceMatch;
    });
    
    displayedProducts = 0;
    displayProducts();
}

// CLEAR FILTERS
function clearFilters() {
    document.querySelectorAll('.filter-options input, .color-options input').forEach(input => {
        input.checked = false;
    });
    document.getElementById('priceRange').value = 5000;
    document.getElementById('priceValue').textContent = 5000;
    filteredProducts = [...officeWearProducts];
    displayedProducts = 0;
    displayProducts();
}

// SORT PRODUCTS
function sortProducts() {
    const sortBy = document.getElementById('sortBy').value;
    
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    displayedProducts = 0;
    displayProducts();
}

// SEARCH PRODUCTS
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredProducts = officeWearProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayedProducts = 0;
    displayProducts();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

function addToCart(event, productId) {
    event.stopPropagation();
    const product = officeWearProducts.find(item => item.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    alert(`${product.name} has been added to your cart.`);
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty. Add something nice to checkout.</p>';
        cartTotal.textContent = '0';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs. ${item.price} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = totalPrice;
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        renderCart();
        populateShippingForm();
    }
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function validateShipping() {
    const name = document.getElementById('shipName').value.trim();
    const phone = document.getElementById('shipPhone').value.trim();
    const address = document.getElementById('shipAddress').value.trim();
    const city = document.getElementById('shipCity').value.trim();
    const state = document.getElementById('shipState').value.trim();
    const pincode = document.getElementById('shipPincode').value.trim();

    if (name.length < 2) { alert('Please enter full name.'); document.getElementById('shipName').focus(); return null; }
    if (!/^[6-9]\d{9}$/.test(phone)) { alert('Please enter a valid 10-digit mobile number.'); document.getElementById('shipPhone').focus(); return null; }
    if (address.length < 5) { alert('Please enter a valid address.'); document.getElementById('shipAddress').focus(); return null; }
    if (city.length < 2) { alert('Please enter city.'); document.getElementById('shipCity').focus(); return null; }
    if (state.length < 2) { alert('Please enter state.'); document.getElementById('shipState').focus(); return null; }
    if (!/^[1-9][0-9]{5}$/.test(pincode)) { alert('Please enter a valid 6-digit pincode.'); document.getElementById('shipPincode').focus(); return null; }

    const shipping = { name, phone, address, city, state, pincode };
    localStorage.setItem('shipping', JSON.stringify(shipping));
    return shipping;
}

function populateShippingForm() {
    const saved = localStorage.getItem('shipping');
    if (!saved) return;
    try {
        const s = JSON.parse(saved);
        if (s.name) document.getElementById('shipName').value = s.name;
        if (s.phone) document.getElementById('shipPhone').value = s.phone;
        if (s.address) document.getElementById('shipAddress').value = s.address;
        if (s.city) document.getElementById('shipCity').value = s.city;
        if (s.state) document.getElementById('shipState').value = s.state;
        if (s.pincode) document.getElementById('shipPincode').value = s.pincode;
    } catch (e) {
        // ignore
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add products before checkout.');
        return;
    }
    const shipping = validateShipping();
    if (!shipping) return;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'ORD-' + Date.now().toString(36);

    // For demo: open Razorpay and notify
    window.open('https://razorpay.me/@anand5823', '_blank');
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = {
        id: orderId,
        items: cart.slice(),
        shipping,
        total: totalPrice,
        status: 'Payment Pending',
        method: 'Online',
        createdAt: Date.now()
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert(`Proceeding to payment. Order ID: ${orderId}\nAmount: Rs. ${totalPrice}\nShip to: ${shipping.name}, ${shipping.address}, ${shipping.city} - ${shipping.pincode}`);
}

function cashOnDelivery() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add products before checkout.');
        return;
    }
    const shipping = validateShipping();
    if (!shipping) return;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'COD-' + Date.now().toString(36);

    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    closeCartModal();

    // Save COD order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = {
        id: orderId,
        items: [],
        shipping,
        total: totalPrice,
        status: 'Confirmed',
        method: 'Cash on Delivery',
        createdAt: Date.now()
    };
    // include items snapshot (saved before clearing cart)
    // attempt to retrieve last saved cart snapshot if needed
    try {
        const lastCart = JSON.parse(localStorage.getItem('lastCart') || 'null');
        order.items = lastCart || [];
    } catch (e) { order.items = []; }
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert(`Order placed successfully (Order ID: ${orderId}).\nPlease pay Rs. ${totalPrice} in cash on delivery.\nShip to: ${shipping.name}, ${shipping.address}, ${shipping.city} - ${shipping.pincode} (Ph: ${shipping.phone})`);
}

// TOGGLE FAVORITE
function toggleFavorite(event, productId) {
    event.stopPropagation();
    
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    event.target.textContent = favorites.includes(productId) ? '❤️' : '🤍';
    event.target.classList.toggle('favorited');
    updateFavoritesCount();
}

// UPDATE FAVORITES COUNT
function updateFavoritesCount() {
    // Favorites count functionality
}

// CLOSE FAVORITES MODAL
function closeFavoritesModal() {
    document.getElementById('favoritesModal').classList.remove('active');
}

// GET CATEGORY LABEL
function getCategoryLabel(category) {
    const labels = {
        'blazers': 'Blazer',
        'dresses': 'Dress',
        'trousers': 'Trousers',
        'shirts': 'Shirt / Blouse',
        'skirts': 'Skirt',
        'tops': 'Top'
    };
    return labels[category] || category;
}

function scrollToProducts() {
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// THREE-DOT MENU HANDLING
function toggleMoreMenu(event) {
    event.stopPropagation();
    const btn = event.currentTarget;
    const menu = document.getElementById('moreMenu');
    const isOpen = menu.classList.toggle('show');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

function closeMoreMenu() {
    const menu = document.getElementById('moreMenu');
    const btn = document.querySelector('.more-btn');
    if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.setAttribute('aria-hidden', 'true');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    }
}

// Close more menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('moreMenu');
    if (!menu) return;
    const target = e.target;
    if (!menu.contains(target) && !document.querySelector('.more-btn').contains(target)) {
        closeMoreMenu();
    }
});

// ORDER TRACKING
function trackOrder() {
    const id = document.getElementById('trackInput').value.trim();
    const out = document.getElementById('trackResult');
    out.textContent = '';
    if (!id) { out.textContent = 'Enter an Order ID to track.'; return; }
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id.toLowerCase() === id.toLowerCase());
    if (!order) {
        out.textContent = 'No order found with this ID.';
        return;
    }
    const dt = new Date(order.createdAt);
    out.innerHTML = `
        <strong>Order ID:</strong> ${order.id}<br>
        <strong>Status:</strong> ${order.status}<br>
        <strong>Method:</strong> ${order.method}<br>
        <strong>Amount:</strong> Rs. ${order.total}<br>
        <strong>Placed:</strong> ${dt.toLocaleString()}
    `;
}

function downloadApp() {
    const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'anand-clothing-app.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

