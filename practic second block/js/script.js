'use srtict';
document.addEventListener('DOMContentLoaded', () => {

    const tabHeaderItem = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabHeader = document.querySelector('.tabheader__items');

    const tabContentHide = (tabsCon) => {
        tabsCon.forEach((item) => {
            item.classList.add("hide");
        });
    };

    const tabContentShow = ((tabsCon, i = 0) =>{
        tabsCon[i].classList.add("show" , "fade");
        tabsCon[i].classList.remove("hide");
    });

    tabHeader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabHeaderItem.forEach((item) => {
                item.classList.remove('tabheader__item_active');
            });
            tabHeaderItem.forEach((item, i) => {
                if (target == item) {
                    tabContentHide(tabContent);
                    tabContentShow(tabContent, i);
                }
            });
            target.classList.add('tabheader__item_active' ,'fade');
            
        }
    });

    tabContentHide(tabContent);
    tabContentShow(tabContent);



});