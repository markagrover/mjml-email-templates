import { registerDependencies } from "mjml-validator";
import { BodyComponent } from 'mjml-core';
import { colors } from '../config/colors';
registerDependencies({
    'mj-column': ['mj-pricing-table-wall-repairs'],
    'mj-pricing-table-wall-repairs':[]
});

export default class MjPricingTableWallRepairs extends BodyComponent {
    static endingTag = true;

    render(){
        return this.renderMJML(`
                                <mj-section>
                                    <mj-text align="center" font-size="22px" color="${colors.leadFont}">Project Cost & Optional Supplies</mj-text>
                                <mj-spacer height="20px"/>
                                <mj-table class="table" align="center" cellspacing="0" >
                                    <tr class="table-head-row">
                                        <th class="table-head-cell">
                                            Liner Install
                                        </th>
    
                                        <th class="table-head-cell">
                                            Pool Liner
                                        </th>
    
                                        <th class="table-head-cell">
                                            Wall Repairs
                                        </th>
    
                                        <!--<th class="table-head-cell">-->
                                            <!--Wall Foam-->
                                            <!--(Optional)-->
    <!---->
                                        <!--</th>-->
    
                                        <th class="table-head-cell">
                                            Bottom Padding
                                            (Optional)
    
                                        </th>
                                    </tr>
                                    <tr class="table-data-row">
                                        <td class="table-data-cell">
                                            $800
                                        </td>
    
                                        <td class="table-data-cell">
                                            $459
                                        </td>
    
                                        <td class="table-data-cell">
                                            $350
                                        </td>
    
                                        <!--<td class="table-data-cell">-->
                                            <!--$100.00-->
                                        <!--</td>-->
    
                                        <td class="table-data-cell">
                                            $270
                                        </td>
                                    </tr>
                                </mj-table> 
                                </mj-section>
                                                      
        `);
    }
}
