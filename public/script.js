

const gumroadLink = "https://bitlinkerstudio.gumroad.com/l/AppLockr";
const contactEmail = "applockrmm@gmail.com";

document.addEventListener('DOMContentLoaded', () => {
  const buyBtn = document.getElementById('buyBtn');
  const emailBtn = document.getElementById('emailBtn');

  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      window.open(gumroadLink, '_blank');
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      window.location.href = `mailto:${contactEmail}`;
    });
  }
});