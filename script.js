const tabs = document.querySelectorAll('.tab');
const priceCardContainer = document.querySelector('.pricingCardContainer');
let htmlString = '';


tabs.forEach((tab, ind) => {
    tab.addEventListener('click', () => {
        tabs[0].classList.remove('active')
        tabs[1].classList.remove('active')
        tab.classList.add('active');
    });
});

const fetchFeatures = (item) => {
    let str = '';
    item.features.forEach((feature, ind) => {
        str += `
        <li>
            <a href="#">
                <i class='bx bxs-check-circle'></i>
                ${feature}
            </a>
        </li>
        `
    });
    return str;
}

data.forEach((item, ind) => {
    htmlString += `
    <div class="priceCard ${ind == 1 ? 'special' : ''}">
        <div class="topBx">
            <h3>${item.memberType}</h3>
            <div class="align-straight">
                <span>$&nbsp;&nbsp;</span>
                <h2>${item.price}</h2> <span class="light-text">&nbsp; /month</span>
            </div>
            <a href="#" class="btn">Start for free</a>
            <div class="contentBx">
                <p>
                    ${item.text}
                </p>
            </div>
        </div>

        <div class="bottomBx">
            <ul>
                ${fetchFeatures(item)}

                <li>
                    <a href="#" class="btn">Start for free</a>
                </li>
            </ul>
        </div>
    </div>
    `;
});

priceCardContainer.innerHTML = htmlString;
