/**
 * AUTOFIX Car Service Booking App Logic
 * Strictly following BMW M design and typography principles.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. Data Definitions
    // ==========================================================================

    const SERVICES_DATA = [
        {
            id: 'service-general',
            name: 'General Service',
            price: 2499,
            duration: '3 Hours',
            desc: 'Comprehensive mechanical check, fluid level top-ups, air filter cleaning, and full computerized diagnostics scan.',
            features: [
                '32-point computer diagnostics check',
                'Brake wear & safety inspections',
                'Coolant & fluids level corrections',
                'Air filter and spark plug cleaning'
            ]
        },
        {
            id: 'service-oil',
            name: 'Oil Change',
            price: 1499,
            duration: '1 Hour',
            desc: 'Engine flush, drain, and oil replacement using high-performance fully synthetic oil and genuine filter components.',
            features: [
                'Premium fully synthetic engine oil',
                'Genuine oil filter replacement',
                'Ecological old oil disposal',
                'Tread wear diagnostic inspection'
            ]
        },
        {
            id: 'service-battery',
            name: 'Battery Replacement',
            price: 3999,
            duration: '1 Hour',
            desc: 'Battery load testing, terminal sanitation, and installation of a high-durability performance battery (includes warranty).',
            features: [
                'High-performance maintenance-free battery',
                'Terminals cleaning & chemical lubrication',
                'Battery load check certification',
                'Up to 3-year warranty setup'
            ]
        },
        {
            id: 'service-tyre',
            name: 'Tyre Alignment Checking',
            price: 799,
            duration: '2 Hours',
            desc: 'Precision 3D steering angle checking, wheel balancing calibrations, and computerized tyre wear angle corrections.',
            features: [
                'Precision 3D steering alignment scan',
                'Wheel balancing and balance weights',
                'Tyre pressure and tread depth index',
                'Steering angle zero-calibration'
            ]
        }
    ];

    const SPARE_PARTS_DATA = [
        {
            id: 'part-brake-pads',
            name: 'Performance Brake Pads',
            price: 3499,
            desc: 'High-friction carbon-metallic brake pads. Designed for extreme braking stability and reduced dust.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kkvcEtqMTQEEzxw5Aye6Pi5-Ke4iyKznrtZ5-Gjviw&s=10'
        },
        {
            id: 'part-engine-oil',
            name: 'Premium Synthetic Engine Oil (4L)',
            price: 2899,
            desc: 'Advanced friction-reducing formulation to protect motors under high temperature thresholds.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5Zuv2sLkLy4wLdEg_pjcWFweSHJH1HXcotrE3ZFR-A&s=10'
        },
        {
            id: 'part-clutch-plate',
            name: 'Heavy-Duty Clutch Plate',
            price: 6499,
            desc: 'Reinforced friction coupling, providing efficient torque transfer and long endurance life.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaXxqxiZFXVkiEmiYDBpiP2XQmi6LQjHDiJMZHVBhQQ&s=10'
        },
        {
            id: 'part-spark-plugs',
            name: 'Motorsport Spark Plugs (Set of 4)',
            price: 1799,
            desc: 'Double-iridium core spark plugs engineered for robust ignition firing and fuel combustion stability.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwOc8W4sYa17u8GNHIu2qVYoA0zB-3M82B52Z-Dx3WA&s=10'
        }
    ];

    const WORKSHOPS_DATA = {
        bengaluru: [
            {
                name: 'M-Power Performance Center',
                address: 'Plot 42, Electronic City Phase 1, Bengaluru - 560100',
                rating: '4.9 ★',
                distance: '2.4 km away',
                img: 'https://images.unsplash.com/photo-1727893119356-1702fe921cf9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwc2VydmljZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                name: 'Ultimate Car Craft',
                address: '12, Indiranagar Double Rd, Bengaluru - 560038',
                rating: '4.8 ★',
                distance: '5.1 km away',
                img: 'https://images.unsplash.com/photo-1711386689622-1cda23e10217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHNlcnZpY2UlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D'
            },
            {
                name: 'Bavarian Auto Works',
                address: 'Outer Ring Rd, Whitefield, Bengaluru - 560066',
                rating: '4.7 ★',
                distance: '8.9 km away',
                img: 'https://media.istockphoto.com/id/2154815866/photo/auto-mechanic-repairman-using-a-socket-wrench-working-auto-suspension-repair-in-the-garage.jpg?s=2048x2048&w=is&k=20&c=Q49VevTd-0UGUl_iBGM9gc858eBMp_7RdtBCihB8wLg='
            }
        ],
        hyderabad: [
            {
                name: 'Deccan Motorsports',
                address: 'Road No. 36, Jubilee Hills, Hyderabad - 500033',
                rating: '4.9 ★',
                distance: '3.1 km away',
                img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Apex Auto Care',
                address: 'Hi-Tech City Main Rd, Kothaguda, Hyderabad - 500084',
                rating: '4.7 ★',
                distance: '4.5 km away',
                img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Nizam Elite Garages',
                address: 'Gachibowli Outer Ring Rd, Hyderabad - 500032',
                rating: '4.8 ★',
                distance: '6.2 km away',
                img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80'
            }
        ],
        chennai: [
            {
                name: 'Coromandel Garage',
                address: 'ECR Road, Thiruvanmiyur, Chennai - 600041',
                rating: '4.8 ★',
                distance: '1.8 km away',
                img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Madras Circuit Services',
                address: 'Mount Road, Nandanam, Chennai - 600035',
                rating: '4.9 ★',
                distance: '4.2 km away',
                img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Marina Precision Auto',
                address: 'OMR Road, Karapakkam, Chennai - 600097',
                rating: '4.6 ★',
                distance: '7.0 km away',
                img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80'
            }
        ]
    };

    // ==========================================================================
    // 2. DOM Elements Selection
    // ==========================================================================

    const globalCitySelector = document.getElementById('global-city-selector');
    const formCitySelector = document.getElementById('booking-city');
    const formWorkshopSelector = document.getElementById('booking-workshop');
    const cityTabButtons = document.querySelectorAll('#city-tabs-container .category-tab');
    const workshopGrid = document.getElementById('workshop-cards-grid');
    const servicesGrid = document.getElementById('services-grid-container');
    const partsGrid = document.getElementById('parts-grid-container');
    const formServicesList = document.getElementById('form-services-list');
    const formPartsList = document.getElementById('form-parts-list');
    
    // Booking Form & Summary elements
    const bookingForm = document.getElementById('booking-form');
    const pickupDropToggle = document.getElementById('pickup-drop-toggle');
    const valetAddressFields = document.getElementById('valet-address-fields');
    const pickupAddressInput = document.getElementById('pickup-address');
    
    const summaryCity = document.getElementById('summary-city');
    const summaryWorkshop = document.getElementById('summary-workshop');
    const summaryDatetime = document.getElementById('summary-datetime');
    const summaryVehicle = document.getElementById('summary-vehicle');
    const summaryServicesList = document.getElementById('summary-services-list');
    const summaryPartsList = document.getElementById('summary-parts-list');
    
    const priceSubtotal = document.getElementById('price-subtotal');
    const pricePartsSubtotal = document.getElementById('price-parts-subtotal');
    const valetPriceRow = document.getElementById('valet-price-row');
    const priceValet = document.getElementById('price-valet');
    const priceGst = document.getElementById('price-gst');
    const priceGrandtotal = document.getElementById('price-grandtotal');
    
    // Confirmation Overlay Elements
    const confirmationOverlay = document.getElementById('confirmation-overlay');
    const confirmRef = document.getElementById('confirm-ref');
    const confirmWorkshop = document.getElementById('confirm-workshop');
    const confirmDatetime = document.getElementById('confirm-datetime');
    const confirmValet = document.getElementById('confirm-valet');
    const confirmVehicle = document.getElementById('confirm-vehicle');
    const confirmAmount = document.getElementById('confirm-amount');
    const btnCloseConfirm = document.getElementById('btn-close-confirm');

    // State Variables
    let currentCity = 'bengaluru';
    let selectedServices = new Set(['service-general']); // Pre-select standard general service by default
    let selectedParts = new Set();
    const VALET_FEE = 999;

    // ==========================================================================
    // 3. UI Rendering & Sync Operations
    // ==========================================================================

    // Dynamic rendering of Workshop cards in the network section
    function renderWorkshops(city) {
        workshopGrid.innerHTML = '';
        const list = WORKSHOPS_DATA[city] || [];
        
        list.forEach(center => {
            const card = document.createElement('div');
            card.className = 'workshop-card';
            card.innerHTML = `
                <div class="workshop-img" style="background-image: url('${center.img}')"></div>
                <div class="workshop-info">
                    <h3 class="workshop-name">${center.name}</h3>
                    <p class="workshop-address">${center.address}</p>
                    <div class="workshop-meta">
                        <span class="meta-rating">${center.rating}</span>
                        <span class="meta-distance">${center.distance}</span>
                    </div>
                </div>
            `;
            workshopGrid.appendChild(card);
        });
    }

    // Dynamic rendering of Services catalog cards
    function renderServicesGrid() {
        servicesGrid.innerHTML = '';
        SERVICES_DATA.forEach(service => {
            const isSelected = selectedServices.has(service.id);
            const featuresHTML = service.features.map(f => `<li><i class="fa-solid fa-chevron-right"></i> ${f}</li>`).join('');
            
            const cell = document.createElement('div');
            cell.className = 'service-cell';
            cell.innerHTML = `
                <div class="service-cell-header">
                    <span class="service-duration"><i class="fa-solid fa-clock"></i> ${service.duration}</span>
                    <span class="service-price">₹${service.price.toLocaleString('en-IN')}</span>
                </div>
                <h3 class="service-title">${service.name}</h3>
                <p class="service-desc">${service.desc}</p>
                <ul class="service-features-list">
                    ${featuresHTML}
                </ul>
                <div class="service-actions">
                    <button type="button" class="btn-select-service ${isSelected ? 'selected' : ''}" data-service-id="${service.id}">
                        ${isSelected ? 'ADDED TO BOOKING' : 'ADD TO BOOKING'}
                    </button>
                </div>
            `;
            servicesGrid.appendChild(cell);
        });
    }

    // Dynamic rendering of Spare Parts catalog cards
    function renderPartsGrid() {
        partsGrid.innerHTML = '';
        SPARE_PARTS_DATA.forEach(part => {
            const isSelected = selectedParts.has(part.id);
            const cell = document.createElement('div');
            cell.className = 'service-cell'; // reuse design layout of cell
            cell.innerHTML = `
                <div class="service-cell-header" style="margin-bottom: var(--spacing-sm);">
                    <span class="service-price">₹${part.price.toLocaleString('en-IN')}</span>
                </div>
                <div class="workshop-img" style="background-image: url('${part.img}'); height: 140px; margin-bottom: var(--spacing-sm);"></div>
                <h3 class="service-title" style="font-size: 18px; margin-bottom: var(--spacing-xxs);">${part.name}</h3>
                <p class="service-desc" style="margin-bottom: var(--spacing-md); height: 50px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${part.desc}</p>
                <div class="service-actions">
                    <button type="button" class="btn-select-part ${isSelected ? 'selected' : ''}" data-part-id="${part.id}" style="width: 100%; padding: 10px; font-size: 11px;">
                        ${isSelected ? 'ADDED TO ORDER' : 'ADD SPARE PART'}
                    </button>
                </div>
            `;
            partsGrid.appendChild(cell);
        });
    }

    // Dynamic rendering of form checkboxes for Services
    function renderFormServicesCheckboxes() {
        formServicesList.innerHTML = '';
        SERVICES_DATA.forEach(service => {
            const isChecked = selectedServices.has(service.id);
            const card = document.createElement('div');
            card.className = `service-checkbox-card ${isChecked ? 'checked' : ''}`;
            card.setAttribute('data-service-id', service.id);
            
            card.innerHTML = `
                <div class="cb-label-wrap">
                    <div class="custom-checkbox">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <span class="cb-service-name">${service.name}</span>
                </div>
                <span class="cb-service-price">₹${service.price.toLocaleString('en-IN')}</span>
            `;
            formServicesList.appendChild(card);
        });
    }

    // Dynamic rendering of form checkboxes for Spare Parts
    function renderFormPartsCheckboxes() {
        formPartsList.innerHTML = '';
        SPARE_PARTS_DATA.forEach(part => {
            const isChecked = selectedParts.has(part.id);
            const card = document.createElement('div');
            card.className = `service-checkbox-card ${isChecked ? 'checked' : ''}`;
            card.setAttribute('data-part-id', part.id);
            
            card.innerHTML = `
                <div class="cb-label-wrap">
                    <div class="custom-checkbox">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <span class="cb-service-name">${part.name}</span>
                </div>
                <span class="cb-service-price">₹${part.price.toLocaleString('en-IN')}</span>
            `;
            formPartsList.appendChild(card);
        });
    }

    // Populate Workshop Dropdown in Form based on selected city
    function populateFormWorkshops(city) {
        formWorkshopSelector.innerHTML = '';
        const list = WORKSHOPS_DATA[city] || [];
        
        list.forEach(center => {
            const opt = document.createElement('option');
            opt.value = center.name;
            opt.textContent = center.name;
            formWorkshopSelector.appendChild(opt);
        });

        // Set default workshop in summary
        if (list.length > 0) {
            summaryWorkshop.textContent = list[0].name.toUpperCase();
        }
        calculatePricing();
    }

    // Sync all city selectors (Global select, tabs, form selector)
    function syncCityChange(newCity) {
        currentCity = newCity;
        
        // 1. Sync global dropdown
        globalCitySelector.value = newCity;
        
        // 2. Sync form dropdown
        formCitySelector.value = newCity;
        
        // 3. Sync tabs
        cityTabButtons.forEach(btn => {
            if (btn.getAttribute('data-city') === newCity) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 4. Update workshops listing
        renderWorkshops(newCity);
        
        // 5. Update form workshops dropdown
        populateFormWorkshops(newCity);

        // 6. Update summary text
        summaryCity.textContent = newCity.toUpperCase();
    }

    // Calculate subtotals, valet fee, GST, and Grand total
    function calculatePricing() {
        let servicesTotal = 0;
        selectedServices.forEach(id => {
            const service = SERVICES_DATA.find(s => s.id === id);
            if (service) servicesTotal += service.price;
        });

        let partsTotal = 0;
        selectedParts.forEach(id => {
            const part = SPARE_PARTS_DATA.find(p => p.id === id);
            if (part) partsTotal += part.price;
        });

        // Update subtotals display
        priceSubtotal.textContent = `₹${servicesTotal.toLocaleString('en-IN')}`;
        pricePartsSubtotal.textContent = `₹${partsTotal.toLocaleString('en-IN')}`;

        // Valet pricing
        const valetActive = pickupDropToggle.checked;
        let valetCharge = 0;
        if (valetActive) {
            valetCharge = VALET_FEE;
            valetPriceRow.style.display = 'flex';
            priceValet.textContent = `₹${valetCharge.toLocaleString('en-IN')}`;
        } else {
            valetPriceRow.style.display = 'none';
        }

        // Tax calculation (18% GST)
        const taxableAmount = servicesTotal + partsTotal + valetCharge;
        const gst = Math.round(taxableAmount * 0.18);
        priceGst.textContent = `₹${gst.toLocaleString('en-IN')}`;

        // Grand Total
        const total = taxableAmount + gst;
        priceGrandtotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    // Re-render and calculate the services listed in the checkout panel
    function updateSummaryServices() {
        summaryServicesList.innerHTML = '';
        
        if (selectedServices.size === 0) {
            summaryServicesList.innerHTML = '<li class="empty-list-msg">No services selected</li>';
        } else {
            selectedServices.forEach(id => {
                const service = SERVICES_DATA.find(s => s.id === id);
                if (service) {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="item-name">${service.name}</span>
                        <span class="item-price">₹${service.price.toLocaleString('en-IN')}</span>
                    `;
                    summaryServicesList.appendChild(li);
                }
            });
        }
        calculatePricing();
    }

    // Re-render and calculate spare parts in checkout panel
    function updateSummaryParts() {
        summaryPartsList.innerHTML = '';
        
        if (selectedParts.size === 0) {
            summaryPartsList.innerHTML = '<li class="empty-list-msg">No parts selected</li>';
        } else {
            selectedParts.forEach(id => {
                const part = SPARE_PARTS_DATA.find(p => p.id === id);
                if (part) {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="item-name">${part.name}</span>
                        <span class="item-price">₹${part.price.toLocaleString('en-IN')}</span>
                    `;
                    summaryPartsList.appendChild(li);
                }
            });
        }
        calculatePricing();
    }

    // ==========================================================================
    // 4. Event Binding
    // ==========================================================================

    // Global city selector change
    globalCitySelector.addEventListener('change', (e) => {
        syncCityChange(e.target.value);
    });

    // Form city selector change
    formCitySelector.addEventListener('change', (e) => {
        syncCityChange(e.target.value);
    });

    // Form workshop selector change
    formWorkshopSelector.addEventListener('change', (e) => {
        summaryWorkshop.textContent = e.target.value.toUpperCase();
    });

    // City tabs selection
    cityTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.getAttribute('data-city');
            syncCityChange(city);
        });
    });

    // Services section "Add to booking" grid button clicks
    servicesGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-select-service')) {
            const id = e.target.getAttribute('data-service-id');
            if (selectedServices.has(id)) {
                selectedServices.delete(id);
            } else {
                selectedServices.add(id);
            }
            renderServicesGrid();
            renderFormServicesCheckboxes();
            updateSummaryServices();
        }
    });

    // Spare parts section "Add spare part" button clicks
    partsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-select-part')) {
            const id = e.target.getAttribute('data-part-id');
            if (selectedParts.has(id)) {
                selectedParts.delete(id);
            } else {
                selectedParts.add(id);
            }
            renderPartsGrid();
            renderFormPartsCheckboxes();
            updateSummaryParts();
        }
    });

    // Form checkboxes section clicks for Services
    formServicesList.addEventListener('click', (e) => {
        const checkboxCard = e.target.closest('.service-checkbox-card');
        if (checkboxCard) {
            const id = checkboxCard.getAttribute('data-service-id');
            if (id) {
                if (selectedServices.has(id)) {
                    selectedServices.delete(id);
                } else {
                    selectedServices.add(id);
                }
                renderServicesGrid();
                renderFormServicesCheckboxes();
                updateSummaryServices();
            }
        }
    });

    // Form checkboxes section clicks for Parts
    formPartsList.addEventListener('click', (e) => {
        const checkboxCard = e.target.closest('.service-checkbox-card');
        if (checkboxCard) {
            const id = checkboxCard.getAttribute('data-part-id');
            if (id) {
                if (selectedParts.has(id)) {
                    selectedParts.delete(id);
                } else {
                    selectedParts.add(id);
                }
                renderPartsGrid();
                renderFormPartsCheckboxes();
                updateSummaryParts();
            }
        }
    });

    // Valet pickup drop switch toggle
    pickupDropToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            valetAddressFields.classList.add('active');
            pickupAddressInput.setAttribute('required', 'true');
        } else {
            valetAddressFields.classList.remove('active');
            pickupAddressInput.removeAttribute('required');
            pickupAddressInput.value = '';
        }
        calculatePricing();
    });

    // Instant sync for contact details into booking summary panel
    const inputDate = document.getElementById('booking-date');
    const inputTime = document.getElementById('booking-time');
    const inputCar = document.getElementById('car-details');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    inputDate.setAttribute('min', today);

    function syncDateTimeSummary() {
        const dateVal = inputDate.value;
        const timeVal = inputTime.value;
        if (dateVal && timeVal) {
            // Format date to local readable
            const dateObj = new Date(dateVal);
            const formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
            summaryDatetime.textContent = `${formattedDate} @ ${timeVal}`;
        } else if (dateVal) {
            const dateObj = new Date(dateVal);
            summaryDatetime.textContent = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        } else {
            summaryDatetime.textContent = '-';
        }
    }

    inputDate.addEventListener('change', syncDateTimeSummary);
    inputTime.addEventListener('change', syncDateTimeSummary);

    inputCar.addEventListener('input', (e) => {
        summaryVehicle.textContent = e.target.value ? e.target.value.toUpperCase() : '-';
    });

    // Form submission processing
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check if at least one service is selected
        if (selectedServices.size === 0) {
            alert('PILOT WARNING: Select at least one standard service package to proceed.');
            return;
        }

        // Additional validation for Pickup Address if toggle is checked
        if (pickupDropToggle.checked && !pickupAddressInput.value.trim()) {
            alert('PILOT WARNING: Complete valet address coordinates are required.');
            return;
        }

        // Form details extraction
        const nameVal = document.getElementById('client-name').value;
        const phoneVal = document.getElementById('client-phone').value;
        const emailVal = document.getElementById('client-email').value;
        const workshopVal = formWorkshopSelector.value;
        const dateVal = inputDate.value;
        const timeVal = inputTime.value;
        const vehicleVal = inputCar.value;

        // Generate dynamic ticket reference number
        const randomRef = 'M-' + Math.floor(10000 + Math.random() * 90000) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
        
        // Populate confirmation modal fields
        confirmRef.textContent = randomRef;
        confirmWorkshop.textContent = workshopVal.toUpperCase();
        
        const dateObj = new Date(dateVal);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        confirmDatetime.textContent = `${formattedDate} @ ${timeVal}`;
        
        confirmValet.textContent = pickupDropToggle.checked ? 'VALET ACTIVE (INBOUND & OUTBOUND)' : 'VALET OFF (DIRECT DROP-OFF)';
        confirmValet.style.color = pickupDropToggle.checked ? 'var(--color-m-blue-light)' : 'var(--color-muted)';
        
        confirmVehicle.textContent = vehicleVal.toUpperCase();
        confirmAmount.textContent = priceGrandtotal.textContent;

        // Open Overlay
        confirmationOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    });

    // Close Confirmation overlay
    btnCloseConfirm.addEventListener('click', () => {
        confirmationOverlay.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling
        
        // Reset state & form
        bookingForm.reset();
        valetAddressFields.classList.remove('active');
        pickupAddressInput.removeAttribute('required');
        
        selectedServices = new Set(['service-general']);
        selectedParts = new Set();
        syncCityChange('bengaluru');
        
        // Refresh grids
        renderServicesGrid();
        renderPartsGrid();
        renderFormServicesCheckboxes();
        renderFormPartsCheckboxes();
        updateSummaryServices();
        updateSummaryParts();
        
        // Reset summary elements
        summaryDatetime.textContent = '-';
        summaryVehicle.textContent = '-';
        
        // Scroll to top of window smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close confirmation overlay on pressing ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && confirmationOverlay.classList.contains('active')) {
            btnCloseConfirm.click();
        }
    });

    // ==========================================================================
    // 5. Initial App Bootstrap
    // ==========================================================================

    // Initialize display components
    syncCityChange('bengaluru');
    renderServicesGrid();
    renderPartsGrid();
    renderFormServicesCheckboxes();
    renderFormPartsCheckboxes();
    updateSummaryServices();
    updateSummaryParts();

});
