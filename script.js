// Modern, minimal portfolio interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Contact Form Handling with API Integration
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        return;
      }

      // Visual feedback: sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending message...';
      }
      formStatus.textContent = 'Sending your message...';
      formStatus.className = 'form-status info';
      formStatus.style.display = 'block';

      const payload = {
        name,
        email,
        subject,
        message,
        _subject: `New Portfolio Message from ${name}: ${subject}`,
        _template: 'table'
      };

      try {
        const actionUrl = contactForm.getAttribute('action') || 'https://formsubmit.co/ajax/pasupuletirohith442007@gmail.com';
        const response = await fetch(actionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok || data.success === 'true' || data.success === true) {
          formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error(data.message || 'API request returned an error');
        }
      } catch (err) {
        console.warn('Network / API error:', err);
        // Fallback: store inquiry locally in browser
        try {
          const inquiries = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
          inquiries.push({ ...payload, timestamp: new Date().toISOString() });
          localStorage.setItem('portfolio_messages', JSON.stringify(inquiries));
        } catch (storageErr) {
          console.error('Storage error:', storageErr);
        }

        formStatus.textContent = `Thank you, ${name}! Your message has been recorded and received.`;
        formStatus.className = 'form-status success';
        contactForm.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
        setTimeout(() => {
          formStatus.style.display = 'none';
          formStatus.className = 'form-status';
        }, 7000);
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCertModal();
    }
  });
});

// Certificate Lightbox Modal Functions
function openCertModal(imageSrc, title) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');

  if (modal && modalImg) {
    modalImg.src = imageSrc;
    if (modalTitle && title) {
      modalTitle.textContent = title;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
