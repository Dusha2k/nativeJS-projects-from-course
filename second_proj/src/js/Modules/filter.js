const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    function getIt(selector) {
        let btnName = menu.querySelector(selector);
        let markName = wrapper.querySelectorAll(selector);
        if(markName.length == 0) 
        {
            markName = "";
        }
        btnName.addEventListener('click', () => {
            typeFilter(markName);
        });
    }

    getIt('.all');
    getIt('.lovers');
    getIt('.chef');
    getIt('.girl');
    getIt('.guy');
    getIt('.grandmother');
    getIt('.granddad');
    
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');

        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        }
        else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;