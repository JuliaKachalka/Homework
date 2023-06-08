const tooltip = selector => {
    const elems = document.querySelectorAll(selector);

    if (!elems || elems.lenght === 0) return;

    const tooltipHandler = elem => {
        const createTooltip = event => {
            let target = event.target;
            console.log(target);
            let text = target.dataset.text;
            if (!text) return;

            let tooltipElem = document.createElement('div');
            tooltipElem.classList.add('tooltip_content');
            tooltipElem.innerText = text;
            tooltipElem.style.top = target.offsetHeight + 10 + 'px';

            target.append(tooltipElem);
        }

        const deleteTooltip = event => {
            let target = event.target;
            let children = target.children;

            [...children].forEach(elem => {
                if (elem.classList.contains('tooltip_content')) {
                    elem.remove();
                }
            });
        }


        elem.addEventListener('mouseout', deleteTooltip);
        elem.addEventListener('mouseover', createTooltip);

    }

    [...elems].forEach(elem => tooltipHandler(elem));
}

tooltip('.tooltip')
