import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['mj-nav'],
    'mj-nav': []
});

export default class MjNav extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'align': 'enum(left,right,center)'
    };

    static defaultAttributes ={
        align: 'right'
    };

    render(){
        return this.renderMJML(`
            <mj-navbar align={${this.getAttribute('align')} base-url="http://aquarianpoolandspa.com" hamburger="hamburger" ico-color="#0081C3">
                <mj-navbar-link font-size="18px" href="/" color="#0081C3">HOME</mj-navbar-link>
                <mj-navbar-link font-size="18px" href="/portfolio" color="#0081C3">Portfolio</mj-navbar-link>
                <mj-navbar-link font-size="18px" href="/warranty" color="#0081C3">Warranty</mj-navbar-link>
            </mj-navbar>
        `)
    }

}
