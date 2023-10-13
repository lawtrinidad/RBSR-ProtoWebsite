const btnSI = document.getElementById('openSIbranch');
const btnSR = document.getElementById('openSRbranch');
const btnBAL = document.getElementById('openBALbranch');
const titleHeader = document.querySelector('#title-header p');
const addressElement = document.querySelector('.contact-text h2:nth-child(2) + p');
const contactElement = document.querySelector('.contact-text h2:nth-child(4) + p');
const branchIframe = document.getElementById('myIframe');

btnSI.addEventListener('click', function(){
    branchIframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d963.0962409301824!2d120.9386279!3d15.0820973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339702fd1945f637%3A0x219e4113f8c325f6!2sRural%20Bank%20Of%20San%20Rafael%20Bulacan%20Inc.!5e0!3m2!1sen!2sph!4v1697085040996!5m2!1sen!2sph'
    titleHeader.textContent = 'Rural Bank of San Rafael - San Ildefonso Branch'
    addressElement.textContent = 'San Ildefonso, Bulacan'
    contactElement.textContent = '(044) 797-0544'
});
btnSR.addEventListener('click', function(){
    branchIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.355307758677!2d120.93201607424193!3d15.028451166460313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970186bfe6bf43%3A0x8b988e554d4a2991!2sRural%20Bank%20of%20San%20Rafael%20(Head%20Office)!5e0!3m2!1sen!2sph!4v1697086038966!5m2!1sen!2sph'
    titleHeader.textContent = 'Rural Bank of San Rafael (Head Office)'
    addressElement.textContent = 'RBSR Building, 172 Pan-Philippine Hwy, San Rafael, 3008 Bulacan'
    contactElement.textContent = '0932 848 6876 / (044) 617-8719'
});
btnBAL.addEventListener('click', function(){
    branchIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.489717422863!2d120.89403347424066!3d14.965496368040556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339700010d1b5267%3A0xcf6cacbfa68dc194!2sRural%20Bank%20of%20San%20Rafael!5e0!3m2!1sen!2sph!4v1697085953035!5m2!1sen!2sph'
    titleHeader.textContent = 'Rural Bank of San Rafael - Baliwag Branch'
    addressElement.textContent = 'B Aquino St, Baliwag, Bulacan'
    contactElement.textContent = '(044) 766-4293'
});

