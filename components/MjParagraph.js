import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    // Tell the validator which tags are allowed as our component's parent
    'mj-hero': ['mj-paragraph'],
    'mj-column': ['mj-paragraph'],
    // Tell the validator which tags are allowed as our component's children
    'mj-paragraph': []
})

export default class MjParagraph extends BodyComponent {
    
    static allowedAttributes = {
        'color' : 'color',
        'bg-color': 'color',
        'font-size': 'unit(px)'
    }

    static defaultAttributes = {
        'color': 'black',
        'bg-color': 'white',
        'font-size': '16px'
    }

    getStyles(){
        return {
            table: {
                'background-color': this.getAttribute('bg-color'),
                'border': '1px solid black',


            },
            paragraph: {
                'bg-color': this.getAttribute('bg-color'),
                 'color': this.getAttribute('color'),
                'font-size': this.getAttribute('font-size'),

            }
        };
    }

    render(){
        return `
            <table ${this.htmlAttributes({
            style: 'table'
        })}>
            <tr ${this.htmlAttributes({
            style: 'paragraph'
        })}>
            <td>
            &nbsp;
</td>
            <td>
            ${this.getContent()}
</td>
<td>
            &nbsp;
</td>
            
</tr>
</table>
        `
    }
}
