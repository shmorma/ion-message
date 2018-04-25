var YSF = "ysf";
var Qiyu = /** @class */ (function () {
    function Qiyu() {
    }
    Object.defineProperty(Qiyu, "initialized", {
        get: function () {
            return typeof window[YSF] != "undefined";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Qiyu.ready = function () {
        return new Promise(function (resolve) {
            var loop = function (ms) {
                if (Qiyu.initialized) {
                    resolve(Qiyu);
                }
                else {
                    setTimeout(function () { return loop(ms); }, ms);
                }
            };
            loop(100);
        });
    };
    Qiyu.url = function () {
        return Qiyu.ysf().url();
    };
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
    Qiyu.ysf = /**
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
    function () {
        return window[YSF];
    };
    return Qiyu;
}());
export { Qiyu };
//# sourceMappingURL=qiyu.js.map