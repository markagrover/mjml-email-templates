import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';
import { colors } from '../config/colors';

registerDependencies({
    'mj-column': ['mj-included-with-liner'],
    'mj-included-with-liner':[]
});

export default class MjIncludedWithLiner extends BodyComponent {
    render(){
        return ` <div class="includes-wrapper" style="letter-spacing: 1px; line-height: 22px;
            
            font-size:16px;
            text-align: center;">
            
            <div>
            ${this.renderMJML(`
    <mj-text font-size="24px" color="${colors.leadFont}
    ">Installation Includes</mj-text>`)}
                    <ul style="list-style: none;
                margin-top: 10px;" class="includes-list">
                        <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="28px" letter-spacing="1px" font-size="16px">Removal & Disposal Of Liner</mj-text>`)}</li>
                    <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="28px" letter-spacing="1px" font-size="16px">Pool Inspection For Damage</mj-text>`)}</li>
                        <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="28px" letter-spacing="1px" font-size="16px">Re-surfacing Bottom Of Pool</mj-text>`)}</li>
                            <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="28px" letter-spacing="1px" font-size="16px">Installation Of New Liner</mj-text>`)}</li>
                            <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="28px" letter-spacing="1px" font-size="16px">Filter Hookup</mj-text>`)}</li>
                            </ul>
                        </div>
                    </div>`;
    }
}
