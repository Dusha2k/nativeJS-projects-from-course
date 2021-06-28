import modals from './Modules/modals';
import sliders from './Modules/sliders';
import forms from './Modules/forms';
import mask from './Modules/mask';
import checkTextInputs from './Modules/checkTextInputs';
import showMoreStyles from './Modules/showMoreStyles';
import calc from './Modules/calc';
import filter from './Modules/filter';
import pictureSize from './Modules/pictureSize';
import accordion from './Modules/accordion';
import burger from './Modules/burger';
import drop from './Modules/drop';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name ="name"]');
    checkTextInputs('[name ="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    drop();
});