
        // --- DATA SOURCE ---
        const portalInfo = { 
            name: "بوابة المعتمر الرقمية", 
            fullName: "بوابة المعتمر الرقمية", 
            logo: "https://placehold.co/100x100/ffffff/0B2027?text=Logo",
            phone: "920000890", 
            whatsapp: "966500000000"
        };
        const backgroundImages = [
            { id: 'bg-new-1', title: 'الكعبة المشرفة', url: 'https://images.unsplash.com/photo-1587474268324-8e3c4b1b2f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80' },
            { id: 'bg-new-2', title: 'الكعبة ليلاً', url: 'https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80' },
            { id: 'bg-new-3', title: 'المسجد النبوي', url: 'https://images.unsplash.com/photo-1574624816427-c9a631293c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80' },
            { id: 'bg-new-4', title: 'المسجد النبوي ليلاً', url: 'https://images.unsplash.com/photo-1588269369162-4b11c4ef254a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80' }
        ];
        const frameStyles = [ { id: 'frame-gold', name: 'ذهبي', borderColor: '#d4af37' }, { id: 'frame-green', name: 'أخضر', borderColor: '#2E4034' }];
        const busImages = { normal: 'https://images.unsplash.com/photo-1574624816427-c9a631293c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', vip: 'https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80' };
        const allHotels = [
             { id: "palestine", name: "فندق فلسطين", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 4, price: 280, rating: 4.7, distance_meters: 750, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "🕋 خطوات معدودة تفصلك عن ساحة الحرم", recommendation: "إذا كان همك الأول هو القرب من الحرم والصلاة في أوقاتها بدون عناء، فهذا هو فندقك. حرفياً دقائق معدودة وأنت في ساحة الحرم. نظافته ممتازة وتقييماته من عملائنا هي الأعلى دائماً.", location_detail: "شارع إبراهيم الخليل (750م)", service_detail: "الأعلى تقييماً للنظافة والخدمة" }, features: [{icon: 'fas fa-walking', text: '750م للحرم'}], badge: {text: 'الأقرب للحرم', color: 'bg-amber-500'} },
             { id: "zad", name: "فندق زاد الرحمة", image: "https://images.unsplash.com/photo-1566073771259-6a850609994d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 3, price: 115, rating: 3.8, distance_meters: 1800, has_shuttle: true, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit', 'single_3_days', 'single_5_days'], persuasive_details: { headline: "💰 أفضل قيمة مقابل سعر! خيار اقتصادي ومجرب", recommendation: "هذا هو خيارنا الأول لمن يبحث عن التوفير الذكي. بسعره الممتاز وموقعه بجوار محطة باصات الحرم مباشرة، ستحصل على خدمة نقل مجانية ومستمرة للحرم على مدار الساعة. الفندق نظيف ومجرب.", location_detail: "محبس الجن – بجوار محطة باصات", service_detail: "خدمة جيدة ونظافة يومية موثوقة" }, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}, {icon: 'fas fa-wifi', text: 'واي فاي'}], badge: {text: 'أفضل قيمة', color: 'bg-green-500'} },
             { id: "holidayinn", name: "فندق هوليدي إن العزيزية", image: "https://images.unsplash.com/photo-1574624816427-c9a631293c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 5, price: 225, rating: 4.4, distance_meters: 2500, has_shuttle: true, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "✨ راحة خمس نجوم بسعر مدروس", recommendation: "إذا كنت تبحث عن فخامة وخدمة فندقية عالمية بسعر مدروس، فهذا هو اختيارك. هوليدي إن اسم معروف بجودته. يوفر باصات فاخرة ومريحة تعمل على مدار اليوم لتوصيلك للحرم.", location_detail: "حي العزيزية – باصات فاخرة للحرم", service_detail: "خدمة وتنظيم احترافي من علامة عالمية" }, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}, {icon: 'fas fa-wifi', text: 'واي فاي'}, {icon: 'fas fa-utensils', text: 'مطعم'}], badge: {text: 'الأكثر طلباً', color: 'bg-blue-500'} },
             { id: "ummakkah", name: "فندق أم مكة ميلينيوم", image: "https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 5, price: 210, rating: 4.3, distance_meters: 1800, has_shuttle: true, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "💎 إقامة فندقية راقية تحت إدارة ميلينيوم", recommendation: "تجربة فندقية ممتازة تحت إدارة علامة ميلينيوم العالمية. الفندق يقدم مستوى عالياً من النظافة والخدمة الاحترافية. مع وجود باصات مجدولة ومنظمة، يجمع هذا الفندق بين الإقامة الراقية والسعر التنافسي.", location_detail: "شارع إبراهيم الخليل – باصات للحرم", service_detail: "خدمة فندقية ممتازة ونظافة عالية" }, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}, {icon: 'fas fa-concierge-bell', text: 'خدمة غرف'}] },
             { id: "razana", name: "فندق رزانة الروضة", image: "https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 4, price: 160, rating: 4.2, distance_meters: 1500, has_shuttle: true, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "⭐ إقامة ممتازة في حي الروضة مع توصيل", recommendation: "يتميز فندق رزانة الروضة بمستواه الممتاز وخدماته الراقية. مع خدمة التوصيل المريحة للحرم، يعتبر خياراً رائعاً لمن يبحث عن إقامة عالية الجودة بسعر مدروس.", location_detail: "حي الروضة (1500م) مع توصيل", service_detail: "مستوى خدمة ممتاز ونظافة عالية" }, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}] },
             { id: "parkroyal", name: "فندق بارك رويال", image: "https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 3, price: 165, rating: 4.5, distance_meters: 900, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "🏨 إقامة عصرية على بعد خطوات من الحرم", recommendation: "يتميز فندق بارك رويال بموقعه المميز قرب الحرم المكي وتصميمه العصري. يوفر غرفاً مريحة مع خدمات عالية الجودة، مما يجعله خياراً مثالياً للراغبين في تجربة عمرة مريحة وعصرية.", location_detail: "شارع إبراهيم الخليل (900م)", service_detail: "تصميم حديث وخدمة استقبال ممتازة" }, features: [{icon: 'fas fa-wifi', text: 'واي فاي'}], badge: {text: 'تصميم عصري', color: 'bg-purple-500'} },
             { id: "qasr", name: "فندق قصر رزق", image: "https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", stars: 3, price: 155, rating: 4.2, distance_meters: 1500, has_shuttle: true, availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "🌟 إقامة هادئة ومريحة مع باص خاص", recommendation: "هذا الفندق يجمع بين الهدوء والراحة. يميزه وجود باص خاص من أمام الباب يوصلك للحرم ويرجعك، وهذا يوفر عليك الكثير من الجهد. معروف بنظافته وحسن تعامل طاقمه.", location_detail: "شارع إبراهيم الخليل (1500م)", service_detail: "تميز بالهدوء وحسن تعامل طاقمه" }, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}, {icon: 'fas fa-wifi', text: 'واي فاي'}], badge: {text: 'إقامة هادئة', color: 'bg-gray-500'} },
             { id: "fouco", name: "فندق فوكو IHG", stars: 5, price: 300, image: "https://images.unsplash.com/photo-1596178065887-119897f93e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", availability: ['makkahOnly', 'makkahVIP', 'makkahMadinaVisit'], persuasive_details: { headline: "🌟 تجربة إقامة راقية في فندق بإدارة عالمية", recommendation: "تجربة إقامة راقية في فندق بإدارة عالمية", location_detail: "شارع إبراهيم الخليل – قريب من محطة باصات الحرم", service_detail: "فخامة عالمية وخدمة استثنائية"}, features: [{icon: 'fas fa-bus', text: 'باص للحرم'}, {icon: 'fas fa-wifi', text: 'واي فاي'}], badge: {text: 'فخامة عالمية', color: 'bg-red-500'} }
        ];
        const motivationalPhrases = ["نسعد بخدمتكم ونتمنى لكم عمرة مقبولة.", "راحتكم غايتنا... رحلة إيمانية لا تُنسى."];
        
        // --- GLOBAL STATE ---
        let lastCalculatedTripDetails = null;
        let currentSortCriteria = 'price';
        
        document.addEventListener('DOMContentLoaded', () => {
            // --- DOM ELEMENTS ---
            const navbar = document.getElementById('navbar');
            const navSubtitle = document.getElementById('nav-subtitle');
            const umrahForm = document.getElementById('umrahForm');
            const offersSection = document.getElementById('offers-section');
            const offersContainer = document.getElementById('offers-container');
            const offersResultsTitle = document.getElementById('offers-results-title');
            const sortingControls = document.getElementById('sorting-controls');
            const modal = document.getElementById('customAlertModal');
            const closeModalBtn = document.getElementById('closeAlertModal');
            const tripDirectionSelect = document.getElementById('tripDirection');
            const departureDateInput = document.getElementById('departureDate');
            const returnDateInput = document.getElementById('returnDate');
            const numPeopleInput = document.getElementById('numPeople');
            const numRoomsInput = document.getElementById('numRooms');
            const numRoomsLabel = document.getElementById('numRoomsLabel');
            const imageModal = document.getElementById('image-modal');
            const modalImageContent = document.getElementById('modal-image-content');
            
            // Chatbot elements
            const chatWidgetButton = document.getElementById('chat-widget-button');
            const chatContainer = document.getElementById('chat-container');
            const closeChatBtn = document.getElementById('close-chat-btn');
            const resetChatBtn = document.getElementById('reset-chat-btn');
            const chatMessages = document.getElementById('chat-messages');
            const chatOptions = document.getElementById('chat-options');
            const chatInputForm = document.getElementById('chat-input-form');
            const chatInput = document.getElementById('chat-input');
            const micBtn = document.getElementById('mic-btn');
            
            let chatInitiated = false;
            let chatHistory = [];
            let chatState = { currentStep: 'initial', tripDetails: {}, availableOffers: [] };
            
            // --- HELPER FUNCTIONS ---
            const showAlertModal = (message, title = 'تنبيه', iconClass = 'fa-exclamation-circle') => {
                modal.querySelector('#alertTitle').textContent = title;
                modal.querySelector('#alertMessage').innerHTML = message;
                modal.querySelector('#alertIcon').className = `fas ${iconClass} text-green-600 text-3xl`;
                modal.classList.add('active');
            };
            
            const closeAlert = () => modal.classList.remove('active');
            
            const getDayName = (dateString) => {
                if (!dateString) return "";
                const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
                return days[new Date(dateString).getUTCDay()];
            };
            
            const calculateTripDays = (start, end) => Math.round(Math.abs((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24))) + 1;
            
            const calculateNights = (start, end, direction) => {
                const days = calculateTripDays(start, end);
                if (days <= 0) return 1;
                if (direction === 'makkahVIP') return 1;
                if (direction.startsWith('single')) return Math.max(1, days - 1);
                return Math.max(1, days - 2);
            };
            
            const calculateBusPrice = (days, isVip) => {
                if (isVip) return 180;
                const prices = [{ d: 3, p: 90 }, { d: 4, p: 100 }, { d: 5, p: 120 }, { d: 7, p: 140 }, { d: 8, p: 175 }];
                const found = prices.find(item => item.d === days);
                return found ? found.p : 175;
            };
            
            // --- EVENT LISTENERS ---
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
                navSubtitle.classList.toggle('text-gray-600', window.scrollY > 50);
                navSubtitle.classList.toggle('text-gray-300', window.scrollY <= 50);
            });
            
            umrahForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (new Date(returnDateInput.value) <= new Date(departureDateInput.value)) {
                    return showAlertModal('تاريخ العودة يجب أن يكون بعد تاريخ الذهاب.');
                }
                lastCalculatedTripDetails = {
                    departureCity: document.getElementById('departureCity').value,
                    tripType: tripDirectionSelect.value,
                    directionText: tripDirectionSelect.options[tripDirectionSelect.selectedIndex].text,
                    tripDuration: calculateTripDays(departureDateInput.value, returnDateInput.value),
                    nights: calculateNights(departureDateInput.value, returnDateInput.value, tripDirectionSelect.value),
                    numSeats: parseInt(numPeopleInput.value),
                    numRooms: parseInt(numRoomsInput.value),
                    isVip: tripDirectionSelect.value === 'makkahVIP',
                    isSingle: tripDirectionSelect.value.startsWith('single'),
                    departureDate: departureDateInput.value,
                    returnDate: returnDateInput.value
                };
                displayOffers(allHotels.filter(h => h.availability.includes(lastCalculatedTripDetails.tripType)), lastCalculatedTripDetails);
            });
            
            const displayOffers = (hotels, tripDetails) => {
                offersContainer.innerHTML = '';
                offersSection.classList.remove('hidden');
                offersResultsTitle.textContent = `العروض المتاحة لرحلة "${tripDetails.directionText}"`;
                
                const offers = hotels.map(hotel => {
                    let totalCost, hotelCost = 0, busCost = 0;
                    if (tripDetails.isSingle) {
                        totalCost = tripDetails.tripType === 'single_3_days' ? 110 : 160;
                    } else {
                        hotelCost = hotel.price * tripDetails.nights * tripDetails.numRooms;
                        busCost = calculateBusPrice(tripDetails.tripDuration, tripDetails.isVip) * tripDetails.numSeats;
                        totalCost = hotelCost + busCost;
                    }
                    return { ...hotel, totalCost, hotelCost, busCost };
                }).sort((a, b) => {
                    if (currentSortCriteria === 'price') return a.totalCost - b.totalCost;
                    if (currentSortCriteria === 'rating') return b.rating - a.rating;
                    if (currentSortCriteria === 'distance') return a.distance_meters - b.distance_meters;
                    return 0;
                });
                
                offers.forEach(offer => {
                    const card = document.getElementById('offer-card-template').content.cloneNode(true);
                    card.querySelector('.hotel-name').textContent = offer.name;
                    card.querySelector('.hotel-rating span').textContent = offer.rating;
                    card.querySelector('.hotel-stars').textContent = offer.stars ? '⭐'.repeat(offer.stars) : 'سكن مشترك';
                    card.querySelector('.hotel-headline').textContent = offer.persuasive_details.headline;
                    card.querySelector('.total-cost').textContent = `${offer.totalCost.toLocaleString()} ﷼`;
                    const featuresContainer = card.querySelector('.hotel-features');
                    if (offer.features) offer.features.forEach(f => featuresContainer.innerHTML += `<span class="flex items-center"><i class="${f.icon} ml-1"></i> ${f.text}</span>`);
                    if (offer.badge) {
                        card.querySelector('.offer-badge').textContent = offer.badge.text;
                        card.querySelector('.offer-badge').classList.add(offer.badge.color);
                    } else {
                        card.querySelector('.offer-badge').style.display = 'none';
                    }
                    card.querySelector('.expert-tip').textContent = `💡 نصيحة الخبير: ${offer.persuasive_details.service_detail}`;
                    const offerText = getOfferText(offer, tripDetails, offer.totalCost);
                    card.querySelector('.copy-btn').onclick = (e) => copyToClipboard(e.currentTarget, offerText);
                    card.querySelector('.image-btn').onclick = () => generateOfferImage(offer.id, offer.totalCost, offer.hotelCost, offer.busCost);
                    card.querySelector('.whatsapp-btn').href = `https://wa.me/?text=${encodeURIComponent(offerText)}`;
                    offersContainer.appendChild(card);
                });
                
                offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            
            const getOfferText = (hotel, tripDetails, totalCost) => {
                const accommodation = tripDetails.isSingle ? `(سكن مشترك)` : `(${'⭐'.repeat(hotel.stars)})`;
                return `السلام عليكم،\nيسر *${portalInfo.fullName}* أن تقدم لكم عرض العمرة التالي:\n\n` +
                       `🏨 *الفندق:* ${hotel.name} ${accommodation}\n` +
                       `✨ *المميزات:* ${hotel.persuasive_details.location_detail}\n\n` +
                       `*تفاصيل الرحلة:*\n` +
                       `📍 *الانطلاق:* من ${tripDetails.departureCity}\n` +
                       `🚌 *الوجهة:* ${tripDetails.directionText}\n` +
                       `📅 *المدة:* ${tripDetails.tripDuration} أيام / ${tripDetails.nights} ليالٍ\n` +
                       `👥 *الحجز:* ${tripDetails.isSingle ? tripDetails.numSeats + ' سرير' : tripDetails.numSeats + ' مقعد / ' + tripDetails.numRooms + ' غرفة'}\n\n` +
                       `💰 *التكلفة:* ${totalCost.toLocaleString()} ﷼\n\n` +
                       `للحجز والاستفسار: ${portalInfo.phone}`;
            };
            
            const copyToClipboard = (btn, text) => {
                navigator.clipboard.writeText(text).then(() => {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i class="fas fa-check text-green-500"></i>';
                    setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                });
            };
            
            const preloadImage = (url) => new Promise((resolve) => {
                if (!url) return resolve();
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve;
            });
            
            const generateOfferImage = async (hotelId, totalPrice, hotelCost, busCost) => {
                const imageUrl = await generateOfferImageForChat(hotelId, totalPrice, hotelCost, busCost);
                if (imageUrl) {
                    const link = document.createElement('a');
                    link.download = `عرض_${allHotels.find(h => h.id === hotelId).name.replace(/ /g, '_')}.png`;
                    link.href = imageUrl;
                    link.click();
                }
            };
            
            const generateOfferImageForChat = async (hotelId, totalPrice, hotelCost, busCost) => {
                 if (!lastCalculatedTripDetails) { showAlertModal('يرجى حساب رحلة أولاً.'); return null; }
                try {
                    const hotelData = allHotels.find(h => h.id === hotelId);
                    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
                    const randomFrame = frameStyles[Math.floor(Math.random() * frameStyles.length)];
                    await Promise.all([preloadImage(randomBg.url), preloadImage(portalInfo.logo), preloadImage(busImages[lastCalculatedTripDetails.isVip ? 'vip' : 'normal']), preloadImage(hotelData.image)]);
                    populateTemplate(hotelData, totalPrice, hotelCost, busCost, randomFrame.borderColor, randomBg.url);
                    const canvas = await html2canvas(document.getElementById('offer-image-template'), { useCORS: true, scale: 2, backgroundColor: null });
                    return canvas.toDataURL('image/png', 1.0);
                } catch (error) {
                    console.error('Image generation error:', error);
                    showAlertModal(`فشل إنشاء الصورة. ${error.message}`, 'خطأ', 'fa-times-circle');
                    return null;
                }
            };
            
            const populateTemplate = (hotelData, totalPrice, hotelCost, busCost, frameColor, bgUrl) => {
                const { tripDuration, nights, numSeats, numRooms, isSingle, departureCity, isVip, clientName } = lastCalculatedTripDetails;
                const templateNode = document.getElementById('offer-image-template');
                templateNode.style.backgroundImage = `url('${bgUrl}')`;
                templateNode.style.borderColor = frameColor;
                document.getElementById('template-main-box').style.borderColor = frameColor;
                document.getElementById('template-agency-logo').src = portalInfo.logo;
                document.getElementById('template-agency-name').textContent = portalInfo.fullName;
                document.getElementById('template-client-name').textContent = clientName ? `عرض خاص لـ: ${clientName}` : `عرض خاص لضيوف الرحمن`;
                document.getElementById('template-hotel-image').src = hotelData.image || `https://placehold.co/240x240/2E4034/FFFFFF?text=${encodeURIComponent(hotelData.name)}`;
                document.getElementById('template-bus-image').src = busImages[isVip ? 'vip' : 'normal'];
                document.getElementById('template-hotel-name').textContent = hotelData.name;
                document.getElementById('template-stars').textContent = isSingle ? 'سكن مشترك' : '⭐'.repeat(hotelData.stars);
                document.getElementById('template-recommendation').textContent = hotelData.persuasive_details.recommendation;
                document.getElementById('template-dates').querySelector('span').textContent = `${tripDuration} أيام / ${nights} ليالٍ`;
                document.getElementById('template-booking-details').querySelector('span').textContent = isSingle ? `${numSeats} سرير` : `${numSeats} أشخاص - ${numRooms} غرفة`;
                document.getElementById('template-bus-details').querySelector('span').textContent = isVip ? 'باص فاخر VIP' : 'باص سياحي حديث';
                document.getElementById('template-location-details').querySelector('span').textContent = `من ${departureCity}`;
                document.getElementById('price-value').textContent = totalPrice.toLocaleString();
                document.getElementById('price-title').textContent = isSingle ? 'السعر للشخص' : 'السعر الإجمالي';
                document.getElementById('template-motivational-footer').textContent = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
                document.getElementById('template-contact').textContent = portalInfo.phone;
                const qrContainer = document.getElementById('template-qrcode');
                qrContainer.innerHTML = '';
                new QRCode(qrContainer, { text: `https://wa.me/${portalInfo.whatsapp}`, width: 90, height: 90, colorDark: "#111827", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.H });
            };
            
            sortingControls.onclick = (e) => {
                const target = e.target.closest('.sort-btn');
                if (!target) return;
                document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active', 'bg-secondary-green', 'text-white'));
                target.classList.add('active', 'bg-secondary-green', 'text-white');
                currentSortCriteria = target.dataset.sort;
                if (lastCalculatedTripDetails) {
                    displayOffers(allHotels.filter(h => h.availability.includes(lastCalculatedTripDetails.tripType)), lastCalculatedTripDetails);
                }
            };
            
            closeModalBtn.onclick = closeAlert;
            modal.onclick = (e) => { if (e.target === modal) closeAlert(); };
            
            // --- CHATBOT LOGIC ---
            const toggleChat = (forceOpen = null) => {
                const isActive = chatContainer.classList.contains('active');
                if (forceOpen === true || !isActive) {
                    chatContainer.classList.add('active');
                    if (!chatInitiated) {
                        initiateChat();
                        chatInitiated = true;
                    }
                } else {
                    chatContainer.classList.remove('active');
                }
            };
            
            const showTypingIndicator = () => {
                const indicator = `<div class="message bot typing">
                    <div class="bot-avatar"><i class="fas fa-robot"></i></div>
                    <div class="message-bubble">
                        <div class="typing-indicator"><span></span><span></span><span></span></div>
                    </div>
                </div>`;
                chatMessages.insertAdjacentHTML('beforeend', indicator);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            };
            
            const hideTypingIndicator = () => {
                const indicator = chatMessages.querySelector('.message.typing');
                if (indicator) indicator.remove();
            };
            
            const addMessage = (text, sender, options = []) => {
                hideTypingIndicator();
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${sender}`;
                
                let avatar = '';
                if (sender === 'bot') {
                    avatar = `<div class="bot-avatar"><i class="fas fa-robot"></i></div>`;
                }
                messageDiv.innerHTML = `
                    ${avatar}
                    <div class="message-bubble">${text}</div>
                `;
                chatMessages.appendChild(messageDiv);
                
                if (sender !== 'system') { // Don't save system messages to history
                    chatHistory.push({ role: sender === 'bot' ? 'model' : 'user', parts: [{ text }] });
                }
                
                chatOptions.innerHTML = '';
                if (options.length > 0) {
                    options.forEach(opt => {
                        const button = document.createElement('button');
                        button.className = 'chat-option-btn';
                        button.textContent = opt.text;
                        button.onclick = () => handleChatOption(opt.action, opt.value, opt.text);
                        chatOptions.appendChild(button);
                    });
                }
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                messageDiv.querySelectorAll('.message-bubble img').forEach(img => {
                    img.onclick = () => {
                        modalImageContent.src = img.src;
                        imageModal.classList.add('active');
                    };
                });
            };
            
            const initiateChat = () => {
                chatMessages.innerHTML = '';
                chatHistory = [];
                chatState = { currentStep: 'initial', tripDetails: {}, availableOffers: [] };
                const welcomeMessage = "مرحباً، أنا مساعدك الذكي. يمكنك أن تسألني عن أي شيء يخص العمرة، أو تصف لي الرحلة التي تحلم بها.";
                addMessage(welcomeMessage, 'bot', [
                    { text: '🕋 تصميم رحلة عمرة', action: 'start_umrah_trip' },
                    { text: '💬 طرح سؤال عام', action: 'general_questions' }
                ]);
            };
            
            const handleChatOption = (action, value, text) => {
                addMessage(text, 'user');
                
                if (action === 'start_umrah_trip') {
                    chatState.currentStep = 'waiting_for_destination';
                    chatState.tripDetails = {}; // Reset details
                    const tripOptions = Array.from(tripDirectionSelect.options)
                        .filter(opt => opt.value)
                        .map(opt => ({ text: opt.textContent, action: 'destination_selected', value: opt.value }));
                    addMessage("على الرحب والسعة. لنبدأ، ما هي وجهتك المفضلة؟", 'bot', tripOptions);
                } else if (action === 'destination_selected') {
                    handleTripPlanningInput(value, 'destination');
                } else {
                    getAiChatResponse(text);
                }
            };
            
            chatWidgetButton.onclick = () => toggleChat();
            closeChatBtn.onclick = () => toggleChat(false);
            resetChatBtn.onclick = initiateChat;
            
            chatInputForm.onsubmit = async (e) => {
                e.preventDefault();
                const userInput = chatInput.value.trim();
                if (!userInput) return;
                chatInput.value = '';
                addMessage(userInput, 'user');
                if (chatState.currentStep.startsWith('waiting_for_')) {
                    handleTripPlanningInput(userInput);
                } else {
                    await getAiChatResponse(userInput);
                }
            };
            
            const handleTripPlanningInput = (input, type = null) => {
                switch(chatState.currentStep) {
                    case 'waiting_for_destination':
                        chatState.tripDetails.destination = type === 'destination' ? input : null; 
                        if (!chatState.tripDetails.destination) { // Basic parsing if user types
                             const foundOption = Array.from(tripDirectionSelect.options).find(opt => opt.textContent.includes(input));
                             chatState.tripDetails.destination = foundOption ? foundOption.value : 'makkahOnly';
                        }
                        chatState.currentStep = 'waiting_for_days';
                        addMessage("ممتاز. كم عدد الأيام التي تخطط لها؟", 'bot');
                        break;
                    case 'waiting_for_days':
                        chatState.tripDetails.duration = parseInt(input);
                        if (isNaN(chatState.tripDetails.duration)) {
                            addMessage("الرجاء إدخال عدد الأيام كرقم صحيح.", 'bot');
                            return;
                        }
                        chatState.currentStep = 'waiting_for_people';
                        addMessage("جيد. كم عدد المقاعد (الأشخاص)؟", 'bot');
                        break;
                    case 'waiting_for_people':
                        chatState.tripDetails.people = parseInt(input);
                        if (isNaN(chatState.tripDetails.people)) {
                            addMessage("الرجاء إدخال عدد الأشخاص كرقم صحيح.", 'bot');
                            return;
                        }
                        chatState.currentStep = 'waiting_for_rooms';
                        addMessage("أخيراً، كم عدد الغرف التي تحتاجونها؟", 'bot');
                        break;
                    case 'waiting_for_rooms':
                        chatState.tripDetails.rooms = parseInt(input);
                        if (isNaN(chatState.tripDetails.rooms)) {
                            addMessage("الرجاء إدخال عدد الغرف كرقم صحيح.", 'bot');
                            return;
                        }
                        chatState.currentStep = 'processing';
                        getAiChatResponse("لدي كل التفاصيل، يرجى تقديم التوصيات الآن.");
                        break;
                }
            };
            
            const getAiChatResponse = async (userInput) => {
                showTypingIndicator();
                chatInput.disabled = true;
                
                // Simulate AI response
                setTimeout(() => {
                    hideTypingIndicator();
                    
                    if (chatState.currentStep === 'processing') {
                        addMessage("بناءً على التفاصيل التي قدمتها، أقترح عليك الخيارات التالية:", 'bot');
                        
                        // Simulate hotel recommendations
                        const recommendations = [
                            "فندق فلسطين - الأقرب للحرم المكي، يوفر راحة فائقة وسهولة الوصول للصلاة.",
                            "فندق زاد الرحمة - خيار اقتصادي ممتاز مع خدمة نقل مجانية للحرم."
                        ];
                        
                        recommendations.forEach(rec => {
                            addMessage(rec, 'bot');
                        });
                        
                        addMessage("هل ترغب في الحصول على صورة عرض لأحد هذه الفنادق؟", 'bot', [
                            { text: "نعم، فندق فلسطين", action: "generate_image", value: "palestine" },
                            { text: "نعم، فندق زاد الرحمة", action: "generate_image", value: "zad" },
                            { text: "لا، شكراً", action: "end_conversation" }
                        ]);
                    } else {
                        // General response
                        const responses = [
                            "أنا هنا لمساعدتك في جميع استفساراتك المتعلقة بالعمرة والسياحة في المملكة.",
                            "يمكنني مساعدتك في التخطيط لرحلتك الإيمانية وتقديم التوصيات المناسبة.",
                            "لدي معلومات شاملة عن الفنادق والنقل والمعالم السياحية في المملكة."
                        ];
                        
                        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                        addMessage(randomResponse, 'bot');
                    }
                    
                    chatInput.disabled = false;
                    chatInput.focus();
                }, 1500);
            };
            
            // --- SPEECH RECOGNITION ---
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.lang = 'ar-SA';
                recognition.interimResults = false;
                
                micBtn.onclick = () => {
                    recognition.start();
                    micBtn.classList.add('listening');
                };
                
                recognition.onresult = (event) => {
                    const speechResult = event.results[0][0].transcript;
                    chatInput.value = speechResult;
                    chatInputForm.dispatchEvent(new Event('submit'));
                };
                
                recognition.onspeechend = () => recognition.stop();
                recognition.onend = () => micBtn.classList.remove('listening');
                recognition.onerror = (event) => console.error('Speech recognition error', event.error);
            } else {
                micBtn.style.display = 'none';
            }
        });
    