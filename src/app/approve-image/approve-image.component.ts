import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';

@Component({
  selector: 'app-approve-image',
  templateUrl: './approve-image.component.html',
  styleUrls: ['./approve-image.component.scss']
})
export class ApproveImageComponent implements OnInit {
  image: Image;
  constructor() {
    this.image = {
      filename: 'ggg.jpg',
      id: 'ex-xf-xffasasdx',
      data: 'data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmNwAAZjcAAGY3AABmNwAAZjcAAGY3AABmOAAAZzgAAF4tAABVIgAAYC8ACnFFGFGGYDmNmnpaurCWfda9qJPltp6G5qqPdNefgGK7iWQ9j3FEFlNfLgANVSIAAF4tAABnOAAAZjcAAGY3AABmNwAAZjcAAGY3AABmNwAAZjcAAGY3AABmNwAAZjcAAGY3AABmNwAAZzkAAGIyAABWIwAAYjIBHoJbNYu2nonp3NDG//Tv7P/+/f3/8+/r//Dr5/////////////bz8P/t5uH/4NbN/7ymk+yCWzWPYDAAIVYjAABiMgAAZzkAAGY3AABmNwAAZjcAAGY3AABmNwAAZjcAAGY3AABmNwAAZjcAAGg5AABdKwAAWCQAAHpQKHm8ppH58evm//z7+f/18u//2c3A/+ni2v/p4tv/u6eQ/+DWy///////2c3A/93TyP/49vP/6eHa//v59//Crpz8eU8nflcjAABdKwAAaDkAAGY3AABmNwAAZjcAAGY3AABmNwAAZjcAAGY3AABoOQAAWigAAFwqABCXdlTA49nR///////w7Of/wKyX/9rOwv+0nYX/3NHF/+Xc1P++qZP/8u7p///////Cr5v/2s7C/72nkf/ZzcD/6eLa/+3o4v/p4dn/m3tbxlonABZbKAAAaDkAAGY3AABmNwAAZjcAAGY3AABmNwAAaDoAAFonAABdKwAaq49y4v/+///08e3/0MGx//Pv6/+/q5b/7Obf/+ni2//azsL/xrSh/8Kvm//VyLr/08a4/9XIuv/o4dr/4NbL/9bJvP/GtaL//Pz7///////v6ub/rZF16FwqACBaKAAAaDoAAGY3AABmNwAAZjcAAGc5AABdKwAAWykAC6yRc+T28vH/3tTJ//Pv6//Fs5//9vPw//f08f++qpX/yLel/9nNwP/r5d7/8/Ds/+vl3//k3NT/3dLI/8e2o//FtKH/3dPH//bz7//c0cb/xrSh/+/q5P//////rZJ16VkmAA9dLAAAZzkAAGY3AABmNwAAYzMAAFckAACVc03D8Orn///////MvKv/vaiT//38+//JuKX/vaqU/9/Vy//7+fj/8Ovm/9vQxP/Ov67/zr6u/9rOwv/v6eT/+/r5/+HYzv/BrZn/zLyr/9vQxP/e08j/9fPv///////39PL/l3VPylYiAABjMwAAZjcAAGc5AABWIwAAeE0bbOng2//18u7/spqB/9jNwP/g18z/xrWi/8WzoP//////4tnQ/5h3Vf9xRRX/ZzcE/1wpAP9cKQD/ZjcD/3BDE/+ScUz/18q9///////EsqD/zb2t//bz7//Xy77/pIhr/+Pa0P/z7uz/dUoYd1YjAABnOQAAXy4AAGAvAAu2nof+/////9PFtv+sknb/4djO/9DBsf/Nvq3//////6uRdv9dKwD/YzMA/3lPIf9qOwn/e1El/3pQJP9sPg3/ckYX/18tAP9rPQz/n4Ji///////QwrP/xrWi/9XHuf+0nIX/4tnP//f08f+9p5P/Xy4AEF8uAABWIgAAflUmf/Hs6P/o4dn/s5uB/+Pa0f/l3tX/xbOg//////+YeFb/SRAA/49sRv+ef13/ZDMD/5d3VP/o4dr/5+DY/5BtSP98VCj/tZ6F/6ySdv9WIQD/i2dA///////Nvq3/1Me5/+zm3//EsZ7/8u7q///+//97UiKKViIAAF8tAACwlXzt9/Ty/9rPwv/Txbb/5d7V/8i3pf/8/Pv/qIxv/2o7Cf+IYjr/mntZ/2QzAv9yRRn//////////////////fz7/4diOf+Pa0f/nHxb/41pQv9RGQD/qIxu///////Esp7/1sm8/+Xd1P/h2M7/8u7r/7WdhfNdKwAEbUAKPtrNw//r5N3/wa2a/+fg2P/Nvq3/5+DY/9DBsf9zRxj/nX5d/6eMb/+0nIP/ooVp/72okf//////+Pb0/+ni2///////spqB/5h4Vv+wl3z/r5Z8/5RzT/9RGgD/3tTJ//Tw7f/FtKH/2s/D/9HDs//49vT/3tPK/2s9B0d/VyqB8+7r/+3n4f/Crpz/4dfN/9nOwv/GtKH/iWQ9/7mkjP/ArZj/az0O/6eMb///////7unk/6eLb/+qj3T/s5qB/7mii//6+ff//////66Vef99VCn/uaSN/5FuTP+df1//9/Ty/8u7qf/c0cX/8+/s//f18v/t5+P/gVktipVzUK349fP/2Mu+/8Kvmv/ZzsL/18u+/7CXff+WdVP/4NfN/8i3pP9zRxf/TRYA/6+We//o4dr/x7ak/9/Vy//QwbP/p4pv/829rv+3oIj/VyIA/2U2Av+fgGD/v6qU/6iMb//e1Mj/1sq9/8m4pv+3oYj/1Me5//39/f+ZeFa3pIdp0P/////u6OP/3tPI/8/Bsv/SxLX/uqWO/8Oxnf+tk3T/ZTQA/2w+Df+fgWH/spqB/7GXf////////////6qPc/+Uck//nX5d/8W0oP+jh2j/ZjcE/3JGF/+vlnr/r5Z6/9PFtv/QwbL/0cO0//v5+P///////////6WJa9Svlnvn/Pv6////////////3tTJ/8u8q//Uxrf/s5yB/18tAP9nOAX/w7Cc///////l3dX/cEIV/5d2Vf+vlXz/rpR5/6KFZv+WdVL/6OHa///////It6X/ckYW/3tRJ/+Yd1T/zb2s/82+rv/c0cX/////////////////r5Z75LCWfOb8+/r////////////Xyr3/3NHG/+DVy/9tPxT/ckcg/9vQxP///////////93Sx/+XdlX/k29N/6uQdP/BrZr/uaON/6uReP/f1cv////////////j29L/hF03/1MdAP/Ov67/5NzT/9TGuP////////////////+vlXvkooVmz/38/P///////////97Uyf/i2tD/39XK/2o7D//l3dH/////////////////rpV5/39XLf+WdVL/l3ZS/5RzT/+OakT/e1In/6WJav/7+vn////////////v6uT/dUkg/9bKvP/p49z/18q9/////////////////6WHatOSb0qs/fz9/+3n4f/Rw7X/29DF/9HDs//x7Of/1Mi5////////////7efh/4lkPf+Vck//jWpC/4BYLv9uQA//bT8O/31UKP+LZz7/mHdV/4NcM//e08n////////////bz8L/8u3p/9LEtv/bz8P/5dzU/+vl3//7+fn/mHdUtoBXK3/u5+P/4NbM/8CsmP/f1Mr/x7ak//Tx7f////////////r59/+MaEL/m3tZ/8y9rP+Oakr/ooRl/8CtmP+5o4z/pops/4pmRf/Crpr/pYlr/4BZMf/x7ej////////////6+Pb/zLyr/9zRxv+tk3n/1ci5//Dq5/+CWzCIbT8JO9XHuv/6+Pf/8u7q//z6+f/Nvq7/yLek////////////qI1y/39XLP/c0cb/f1cs/3JGG/9uQA//4trQ//////+ihWb/YjEA/35W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',
      isApproved: false,
      isPending: true,
      rejectionReason: ''
    };
  }

  ngOnInit() {
  }

  onImageAdjudication(isApproved: boolean) {
    this.image.isApproved = isApproved;
    this.image.isPending = false;
  }

  onRejectionChange() {
    console.log(this.image);
  }
}
