import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'cuculus-roadmap',
      region: 'ap-northeast-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, 'site', {
        customDomain: {
          domainName:
            stack.stage == 'prod'
              ? 'about.cuculus.jp'
              : `${stack.stage}.about.cuculus.jp`,
          hostedZone: 'cuculus.jp',
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
