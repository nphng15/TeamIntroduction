document.addEventListener('DOMContentLoaded', function() {
    // Cuộn mượt cho menu điều hướng
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Hiệu ứng hiển thị khi cuộn
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Hiệu ứng hover cho các card thành viên
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Hiển thị phần tiêu đề đang hoạt động trong menu
    function updateActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSectionIndex = 0;
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition) {
                currentSectionIndex = index;
            }
        });
        
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentSectionIndex].classList.add('active');
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
    
    // Nút quay lại đầu trang
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 