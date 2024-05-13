import { LitElement, html, css} from 'lit';
import '@qomponent/qui-icons';

/**
 * Badge UI Component based on the vaadin theme one
 * see https://vaadin.com/docs/latest/components/badge
 */
export class QuiBadge extends LitElement {
    static styles = css`
        [theme~="badge"] {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 0.4em calc(0.5em + var(--lumo-border-radius-s, 0.25em) / 4);
            color: var(--lumo-primary-text-color, hsla(211, 63%, 54%, 1.0));
            background-color: var(--lumo-primary-color-10pct, hsla(214, 100%, 60%, 0.13));
            border-radius: var(--lumo-border-radius-s, 0.25em);
            font-family: var(--lumo-font-family, "Open Sans", sans-serif);
            font-size: var(--lumo-font-size-s, 0.875rem);
            line-height: 1;
            font-weight: 500;
            text-transform: initial;
            letter-spacing: initial;
            min-width: calc(var (--lumo-line-height-xs, 1.25) * 1em + 0.45em);
        }
        [theme~="success"] {
            color: var(--lumo-success-text-color, hsla(145, 85%, 25%, 1.0));
            background-color: var(--lumo-success-color-10pct, hsla(145, 72%, 31%, 0.1));
        }
        [theme~="error"] {
            color: var(--lumo-error-text-color, hsla(3, 89%, 42%, 1.0));
            background-color: var(--lumo-error-color-10pct, hsla(3, 85%, 49%, 0.1));
        }
        [theme~="warning"] {
            color: var(--lumo-warning-text-color, hsla(30, 89%, 42%, 1.0));
            background-color: var(--lumo-warning-color-10pct, hsla(30, 100%, 50%, 0.1));
        }
        [theme~="contrast"] {
            color: var(--lumo-contrast-80pct, hsla(214, 41%, 17%, 0.83));
            background-color: var(--lumo-contrast-5pct, hsla(214, 61%, 25%, 0.05));
        }
        [theme~="small"] {
            font-size: var(--lumo-font-size-xxs, 0.75rem);
            line-height: 1;
        }
        [theme~="tiny"] {
            font-size: var(--lumo-font-size-xxs, 0.75rem);
            line-height: 1;
            padding: 0.2em calc(0.2em + var(--lumo-border-radius-s, 0.25em) / 4);
        }
        [theme~="primary"] {
            color: var(--lumo-primary-contrast-color, hsla(0, 100%, 100%, 1.0));
            background-color: var(--lumo-primary-color, hsla(211, 63%, 54%, 1.0));
        }
        [theme~="successprimary"] {
            color: var(--lumo-success-contrast-color, hsla(0, 100%, 100%, 1.0));
            background-color: var(--lumo-success-color, hsla(145, 72%, 30%, 1.0));
        }
        [theme~="warningprimary"] {
            color: var(--lumo-warning-contrast-color, hsla(0, 100%, 100%, 1.0));
            background-color: var(--lumo-warning-color, hsla(30, 100%, 50%, 1.0));
        }
        [theme~="errorprimary"] {
            color: var(--lumo-error-contrast-color, hsla(0, 100%, 100%, 1.0));
            background-color: var(--lumo-error-color, hsla(3, 85%, 48%, 1.0));
        }
        [theme~="contrastprimary"] {
            color: var(--lumo-base-color, hsla(0, 100%, 100%, 1.0));
            background-color: var(--lumo-contrast, hsla(214, 35%, 15%, 1.0));
        }
        [theme~="pill"] {
            --lumo-border-radius-s: 1em;
        }
    `;

    static properties = {
        background: {type: String},
        color: {type: String},
        icon: {type: String},
        level: {type: String},
        small: {type: Boolean},
        tiny: {type: Boolean},
        primary: {type: Boolean},
        pill: {type: Boolean},
        clickable: {type: Boolean},
        _theme: {attribute: false},
        _style: {attribute: false},
    };

    constructor(){
        super();
        this.icon = null;
        this.level = null;
        this.background = null;
        this.color = null;
        this.small = false;
        this.primary = false;
        this.pill = false;
        this.clickable = false;
        
        this._theme = "badge";
        this._style = "";
    }

    connectedCallback() {
        super.connectedCallback()
        
        if(this.level){
            this._theme = this._theme + " " + this.level;
        }
        if(this.primary){
            if(this.level){
                this._theme = this._theme + "primary";
            }else{
                this._theme = this._theme + " primary";
            }
        }
        
        if(this.small && !this.tiny){
            this._theme = this._theme + " small";
        }
        if(this.tiny){
            this._theme = this._theme + " tiny";
        }
        
        if(this.pill){
            this._theme = this._theme + " pill";
        }
        
        if(this.background){
            this._style = this._style + "background: " + this.background + ";";
        }
        if(this.color){
            this._style = this._style + "color: " + this.color + ";";
        }
        if(this.clickable){
            this._style = this._style + "cursor: pointer";
        }
      }
      
    render() {
        return html`<span theme='${this._theme}' style='${this._style}'>
                ${this._renderIcon()}
                <slot></slot>
            </span>`;
    }

    _renderIcon(){
        if(this.icon){
            return html`<fas-icon icon="${this.icon}" size="tiny" style='padding: var(--lumo-space-xs, 0.25rem);'></fas-icon>`;
        }
    }

}
customElements.define('qui-badge', QuiBadge);