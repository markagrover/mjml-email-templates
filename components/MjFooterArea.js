import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-section': ['mj-footer-area'],
    'mj-footer-area': ['mj-address']
});

export default class MjFooterArea extends BodyComponent {
    renderAddress(){
        return `
            <mj-column padding="10px">
                <mj-raw><address>
                <h4>Mark A Grover</h4>
                <h3>Aquarian Pool And Spa</h3>
                &nbsp;
                <p>11 Franklin St</p>
                <p>Medway Ma, 02053</p>
                <p><a href="tel:1-401-332-9183">401-332-9183</a></p>
                <p><a href="mailto:aquarianpoolandspa@gmail.com" target="_top">aquarianpoolandspa@gmail.com</a></p>
                <p><a href="http://aquarianpoolandspa.com">aquarianpoolandspa.com</a></p>
                
                
                
</address></mj-raw>
                
            </mj-column>
        `;
    }
    renderSocialLinks(){
        return `
            <mj-column>
                <mj-social font-size="20px" icon-size="20px" mode="horizontal">
                    <mj-social-element name="facebook" href="http://aquarianpoolandspa.com" background-color="blue">
                    </mj-social-element>
                    <mj-social-element name="google" href="http://aquarianpoolandspa.com" background-color="red">
                    </mj-social-element>
                    
                </mj-social>
            </mj-column>
        `;
    }
    render(){
        const content = [this.renderAddress(), this.renderSocialLinks()];
        return this.renderMJML(`
            <mj-group background-color="#ccc"}>
                ${content}
            </mj-group>
        `);

    }
}
