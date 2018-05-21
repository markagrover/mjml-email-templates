import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';
import { colors } from '../config/colors';

registerDependencies({
    'mj-column': ['mj-included-with-project'],
    'mj-included-with-project':[]
});

export default class MjIncludedWithProject extends BodyComponent {
    render(){
        return ` <div class="includes-wrapper" style="letter-spacing: 1px; line-height: 22px;
            
            font-size:16px;
            text-align: center;">
            ${this.renderMJML(`<mj-text align="center" font-size="24px" color="${colors.leadFont}">Installation Includes</mj-text>  `)}
            <div>
                <ul style="list-style: none;
            margin-top: 10px;" class="includes-list">
                    <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="22px" letter-spacing="1px" align="center" font-size="16px">Site Excavation (within 10" slope)</mj-text>`)}</li>
                    <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="22px" letter-spacing="1px" align="center" font-size="16px">Pool Installation</mj-text>`)}</li>
                        <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="22px" letter-spacing="1px" align="center" font-size="16px">Liner Installation</mj-text>`)}</li>
                            <li class="includes-list-item">${this.renderMJML(`<mj-text line-height="22px" letter-spacing="1px" align="center" font-size="16px">Filter and Pump Installation</mj-text>`)}</li>
                            </ul>
                        </div>
                    </div>`;
    }
}