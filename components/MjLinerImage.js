import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['mj-liner-image'],
    'mj-liner-image':[]
});

export default class MjLinerImage extends BodyComponent {
    static endingTag = true;
    // attributes url , name
    renderImage(){
        return this.renderMJML()
    }
    renderLinerImage(){
        return `
            <mj-table>
                <tr>
                    
                    <th>
                        ${this.getAttribute('name')}
                    </th>
                    
                </tr>
                <tr>
                    
                    <td>
                        <image src=${this.getAttribute('image-url')}></image>
                    </td>
                    
                </tr>
            </mj-table>
        `;
    }

    render(){
        return this.renderMJML(`${this.renderLinerImage()}`);
    }
}
