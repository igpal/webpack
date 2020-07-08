import * as $ from 'jquery';

function createAnalytics () {
    let counter = 0;
    destroyed = false;    

    const listener = () => counter++;
    $(document).on('click', listener);

    return {
        destroy () {
            $(document).off('click', listener);
            destroyed = true;
        },
        getClicks () {
            if (destroyed) {
                return `Analytics is destroyed. Total clics = ${counter} `;
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();