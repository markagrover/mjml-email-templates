import { registerDependencies } from "mjml-validator";
import { BodyComponent } from "mjml-core";
import {colors} from '../config/colors';

registerDependencies({
  "mj-column": ["mj-liners"],
  "mj-liners": []
});

export default class MjLiners extends BodyComponent {
  static endingTag = true;
  renderLiners() {
    return `
    <div style="text-align:center">                 
        <div style="display:inline-block;margin: 5px 5px 0 5px;overflow:hidden"><img src="https://ci6.googleusercontent.com/proxy/MgfLQaTjji_Pa3cai4q2t-Jk4_UOqyyl21s7XfRhC0jRT5wShBhhKAz794bsuahzqHCcBe9cEJPGnn6wPIN3XKzt9IG_DAyKUt6tIhg=s0-d-e1-ft#http://aquarianpoolandspa.com/liner-images/capri_ub.png" alt="capri" width="100px" height="200px" class="CToWUd"></div>
        <div style="display:inline-block;margin: 5px 5px 0 5px;overflow:hidden"><img src="https://ci5.googleusercontent.com/proxy/ljsstyUcJbYza6ChdHGxzKHtoYCCD_pWN9QSm-71KnKmT9Q-gC3bQV8tkh1Tnq467mayG746hp3S2Uy5PjVvmVk2_peUWGzTxykQajw=s0-d-e1-ft#http://aquarianpoolandspa.com/liner-images/lucia_ub.png" alt="lucia_ub" width="100px" height="200px" class="CToWUd"></div>
        <div style="display:inline-block;margin: 5px 5px 0 5px;overflow:hidden"><img src="https://ci5.googleusercontent.com/proxy/KpbcpzJ7gF7_RO8YdwvWmoGediHc_51dSntv2J5ud98Y907iIPuJbMxwMx5h0MwZAMDDBqGkMtSqiZ4_RM1sDUhbzF4ztvtq5pfNfhBGkA=s0-d-e1-ft#http://aquarianpoolandspa.com/liner-images/boulder_ub.png" alt="boulder_ub" width="100px" height="200px" class="CToWUd"></div>
        <div style="display:inline-block;margin: 5px 5px 0 5px;overflow:hidden"><img src="https://ci3.googleusercontent.com/proxy/WcXYxciT8NPCqkQOzLP3VSLRmoFCYf8dSv62L9R84x5wjJJP-3ONDGikA8Y278yAJ573YdVBdLxAhPRAnUh5D6qJZMVJaMSeoPXzRB8juw2-yg=s0-d-e1-ft#http://aquarianpoolandspa.com/liner-images/southbeach_ub.png" alt="southbeach_ub" width="100px" height="200px" class="CToWUd"></div>
        <div style="display:inline-block;margin: 5px 5px 0 5px;overflow:hidden"><img src="https://ci6.googleusercontent.com/proxy/wn-DX-M2UU4SyzAUhmdqUPSjyvfY9iTHTrq8umPZu2CJODn8Qe2TcmlqMRt3KtJktyMTGt279Mexr_xTefzTosJd4fW3GViFsfzFdEJ1Aig=s0-d-e1-ft#http://aquarianpoolandspa.com/liner-images/aquarium_ub.png" alt="aquarium_ub" width="100px" height="200px" class="CToWUd"></div>
    </div>
    `;
  }

  render() {
    return `
            <div>            
              ${this.renderMJML(
                `<mj-section>
                    <mj-text font-size="24px" color=${colors.leadFont} align="center">${this.getContent()}</mj-text>
                    <mj-spacer height="20px"/>
                  </mj-section>
                `
              )}
              ${this.renderLiners()}       
            </div>
        `;
  }
}
