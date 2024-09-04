# qui-badge

The badge UI component is based on the Vaadin themed badge (https://vaadin.com/docs/latest/components/badge), but it's a webcomponent

## Installation

```bash
npm i @qomponent/qui-badge
```

## Usage

```javascript
import '@qomponent/qui-badge';
```

```html
<div class="cards">
    <h3>Tiny</h3>
    <div class="card">
        <qui-badge tiny><span>Default</span></qui-badge>
        <qui-badge level="success" tiny><span>Success</span></qui-badge>
        <qui-badge level="warning" tiny><span>Warning</span></qui-badge>
        <qui-badge level="error" tiny><span>Error</span></qui-badge>
        <qui-badge level="contrast" tiny><span>Contrast</span></qui-badge>
        <qui-badge background="pink" color="purple" tiny><span>Custom colors</span></qui-badge>
    </div>

    <h3>Small</h3>
    <div class="card">
        <qui-badge small><span>Default</span></qui-badge>
        <qui-badge level="success" small><span>Success</span></qui-badge>
        <qui-badge level="warning" small><span>Warning</span></qui-badge>
        <qui-badge level="error" small><span>Error</span></qui-badge>
        <qui-badge level="contrast" small><span>Contrast</span></qui-badge>
        <qui-badge background="pink" color="purple" small><span>Custom colors</span></qui-badge>
    </div>
    
    <h3>Primary</h3>
    <div class="card">
        <qui-badge primary><span>Default primary</span></qui-badge>
        <qui-badge level="success" primary><span>Success primary</span></qui-badge>
        <qui-badge level="warning" primary><span>Warning primary</span></qui-badge>
        <qui-badge level="error" primary><span>Error primary</span></qui-badge>
        <qui-badge level="contrast" primary><span>Contrast primary</span></qui-badge>
        <qui-badge background="pink" color="purple" primary><span>Custom colors</span></qui-badge>
    </div>

    <h3>Pill</h3>
    <div class="card">
        <qui-badge pill><span>Default pill</span></qui-badge>
        <qui-badge level="success" pill><span>Success pill</span></qui-badge>
        <qui-badge level="warning" pill><span>Warning pill</span></qui-badge>
        <qui-badge level="error" pill><span>Error pill</span></qui-badge>
        <qui-badge level="contrast" pill><span>Contrast pill</span></qui-badge>
        <qui-badge background="pink" color="purple" pill><span>Custom colors</span></qui-badge>
    </div>       
    
    <h3>With Icon</h3>
    <div class="card">
        <qui-badge text="Default" icon="circle-info">
            <span>Default icon</span>
        </qui-badge>
        <qui-badge text="Success" level="success" icon="circle-check">
            <span>Success icon</span>
        </qui-badge>
        <qui-badge text="Warning" level="warning" icon="warning">
            <span>Warning icon</span>
        </qui-badge>
        <qui-badge text="Error" level="error" icon="circle-exclamation">
            <span>Error icon</span>
        </qui-badge>
        <qui-badge text="Contrast" level="contrast" icon="adjust">
            <span>Contrast icon</span>
        </qui-badge>
        <qui-badge text="Custom" background="pink" color="purple" icon="flag-checkered">
            <span>Custom colors</span>
        </qui-badge>
    </div>

    <h3>Icon only</h3>
    <div class="card">
        <qui-badge icon="circle-info"></qui-badge>
        <qui-badge level="success" icon="circle-check"></qui-badge>
        <qui-badge level="warning" icon="warning"></qui-badge>
        <qui-badge level="error" icon="circle-exclamation"></qui-badge>
        <qui-badge level="contrast" icon="adjust"></qui-badge>
        <qui-badge level="contrast" background="pink" color="purple" icon="flag-checkered"></qui-badge>
    </div>

    <h3>Clickable</h3>
    <div class="card">
        <qui-badge clickable><span>Default</span></qui-badge>
        <qui-badge clickable level="success"><span>Success</span></qui-badge>
        <qui-badge clickable level="warning"><span>Warning</span></qui-badge>
        <qui-badge clickable level="error"><span>Error</span></qui-badge>
        <qui-badge clickable level="contrast"><span>Contrast</span></qui-badge>
        <qui-badge clickable background="pink" color="purple"><span>Custom colors</span></qui-badge>
    </div>
    
</div>
```

## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)