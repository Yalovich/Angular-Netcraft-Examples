export default class DomManager
{
    /**
     * Select single element using query selector
     * @param selector
     * @return {Element}
     */
    elm(selector: string): Element
    {
        return document.querySelector(selector);
    }

    /**
     *
     * @param parent
     * @param html
     */
    addChild(parentSelector: string, html: string): Element
    {
        let parent = this.elm(parentSelector);
        parent.appendChild(document.createRange().createContextualFragment(html));

        return parent;
    }

    /**
     * return input element
     * @param selector
     * @return {HTMLInputElement}
     */
    inputElm(selector: string): HTMLInputElement
    {
        return <HTMLInputElement>document.querySelector(selector);
    }
}
