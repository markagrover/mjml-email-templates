import { registerDependencies } from "mjml-validator";
import { BodyComponent } from "mjml-core";
import {colors} from '../config/colors';

registerDependencies({
    "mj-column": ["mj-bottom-pad"],
    "mj-bottom-pad": []
});

export default class MjBottomPad extends BodyComponent {
    static endingTag = true;
    renderWallFoam(){
        return this.renderMJML(
        `
            <mj-image-text font-size="16px" image-width="200px" image-src="https://ci6.googleusercontent.com/proxy/ce0D1UvNFum8raBEq2Vq_Hptox7xep6X1ttHg5U5gYmR3zx_SX4IxgOt49gra4mOde9pru1pMFJDlktt-WfzoVg6O8_AUW6lSDg6AFk5=s0-d-e1-ft#http://aquarianpoolandspa.com/ag_supplies/bottompad.jpeg">
                <div style="letter-spacing: 1px; line-height: 22px;">
                    <p>
                        The bottom pad is a thick polypropylene fabric that will protect your liner from Roots, Rocks, Glass, Metal Straps (oval pools) and more.
                    </p>
                    <p>
                        This material is installed before the liner. When installed properly, the bottom pad will make walking around your pool a comfort. 
                    </p>
                    
                </div>
            </mj-image-text>
        `);
    }

    render() {
        return `
        ${this.renderMJML(`<mj-text font-size="24px" color="${colors.leadFont}">Protective Bottom Pad</mj-text>`)}
        ${this.renderWallFoam()}`;
    }
}
