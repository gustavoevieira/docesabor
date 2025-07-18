document.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    fadeInItems.forEach(item => {
        itemObserver.observe(item);
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            heroSection.style.backgroundPositionY = -scrollPos * 0.3 + 'px'; 
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const galleryThumbnails = document.querySelectorAll('.gallery-thumbnail');
    const galleryModal = document.getElementById('galleryModal');
    const carouselInnerImg = galleryModal.querySelector('.carousel-inner img'); 
    const closeModalButton = galleryModal.querySelector('.close-button');
    const prevButton = galleryModal.querySelector('.prev-button');
    const nextButton = galleryModal.querySelector('.next-button');

    const fullImages = [
        'public/uploads/img/galery-1.png', 
        'public/uploads/img/galery-2.png',
        'public/uploads/img/galery-3.png',
        'public/uploads/img/galery-4.png',
        'public/uploads/img/galery-5.png',
        'public/uploads/img/galery-6.png',
        'public/uploads/img/galery-7.png',
        'public/uploads/img/galery-8.png'
    ];
    let currentImageIndex = 0; 

    function openGalleryModal(index) {
        currentImageIndex = index;
        carouselInnerImg.src = fullImages[currentImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentImageIndex + 1}`;
        galleryModal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; 
    }

    function closeGalleryModal() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

    function nextGalleryImage() {
        currentImageIndex = (currentImageIndex + 1) % fullImages.length;
        carouselInnerImg.src = fullImages[currentImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentImageIndex + 1}`;
    }

    function prevGalleryImage() {
        currentImageIndex = (currentImageIndex - 1 + fullImages.length) % fullImages.length;
        carouselInnerImg.src = fullImages[currentImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentImageIndex + 1}`;
    }

    galleryThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function(event) {
            event.preventDefault(); 
            const index = parseInt(this.getAttribute('data-index'));
            openGalleryModal(index);
        });
    });

    closeModalButton.addEventListener('click', closeGalleryModal);
    prevButton.addEventListener('click', prevGalleryImage);
    nextButton.addEventListener('click', nextGalleryImage);

    galleryModal.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            closeGalleryModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && galleryModal.style.display === 'flex') {
            closeGalleryModal();
        }
    });
});