            _   __                _   __
           / | / /__ _      __   / | / /__ _      __
          /  |/ / _ \ | /| / /  /  |/ / _ \ | /| / /
         / /|  /  __/ |/ |/ /  / /|  /  __/ |/ |/ /
        /_/ |_/\___/|__/|__/  /_/ |_/\___/|__/|__/

        Function.prototype.new = function () {
          var that = Object.create(this.prototype);

          var obj = this.apply(that, arguments);

          return (typeof obj === 'object' && obj) || that;
        }

        var roger = Person.new('Roger', 'Waters');

        roger.fullName()
        // 'Roger Waters'

        roger.fullNameReversed()
        // 'Waters Roger'
















































































slide 043
