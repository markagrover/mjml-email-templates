import { registerDependencies } from "mjml-validator";
import { BodyComponent } from "mjml-core";
import {colors} from '../config/colors';

registerDependencies({
    "mj-column": ["mj-wall-foam"],
    "mj-wall-foam": []
});

export default class MjWallFoam extends BodyComponent {
    static endingTag = true;
    renderWallFoam(){
        return this.renderMJML(
        `
            <mj-image-text font-size="16px" image-src="https://ci3.googleusercontent.com/proxy/FPA8kp7A33WFECu32glkD2lGaOqKbFTL6u2sMoecR5lN0mtvqe8_0DuQksKuH5cCEy1o5KPw3ymSsXCjBdaCcGRGuLQgcs3wmIVK8w=s0-d-e1-ft#http://aquarianpoolandspa.com/ag_supplies/wallfoam.jpg">
                <div style="letter-spacing: 1px; line-height: 22px;">
                    <p>
                        Even if your wall is not rusty you should consider adding a wall pad to prevent the rusting from destroying your pool wall in the future. Not only does the foam pad prevent rusting. 
                    </p>
                    <p>
                        It also protects your liner from rocks that hit the pool wall and splinter the wall. It's common for landscapers or homeowners to accidentally shoot a rock at the pool wall from the lawnmower. 
                    </p>
                    <p>
                        Most times the rock doesn't penetrate the steal, but it does, however, create a small sharp split in the wall which will cause a liner to spring a leak sooner than later. 
                    </p>
                    <p>
                        Having a wall pad is one of the best ways to keep your pool wall and liner safe. If your pool has rust or pin holes in the wall then the Pad Must be installed.
                    </p>
                </div>
            </mj-image-text>
        `);
    }

    render() {
        return `
        ${this.renderMJML(`<mj-text font-size="24px" color="${colors.leadFont}">Foam Wall Padding</mj-text>`)}
        ${this.renderWallFoam()}`;
    }
}
