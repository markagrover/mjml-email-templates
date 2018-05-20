import { registerDependencies } from "mjml-validator";
import { BodyComponent } from "mjml-core";
// Aquarian Pools Logo
registerDependencies({
  "mj-column": ["mj-logo"],
  "mj-logo": []
});

export default class MjLogo extends BodyComponent {
  static endingTag = true;

  render() {
    return this
      .renderMJML(`
        <mj-column>
            <mj-image width='100px' src="https://ci5.googleusercontent.com/proxy/SXFM9Y2UqfMQYRKhcfvvnnIeMvx8iKP062pMqIlNrTVcvVOwS3d8wyZl5VoeCGxDjOvOgS8=s0-d-e1-ft#https://i.imgur.com/563AlBs.png"></mj-image>  
            <mj-image align="center" width='400px' src="https://i.imgur.com/toZUrYj.png"></mj-image>  
        </mj-column>
        
`);
  }
}
