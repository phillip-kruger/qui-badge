# qui-badge

The badge UI component is based on the Vaadin themed badge (https://vaadin.com/docs/latest/components/badge), but it's a webcomponent

## Installation

```bash
npm i @qomponent/qui-badge
```

## Usage

```javascript
import 'qui-badge';
```

```html
<div class="cards">
    <qui-card title="Small">
        <div slot="content">
            <div class="cardcontents">
                <qui-badge small><span>Default</span></qui-badge>
                <qui-badge level="success" small><span>Success</span></qui-badge>
                <qui-badge level="warning" small><span>Warning</span></qui-badge>
                <qui-badge level="error" small><span>Error</span></qui-badge>
                <qui-badge level="contrast" small><span>Contrast</span></qui-badge>
                <qui-badge background="pink" color="purple" small><span>Custom colors</span></qui-badge>
            </div>
        </div>
    </qui-card> 
    <qui-card title="Primary">
        <div slot="content">
            <div class="cardcontents">
                <qui-badge primary><span>Default primary</span></qui-badge>
                <qui-badge level="success" primary><span>Success primary</span></qui-badge>
                <qui-badge level="warning" primary><span>Warning primary</span></qui-badge>
                <qui-badge level="error" primary><span>Error primary</span></qui-badge>
                <qui-badge level="contrast" primary><span>Contrast primary</span></qui-badge>
                <qui-badge background="pink" color="purple" primary><span>Custom colors</span></qui-badge>
            </div>
        </div>
    </qui-card>
    <qui-card title="Pill">
        <div slot="content">
            <div class="cardcontents">
                <qui-badge pill><span>Default pill</span></qui-badge>
                <qui-badge level="success" pill><span>Success pill</span></qui-badge>
                <qui-badge level="warning" pill><span>Warning pill</span></qui-badge>
                <qui-badge level="error" pill><span>Error pill</span></qui-badge>
                <qui-badge level="contrast" pill><span>Contrast pill</span></qui-badge>
                <qui-badge background="pink" color="purple" pill><span>Custom colors</span></qui-badge>
            </div>
        </div>
    </qui-card>
    <qui-card title="With icon">
        <div slot="content">            
            <div class="cardcontents">
                <qui-badge text="Default" icon="info-circle">
                    <span>Default icon</span>
                </qui-badge>
                <qui-badge text="Success" level="success" icon="vaadin:check-circle">
                    <span>Success icon</span>
                </qui-badge>
                <qui-badge text="Warning" level="warning" icon="vaadin:warning">
                    <span>Warning icon</span>
                </qui-badge>
                <qui-badge text="Error" level="error" icon="vaadin:exclamation-circle">
                    <span>Error icon</span>
                </qui-badge>
                <qui-badge text="Contrast" level="contrast" icon="vaadin:adjust">
                    <span>Contrast icon</span>
                </qui-badge>
                <qui-badge text="Custom" background="pink" color="purple" icon="vaadin:flag-checkered">
                    <span>Custom colors</span>
                </qui-badge>
            </div>
        </div>
    </qui-card>
    <qui-card title="Icon only">
        <div slot="content">
            <div class="cardcontents">
                <qui-badge icon="vaadin:info-circle"></qui-badge>
                <qui-badge level="success" icon="vaadin:check-circle"></qui-badge>
                <qui-badge level="warning" icon="vaadin:warning"></qui-badge>
                <qui-badge level="error" icon="vaadin:exclamation-circle"></qui-badge>
                <qui-badge level="contrast" icon="vaadin:adjust"></qui-badge>
                <qui-badge level="contrast" background="pink" color="purple" icon="vaadin:flag-checkered"></qui-badge>
            </div>
        </div>
    </qui-card>
    <qui-card title="Clickable">
        <div slot="content">
            <div class="cardcontents">
                <qui-badge clickable @click=${() => this._info()}><span>Default</span></qui-badge>
                <qui-badge clickable level="success" @click=${() => this._success()}><span>Success</span></qui-badge>
                <qui-badge clickable level="warning" @click=${() => this._warning()}><span>Warning</span></qui-badge>
                <qui-badge clickable level="error" @click=${() => this._error()}><span>Error</span></qui-badge>
                <qui-badge clickable level="contrast" @click=${() => this._contrast()}><span>Contrast</span></qui-badge>
                <qui-badge clickable background="pink" color="purple" @click=${() => this._info()}><span>Custom colors</span></qui-badge>
            </div>
        </div>
    </qui-card>
</div>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)