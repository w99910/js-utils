import {error, info, success, warning} from '../assets/icons';
import anime from 'animejs/lib/anime.es.js';

let instance;

export default class Toaster {
    protected element: HTMLElement;
    protected messageElement: HTMLElement;
    protected iconElement: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        instance = this;
        this.prepareToast();
    }

    protected setStylesToParent() {
        this.element.style.position = 'fixed';
        this.element.style.top = '2vh';
        this.element.style.right = '1vw';
        this.element.style.zIndex = '9999';
        this.element.style.borderRadius = '5px';
        this.element.style.padding = '10px';
        this.element.style.transform = 'translateX(30%)'
        this.element.style.opacity = '0';
        this.element.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        this.element.style.display = 'flex';
        this.element.style.alignItems = 'center'
        this.element.style.color = 'white';
        this.element.style.border = '0.2px solid white'
    }

    protected prepareIconElement() {
        this.iconElement = document.createElement('div');
        this.iconElement.style.padding = '5px';
        this.iconElement.style.width = '2rem';
        this.iconElement.style.height = '2rem';
        this.element.appendChild(this.iconElement);
    }

    protected prepareMessageElement() {
        this.messageElement = document.createElement('div');
        this.messageElement.style.padding = '5px';
        this.element.appendChild(this.messageElement);
    }

    protected prepareToast() {
        this.setStylesToParent();
        this.prepareIconElement();
        this.prepareMessageElement();
    }

    protected appendRelatedIcon(type) {
        let icon;
        let bgColor;
        let textColor;
        switch (type) {
            case 'success':
                icon = success;
                bgColor = '#57cc99';
                textColor = '#2a2a2a';
                break;
            case 'warning':
                icon = warning;
                bgColor = '#ffd166';
                textColor = '#1e1e1e';
                break;
            case 'error':
                icon = error;
                bgColor = '#e56b6f';
                textColor = '#1c1c1c';
                break;
            default:
                icon = info;
                bgColor = '#4361ee';
                textColor = '#ffffff';
                break;
        }
        this.element.style.backgroundColor = bgColor;
        this.element.style.color = textColor;
        this.iconElement.innerHTML = icon;
    }

    static toast(message, type, duration = 2000) {
        if (!instance) {
            throw new Error('Toaster not initialized');
        }
        instance.messageElement.innerText = message;
        instance.appendRelatedIcon(type);
        anime({
            targets: instance.element,
            translateX: 0,
            opacity: 1,
            easing: 'easeOutExpo',
            complete: function (anim) {
                anime({
                    targets: instance.element,
                    translateX: '30%',
                    easing: 'easeOutExpo',
                    opacity: 0,
                    duration: 800,
                    delay: duration // convert to seconds
                });
            }
        });
    }
}
