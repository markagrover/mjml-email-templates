import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['mj-address'],
    'mj-address':[]
});

export default class MjAddress extends BodyComponent {
    static endingTag = true;

    render(){
        return `
            <address>
                <h4>11 Franklin St</h4>
                <h4>Medway Ma, 02053</h4>
            </address>
        `;
    }
}
