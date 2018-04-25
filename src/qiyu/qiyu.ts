let YSF = "ysf";

export class Qiyu {
  public static get initialized() {
    return typeof window[YSF] != "undefined";
  };

  public static ready(): Promise<Qiyu> {
    return new Promise<any>(resolve => {
      let loop = (ms: number) => {
        if (Qiyu.initialized) {
          resolve(Qiyu)
        } else {
          setTimeout(() => loop(ms), ms)
        }
      };
      loop(100);
    })
  }

  public static url() {
    return Qiyu.ysf().url();
  }

  /**
   *
   * @param {QiyuConfig} config
   */

  /*  public static config(config: QiyuConfig) {
      return new Promise(resolve => {
        (config as any).success = () => {
          resolve(true)
        };
        (config as any).error = () => {
          resolve(false)
        };
        ysf.on({
          onload: () => ysf.config(config)
        })
      });
    }*/

  private static ysf(): any {
    return window[YSF];
  }
}

export interface QiyuConfig {
  uid: string;
  name?: string;
  email?: string;
  mobile?: string;
  // success?: () => void;
  // error?: () => void;
}
